/**
 * Generates the hallmark (watermarked) version of an image URL
 * @param imagePath - The original image path (e.g., "media/1641984016_5298107.png")
 * @param useHallmark - Whether to use hallmark version (default: true)
 * @returns Full URL with hallmark prefix if applicable
 * 
 * Example:
 * Input: "media/1641984016_5298107.png"
 * Output: "https://d1v2sbji1mlin2.cloudfront.net/media/hallmark-1641984016.png"
 */
export const getHallmarkImageUrl = (imagePath: string | undefined, useHallmark: boolean = true): string => {
  if (!imagePath || imagePath === '') return '';
  
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || 'https://d1v2sbji1mlin2.cloudfront.net/';
  
  if (!useHallmark) {
    return `${baseUrl}${imagePath}`;
  }
  
  // Extract directory and filename
  const parts = imagePath.split('/');
  const fileName = parts.pop();
  const dir = parts.join('/');
  
  if (!fileName) return `${baseUrl}${imagePath}`;
  
  // Extract extension
  const dotIndex = fileName.lastIndexOf('.');
  if (dotIndex === -1) return `${baseUrl}${imagePath}`;
  
  const ext = fileName.substring(dotIndex + 1);
  const nameWithoutExt = fileName.substring(0, dotIndex);
  
  // Extract base name (before underscore if exists)
  // Example: "1641984016_5298107" -> "1641984016"
  const underscoreIndex = nameWithoutExt.indexOf('_');
  const baseName = underscoreIndex !== -1 
    ? nameWithoutExt.substring(0, underscoreIndex) 
    : nameWithoutExt;
  
  // Generate hallmark path with base name
  const hallmarkFileName = `hallmark-${baseName}.${ext}`;
  const hallmarkPath = dir ? `${dir}/${hallmarkFileName}` : hallmarkFileName;
  
  return `${baseUrl}${hallmarkPath}`;
};

/**
 * Helper function to get image URL with base URL prepended
 * @param imagePath - The image path
 * @returns Full URL
 */
export const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return '';
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || 'https://d1v2sbji1mlin2.cloudfront.net/';
  return `${baseUrl}${imagePath}`;
};
