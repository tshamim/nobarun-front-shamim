import Box from '@component/Box';
import HoverBox from '@component/HoverBox';
import OtherLayout from '@component/layout/OtherLayout';
import { H1, H2, H3 } from '@component/Typography';
import useAllProductCategories from '@hook/Home/useAllProductCategories';
import useAllClientsByCategory from '@hook/useAllClientsByCategory';
import useProductCount from '@hook/useNoOfProduct';
import useWindowSize from '@hook/useWindowSize';
import Head from 'next/head';
import { useEffect, useState } from 'react';
// ...existing code...
const ClientsPage = ({ clients }) => {
  const [allLoadedCategory, setAllLoadedCategory] = useState('');

  const loadMoreHandler = (id: string) => {
    if (allLoadedCategory === id) {
      setAllLoadedCategory('');
    } else {
      setAllLoadedCategory(id);
    }
  };

  const width = useWindowSize();
  let noOfClients = 7;
  if (width < 1250) noOfClients = 6;
  if (width < 1170) noOfClients = 5;
  if (width < 1153) noOfClients = 6;
  if (width < 1053) noOfClients = 5;
  if (width < 1041) noOfClients = 6;
  if (width < 936) noOfClients = 5;
  if (width < 880) noOfClients = 7;
  if (width < 710) noOfClients = 6;

  // adjust client name font-size so it stays on one line
  useEffect(() => {
    const adjustTitles = () => {
      const els = document.querySelectorAll<HTMLElement>('.client__title');
      els.forEach((el) => {
        el.style.whiteSpace = 'nowrap';
        el.style.overflow = 'hidden';
        el.style.textOverflow = 'ellipsis';

        let fontSize = 14; // start slightly bigger
        const minSize = 10; // minimum to shrink to
        el.style.fontSize = fontSize + 'px';

        // shrink until it fits or reaches min size
        while (el.scrollWidth > el.clientWidth && fontSize > minSize) {
          fontSize -= 1;
          el.style.fontSize = fontSize + 'px';
        }
      });
    };

    adjustTitles();
    window.addEventListener('resize', adjustTitles);
    return () => window.removeEventListener('resize', adjustTitles);
  }, [clients, allLoadedCategory, width]);

  return (
    <>
      <Head>
        <title>Our Valued Clients - Nobarun International</title>
        <meta name="description" content="Explore our diverse portfolio of valued clients across various industries including defense, healthcare, hospitality, and more." />
      </Head>
      <Box mb="6rem">
        {/* Modern Hero Section */}
        <div className="clients-hero" style={{
          background: 'linear-gradient(135deg, #1ca346 0%, #6fba1a 100%)',
          padding: '4rem 2rem',
          borderRadius: '12px',
          marginBottom: '4rem',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(28, 163, 70, 0.2)',
        }}>
          <H1 
            fontSize="3.6rem" 
            fontWeight="700" 
            color="#fff"
            mb="1rem"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.1)',
              letterSpacing: '-0.5px',
            }}
          >
            Our Valued Clients
          </H1>
          <p style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: '1.6rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Trusted by leading organizations across Bangladesh and beyond
          </p>
        </div>

        {/* Client Categories */}
        {clients.map((category, categoryIndex) => {
          const length =
            allLoadedCategory === category.categoryName
              ? category.clients.length
              : noOfClients;
          
          return (
            <Box 
              mb="5rem" 
              key={category.categoryName}
              style={{
                animation: `fadeInUp 0.6s ease-out ${categoryIndex * 0.1}s both`,
              }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                paddingBottom: '0.5rem',
                borderBottom: '3px solid #f0f0f0',
              }}>
                <div style={{
                  width: '4px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #1ca346 0%, #6fba1a 100%)',
                  borderRadius: '2px',
                  marginRight: '1.5rem',
                }} />
                <H2 
                  fontSize="2.8rem" 
                  fontWeight="700"
                  color="#2d3748"
                  mb="0"
                  style={{
                    letterSpacing: '-0.3px',
                  }}
                >
                  {category.categoryName}
                </H2>
              </div>

              {/* Clients Grid */}
              <div className="clients-list_wrapper">
                {category.clients.slice(0, length).map((item, idx) => (
                  <Box
                    key={item.clientName + idx}
                    className="client client_list"
                    style={{
                      animation: `fadeInScale 0.5s ease-out ${idx * 0.05}s both`,
                    }}
                  >
                    <HoverBox 
                      borderRadius={8} 
                      className="client__body"
                      style={{
                        background: '#fff',
                        padding: '1rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        aspectRatio: '1 / 1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        alt={`${item.clientName} - ${category.categoryName}`}
                        src={process.env.NEXT_PUBLIC_IMAGE_URL + item.logo}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain',
                          filter: 'grayscale(20%)',
                          transition: 'filter 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = 'grayscale(0%)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = 'grayscale(20%)';
                        }}
                      />
                    </HoverBox>
                    <H3
                      fontSize="14px"
                      fontWeight="600"
                      className="client__title"
                      mt="0rem"
                      color="#4a5568"
                      style={{
                        textAlign: 'center',
                        lineHeight: '1.4',
                      }}
                    >
                      {item.clientName}
                    </H3>
                  </Box>
                ))}
              </div>

              {/* Load More Button */}
              {category.clients.length > noOfClients && (
                <Box textAlign="right" mt="1.5rem">
                  <button
                    className="client_load-btn"
                    onClick={() => loadMoreHandler(category.categoryName)}
                  >
                    {allLoadedCategory === category.categoryName
                      ? '▲ Show Less'
                      : `▼ View All ${category.clients.length} Clients`}
                  </button>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      {/* Add animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

ClientsPage.layout = OtherLayout;

export async function getServerSideProps() {
  let clients = [];
  let categories = [];
  let count = null;
  try {
    clients = await useAllClientsByCategory();
  } catch (e) {
    console.error('Error fetching clients:', e);
  }
  try {
    categories = await useAllProductCategories();
    categories = JSON.parse(JSON.stringify(categories));
  } catch (e) {
    console.error('Error fetching categories:', e);
  }
  try {
    count = await useProductCount();
  } catch (e) {
    console.error('Error fetching product count:', e);
  }
  
  return {
    props: {
      clients,
      categories,
      count,
    },
  };
}

export default ClientsPage;
// ...existing code...