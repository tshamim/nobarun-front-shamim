import { getImageUrl } from '../utils/imageUtils';

const imageLoader = ({ src, width = 100, height = 100, quality = 75 }) => {
  const fullUrl = getImageUrl(src);
  return `${fullUrl}?w=${width}&h=${height}&q=${quality}`;
};

export default imageLoader;
