import Box from '@component/Box';
import IconButton from '@component/buttons/IconButton';
import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Grid from '@component/grid/Grid';
import Hidden from '@component/hidden/Hidden';
import Icon from '@component/icon/Icon';
import OtherLayout from '@component/layout/OtherLayout';
import CollectionFilterCard from '@component/Product/Collection/CollectionFilterCard';
import ProductCard1List from '@component/products/ProductCardList';
import Sidenav from '@component/sidenav/Sidenav';
import { H5, Paragraph } from '@component/Typography';
import useProductsByCollection from '@hook/Product/useProductsByCollectionName';
import useProductCount from '@hook/useNoOfProduct';
import useWindowSize from '@hook/useWindowSize';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const CollectionsPage = ({
  collectionName,
  collectionDescription,
  products,
  stockStatus,
  categories,
}) => {
  const [filters, setFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const width = useWindowSize();
  const isTablet = width < 1025;

  // Create SEO-friendly title and description
  const pageTitle = collectionDescription 
    ? `${collectionName} - ${collectionDescription} | Nobarun International`
    : `${collectionName} Collection - Products Price in Bangladesh | Nobarun International`;
  
  const pageDescription = collectionDescription 
    ? `${collectionDescription} Browse ${products.length} products in our ${collectionName} collection at Nobarun International.`
    : `Explore ${products.length} quality products in our ${collectionName} collection. Best prices in Bangladesh with expert service from Nobarun International.`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta 
          name="keywords" 
          content={`${collectionName}, ${collectionName} Bangladesh, ${collectionName} price, commercial equipment, Nobarun International`} 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://nobarun.com/product/collection/${collectionName.toLowerCase().replace(/\s+/g, '-')}`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        <link rel="canonical" href={`https://nobarun.com/product/collection/${collectionName.toLowerCase().replace(/\s+/g, '-')}`} />
      </Head>

      <Box pt="20px" mb="5rem">
        <FlexBox
          p="1.25rem"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          mb="55px"
          elevation={5}
          as={Card}
        >
          <div>
            <H5>{collectionName}</H5>
            <Paragraph color="text.muted">
              {products.length} results found
            </Paragraph>
          </div>
          <FlexBox alignItems="center" flexWrap="wrap">
            {isTablet && (
              <Sidenav
                position="left"
                scroll={true}
                handle={
                  <IconButton size="small">
                    <Icon>options</Icon>
                  </IconButton>
                }
              >
                <CollectionFilterCard
                  filters={filters}
                  setFilters={setFilters}
                  slug={selectedCategory}
                  categories={categories}
                  setSelectedCategory={setSelectedCategory}
                  stockStatus={stockStatus}
                />
              </Sidenav>
            )}
          </FlexBox>
        </FlexBox>
        <Grid container spacing={6}>
          <Hidden as={Grid} item lg={3} xs={12} down={1024}>
            {/* <ProductFilterCard /> */}
            <CollectionFilterCard
              filters={filters}
              setFilters={setFilters}
              slug={selectedCategory}
              categories={categories}
              setSelectedCategory={setSelectedCategory}
              stockStatus={stockStatus}
            />
          </Hidden>

          <Grid item lg={9} xs={12}>
            <ProductCard1List products={products} filters={filters} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

CollectionsPage.layout = OtherLayout;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const slug = context.params.collectionSlug;
  
  try {
    const data = await useProductsByCollection(slug);
    
    const count = await useProductCount();
    
    if (data && data.products) {
      // Transform products to match category page format
      const transformedProducts = data.products.products.map((product) => ({
        productData: {
          product: product.data,
          reviewCount: product.reviewCount,
          ratingAverage: product.ratingAvg,
        },
      }));

      return {
        props: {
          collectionName: data.products.collectionName,
          collectionDescription: data.products.collectionDescription || '',
          products: transformedProducts,
          stockStatus: data.stocks,
          categories: data.categories,
          count,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default CollectionsPage;
