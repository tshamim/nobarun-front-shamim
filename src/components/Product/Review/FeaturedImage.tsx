import React from 'react';
import { getImageUrl } from '../../../utils/imageUtils';

const FeaturedImage = ({ featuredImage, productTitle, isTablet }) => {
  return (
    <div style={{ textAlign: isTablet ? 'center' : 'left' }}>
      <img
        src={getImageUrl(featuredImage)}
        alt={productTitle}
        loading="eager"
        className="product__hero-image review__hero-image"
      />
    </div>
  );
};

export default FeaturedImage;
