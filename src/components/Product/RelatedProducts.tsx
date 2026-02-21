import Box from '@component/Box';
import FlexBox from '@component/FlexBox';
import Image from '@component/Image';
import ProductCard12 from '@component/product-cards/HeadlineCard';
import Rating from '@component/rating/Rating';
import { Span } from '@component/Typography';
import Link from 'next/link';
import React from 'react';
import { getImageUrl } from '../../utils/imageUtils';

interface RelatedProductProps {
  products: any[];
}

const RelatedProducts: React.FC<RelatedProductProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <ProductCard12 title="Related Products">
      <ul>
        {products.map((product, idx) => {
          const imageUrl = getImageUrl(product?.image);
          return (
            <li key={(product?.slug || 'related') + idx} style={{ marginBottom: '1.5rem' }}>
              <Link href={product?.slug || '#'}>
                <a>
                  <FlexBox alignItems="center">
                    <Image
                      src={imageUrl || '/assets/images/placeholder.png'}
                      alt={product?.name || 'Related Product'}
                      height="80"
                      width="80"
                      borderRadius="10px"
                      style={{ objectFit: 'cover' }}
                    />
                    <Box ml="20px">
                      <Span fontSize="18px">{product?.name || 'Loading...'}</Span>
                      <FlexBox alignItems="center">
                        <Rating
                          value={product?.ratingAverage || 0}
                          color="warn"
                          size="small"
                        />
                        <Span fontSize="14px" ml="5px">
                          ({product?.totalReviewCount || 0})
                        </Span>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </ProductCard12>
  );
};

export default RelatedProducts;
