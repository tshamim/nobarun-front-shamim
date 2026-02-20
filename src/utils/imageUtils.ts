import { getCDNOptimizedUrl } from './cdnUtils';

/**
 * Helper function to get image URL with base URL prepended,
 * but only if it's not already a full URL.
 * Also optimizes S3 domains to CloudFront.
 * @param imagePath - The image path or full URL
 * @returns Full optimized URL
 */
export const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath || imagePath === '') return '';

  let baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || 'https://d1v2sbji1mlin2.cloudfront.net/';
  if (baseUrl === 'undefined') {
    baseUrl = 'https://d1v2sbji1mlin2.cloudfront.net/';
  }

  // Ensure trailing slash
  if (!baseUrl.endsWith('/')) {
    baseUrl += '/';
  }

  // Detect if it's already a full URL
  const isFullUrl = imagePath.startsWith('http://') || imagePath.startsWith('https://');

  // Optimize URL (Replace S3 domains with CloudFront)
  const optimizedPath = getCDNOptimizedUrl(imagePath);

  // If it's a full URL, return the optimized version as is
  if (isFullUrl) {
    return optimizedPath;
  }

  // Otherwise, prepend the base URL
  // Ensure we don't end up with double slashes if the path starts with /
  const cleanPath = optimizedPath.startsWith('/') ? optimizedPath.substring(1) : optimizedPath;

  // FIX: Ensure 'media/' prefix if missing and not already in baseUrl
  // Most product images are in the media/ directory
  let finalPath = cleanPath;
  const hasMediaInBase = baseUrl.includes('/media');
  if (!cleanPath.startsWith('media/') && !cleanPath.startsWith('assets/') && !hasMediaInBase) {
    finalPath = `media/${cleanPath}`;
  }

  return `${baseUrl}${finalPath}`;
};

/**
 * Generates the hallmark (watermarked) version of an image URL.
 * Handles both relative paths and full URLs.
 * @param imagePath - The original image path (relative or full URL)
 * @param useHallmark - Whether to use hallmark version (default: true)
 * @returns Full URL with hallmark prefix if applicable
 */
export const getHallmarkImageUrl = (imagePath: string | undefined | null, useHallmark: boolean = true): string => {
  if (!imagePath || imagePath === '') return '';

  // Get the base optimized URL first
  const baseImageUrl = getImageUrl(imagePath);

  if (!useHallmark) {
    return baseImageUrl;
  }

  // We need to extract the path to modify the filename
  let urlObj;
  let pathStr = '';
  let urlPrefix = '';

  try {
    urlObj = new URL(baseImageUrl);
    pathStr = urlObj.pathname;
    urlPrefix = baseImageUrl.substring(0, baseImageUrl.indexOf(pathStr));
  } catch (e) {
    // If URL parsing fails, it might be a malformed URL or a path string
    // In our case, getImageUrl should have made it a full URL if it had a base URL
    // Fallback to simpler path manipulation
    pathStr = baseImageUrl;
  }

  const parts = pathStr.split('/');
  const fileName = parts.pop();
  const dir = parts.join('/');

  if (!fileName || fileName.indexOf('.') === -1) {
    return baseImageUrl;
  }

  const dotIndex = fileName.lastIndexOf('.');
  const ext = fileName.substring(dotIndex + 1);
  const nameWithoutExt = fileName.substring(0, dotIndex);

  // Hallmark naming convention: hallmark-{baseName}.{ext}
  // Extract base name (before underscore if exists)
  const underscoreIndex = nameWithoutExt.indexOf('_');
  const baseName = underscoreIndex !== -1
    ? nameWithoutExt.substring(0, underscoreIndex)
    : nameWithoutExt;

  const hallmarkFileName = `hallmark-${baseName}.${ext}`;
  const hallmarkPath = dir ? `${dir}/${hallmarkFileName}` : hallmarkFileName;

  return urlPrefix ? `${urlPrefix}${hallmarkPath}` : hallmarkPath;
};
