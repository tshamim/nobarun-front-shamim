import { gql } from '@apollo/client';
import GoToTop from '@component/goToTop/GoToTop';
import Navbar from '@component/navbar/Navbar';
import useAllProductCategories from '@hook/Home/useAllProductCategories';
import Head from 'next/head';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/autoplay';
import {
    A11y,
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import AppLayout from '../components/layout/AppLayout';
import client from '../config/ApolloClient';

const HomePage = ({ clients, categories, featuredCategories, collections }) => {
  return (
    <>
      <Head>
        <title>Nobarun International - Leading Supplier of Commercial Kitchen & Security Equipment in Bangladesh</title>
        <meta 
          name="description" 
          content="Nobarun International is Bangladesh's premier supplier of digital gate systems, commercial kitchen equipment, supermarket equipment, cold storage solutions, and restaurant equipment since 2017. Quality products with expert service." 
        />
        <meta 
          name="keywords" 
          content="commercial kitchen equipment Bangladesh, digital gate systems, supermarket equipment, cold storage solutions, restaurant equipment, car parking management, security products, Nobarun International, kitchen equipment Dhaka" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Nobarun International - Commercial Kitchen & Security Equipment" />
        <meta property="og:description" content="Leading supplier of digital safety & security products, commercial kitchen equipment, and supermarket solutions in Bangladesh since 2017." />
        <meta property="og:url" content="https://nobarun.com" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Nobarun International - Commercial Kitchen & Security Equipment" />
        <meta name="twitter:description" content="Leading supplier of digital safety & security products, commercial kitchen equipment, and supermarket solutions in Bangladesh since 2017." />
        
        <link rel="canonical" href="https://nobarun.com" />
      </Head>
      <main>
        <GoToTop showBelow={250} />
        <Navbar navListOpen={true} height={400} categories={categories} />
        {/* hero section start */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-img">
              <Swiper
                loop={true}
                speed={1000}
                autoplay={{ delay: 5000 }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              >
                <SwiperSlide>
                  <img
                    src="/assets/images/banners/slider-1.webp"
                    alt="hero Image one"
                    className="desktop-banner"
                  />
                  <Image
                    src="/assets/images/banners/mobile/slider-1.webp"
                    width={550}
                    height={245}
                    alt="hero Mobile Image one"
                    className="mobile-banner"
                    priority
                    layout="responsive"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/images/banners/slider-2.webp"
                    alt="hero Image two"
                    className="desktop-banner"
                  />
                  <Image
                    src="/assets/images/banners/mobile/slider-2.webp"
                    width={550}
                    height={245}
                    alt="hero Mobile Image two"
                    className="mobile-banner"
                    layout="responsive"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/images/banners/slider-3.webp"
                    alt="hero Image Three"
                    className="desktop-banner"
                    // loading="lazy"
                  />
                  <Image
                    src="/assets/images/banners/mobile/slider-3.webp"
                    width={550}
                    height={245}
                    alt="hero Mobile Image three"
                    className="mobile-banner"
                    layout="responsive"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/images/banners/slider-4.webp"
                    alt="hero Image Four"
                    className="desktop-banner"
                    // loading="lazy"
                  />
                  <Image
                    src="/assets/images/banners/mobile/slider-4.webp"
                    width={550}
                    height={245}
                    alt="hero Mobile Image Four"
                    className="mobile-banner"
                    layout="responsive"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/images/banners/slider-5.webp"
                    alt="hero Image Five"
                    className="desktop-banner"
                    // loading="lazy"
                  />
                  <Image
                    src="/assets/images/banners/mobile/slider-5.webp"
                    width={550}
                    height={245}
                    alt="hero Mobile Image Five"
                    className="mobile-banner"
                    layout="responsive"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* hero section end */}

        {/* out clients section start */}
        <section className="our-clients-section">
          <div className="container">
            <div className="client-heading">
              <h2>Our Clients</h2>
              <Link href={`/clients`}>
                <a>
                  <span>View All</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    width="20"
                    height="20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <div className="clients-main-wrap">
              {clients
                .filter((item, index) => item && index < 8)
                .map((item, index) => (
                  <Link href="#" key={index}>
                    <a>
                      <div className="client-box">
                        <img
                          src={process.env.NEXT_PUBLIC_IMAGE_URL + item.imgUrl}
                          alt={`Image for ${item.title} client`}
                          className="lazyload"
                          loading="lazy"
                        />
                        <p>{item.title}</p>
                      </div>
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        </section>
        {/* out clients section end */}

        {/* featured categories section start */}
        <section className="featured-categories-section">
          <div className="container">
            <div className="category-heading">
              <h2>Featured Categories</h2>
            </div>
            <div className="category-main-wrap">
              {featuredCategories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                  <a>
                    <div className="category-box">
                      <div className="img-placee">
                        <img
                          src={process.env.NEXT_PUBLIC_IMAGE_URL + category.image}
                          alt={`Thumbnail for ${category.name} featured category`}
                          loading="lazy"
                        />
                      </div>
                      <h4>{category.name}</h4>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* featured categories section end */}

        {/* collections section start */}
        {collections && collections.length > 0 && collections.map((collection, collectionIndex) => (
          collection && collection.products && collection.products.length > 0 && (
            <section key={collectionIndex} className="collection-section-modern">
              <div className="container">
                <div className="collection-header">
                  <h2>{collection.name}</h2>
                  {collection.slug && (
                    <Link href={`/product/collection/${collection.slug}`}>
                      <a className="view-all-link">
                        <span>View All</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          width="18"
                          height="18"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </Link>
                  )}
                </div>
                <div className="collection-products-grid">
                  {collection.products
                    .filter((item, index) => item && index < 4)
                    .map(({ product, reviewCount, ratingAverage }) => (
                      <Link key={product?.id} href={`/${product.id}`}>
                        <a>
                          <div className="collection-product-card">
                            <div className="product-image">
                              <img
                                src={process.env.NEXT_PUBLIC_IMAGE_URL + product.featured}
                                alt={product.productName}
                                loading="lazy"
                              />
                            </div>
                            <div className="product-info">
                              <h4>{product.productName}</h4>
                              <div className="rating-row">
                                <div className="stars">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                      key={star}
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      className={star <= Math.round(ratingAverage || 0) ? '' : 'star-empty'}
                                    >
                                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                  ))}
                                </div>
                                {reviewCount > 0 && (
                                  <span className="review-text">({reviewCount} reviews)</span>
                                )}
                              </div>
                              {product.populatedCategory && product.populatedCategory.name && (
                                <span className="category-tag">{product.populatedCategory.name}</span>
                              )}
                            </div>
                          </div>
                        </a>
                      </Link>
                    ))}
                </div>
              </div>
            </section>
          )
        ))}
        {/* collections section end */}


      </main>
    </>
  );
};
HomePage.layout = AppLayout;

export async function getStaticProps() {
  let categories = [];
  let clients = [];
  let count = null;
  let collections = [];

  let featuredCategories = [];
  try {
    categories = await useAllProductCategories();
    categories = JSON.parse(JSON.stringify(categories));
    featuredCategories = categories.filter((category) => category.isFeatured);
  } catch (e) {}
  try {
    let { data } = await client.query({
      query: gql`
        query getFeaturedClients {
          getAllFeaturedClients {
            id
            title: clientName
            imgUrl: logo
          }
        }
      `,
    });
    clients = data.getAllFeaturedClients;
  } catch (e) {}
  
  try {
    let { data } = await client.query({
      query: gql`
        query getCollectionWiseProduct {
          getAllPopulatedCollection {
            name
            slug
            products {
              product {
                id: slug
                productName
                discount
                featured
                populatedCategory {
                  name
                  icon
                }
              }
              reviewCount
              ratingAverage
            }
          }
        }
      `,
    });
    collections = data.getAllPopulatedCollection;
  } catch (e) {}

    return {
      props: {
        clients,
        categories,
        featuredCategories,
        collections,
        count,
      },
      revalidate: 40,
    };
  }

export default HomePage;
