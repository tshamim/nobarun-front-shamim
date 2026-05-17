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
import { getImageUrl } from '../utils/imageUtils';
import AppLayout from '../components/layout/AppLayout';
import ProductCard1 from '../components/product-cards/ProductCard';
import client from '../config/ApolloClient';

const HomePage = ({ clients, categories, featuredCategories, collections }) => {
  return (
    <>
      <Head>
        <title>Nobarun International || Proven Partner Since 2017</title>
        <meta
          name="description"
          content="Supplier of Digital Safety & Security Products, Supermarket Equipment, Slaughterhouse Equipment, and Commercial Kitchen Equipment in Bangladesh since 2017."
        />

        <meta
          name="keywords"
          content="commercial kitchen equipment Bangladesh, digital gate systems, supermarket equipment, cold storage solutions, restaurant equipment, car parking management, security products, Nobarun International, kitchen equipment Dhaka"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Nobarun International - Commercial Kitchen & Security Equipment" />
        <meta property="og:description" content="Leading supplier of digital safety & security products, commercial kitchen equipment, and supermarket solutions in Bangladesh since 2017." />
        <meta property="og:url" content="https://nobarunbd.com" />
        <meta property="og:image" content="https://www.nobarunbd.com/cover.jpeg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Nobarun International - Proven Partner Since 2017" />
        <meta name="twitter:description" content="Supplier of digital safety & security products, commercial kitchen equipment, and supermarket solutions in Bangladesh since 2017." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.nobarunbd.com/cover.jpeg" />

        {/* Canonical */}
        <link rel="canonical" href="https://nobarunbd.com" />
      </Head>

      <main>
        <GoToTop showBelow={250} />
        <Navbar navListOpen={true} height={400} categories={categories} />

        {/* hero section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-img">
              <Swiper
                loop={true}
                speed={1000}
                autoplay={{ delay: 5000 }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <SwiperSlide key={item}>
                    <img
                      src={`/assets/images/banners/slider-${item}.webp`}
                      alt={`hero Image ${item}`}
                      className="desktop-banner"
                    />
                    <Image
                      src={`/assets/images/banners/mobile/slider-${item}.webp`}
                      width={550}
                      height={245}
                      alt={`hero Mobile Image ${item}`}
                      className="mobile-banner"
                      layout="responsive"
                      priority={item === 1}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* clients */}
        <section className="our-clients-section">
          <div className="container">
            <div className="client-heading">
              <h2>Our Clients</h2>

              <Link href="/clients">
                <a className="view-all-link">
                  <span>View All</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </Link>
            </div>

            <div className="clients-main-wrap">
              {clients.slice(0, 8).map((item, index) => (
                <Link href="#" key={index}>
                  <a>
                    <div className="client-box">
                      <img
                        src={getImageUrl(item.imgUrl)}
                        alt={`Image for ${item.title} client`}
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
        {/* featured categories */}
        <section className="featured-categories-section">
          <div className="container">
            <div className="featured-categories-heading">
              <h2>Featured Categories</h2>
              <Link href="/categories">
                <a className="featured-categories-view-all">
                  View all
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </Link>
            </div>

            <div className="category-main-wrap">
              {featuredCategories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                  <a>
                    <div className="category-box">
                      <div className="img-placee">
                        <img
                          src={getImageUrl(category.image)}
                          alt={`Thumbnail for ${category.name}`}
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

        {/* collections */}
        {collections?.map((collection, i) => (
          <section key={i} className="collection-section-modern">
            <div className="container">
              <div className="collection-header">
                <h2>{collection.name}</h2>

                <Link href={`/product/collection/${collection.slug}`}>
                  <a className="view-all-link">
                    View All
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </Link>
              </div>

              <div className="collection-products-grid">
                {collection.products.slice(0, 4).map(({ product, reviewCount, ratingAverage }) => (
                  <ProductCard1
                    key={product?.id}
                    id={product?.id}
                    imgUrl={product?.featured}
                    title={product?.productName}
                    price={product?.price}
                    rating={ratingAverage || 0}
                    noOfRating={reviewCount || 0}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

HomePage.layout = AppLayout;

export async function getStaticProps() {
  let categories = [];
  let clients = [];
  let collections = [];
  let featuredCategories = [];

  try {
    categories = await useAllProductCategories();
    categories = JSON.parse(JSON.stringify(categories));
    featuredCategories = categories.filter((c) => c.isFeatured);
  } catch (e) {}

  try {
    const { data } = await client.query({
      query: gql`
        query {
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
    const { data } = await client.query({
      query: gql`
        query {
          getAllPopulatedCollection {
            name
            slug
            products {
              product {
                id: slug
                productName
                featured
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
    },
    revalidate: 40,
  };
}

export default HomePage;
