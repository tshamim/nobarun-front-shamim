import Box from '@component/Box';
import OtherLayout from '@component/layout/OtherLayout';
import { H1 } from '@component/Typography';
import useAllProductCategories from '@hook/Home/useAllProductCategories';
import useProductCount from '@hook/useNoOfProduct';
import useWindowSize from '@hook/useWindowSize';
import Head from 'next/head';
import React from 'react';

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 700,
  color: '#2B3445',
  borderLeft: '4px solid #1ca346',
  paddingLeft: '1.2rem',
  margin: '3rem 0 1.2rem',
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  lineHeight: '1.9',
  color: '#555',
  marginBottom: '1.2rem',
  textAlign: 'justify',
};

const listStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  lineHeight: '2',
  color: '#555',
  paddingLeft: '2rem',
  marginBottom: '1.5rem',
};

const statCardStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg,#1ca346 0%,#2db84f 50%,#6fba1a 100%)',
  borderRadius: '12px',
  padding: '2.5rem 2rem',
  textAlign: 'center',
  color: '#fff',
  flex: '1 1 200px',
  minWidth: '160px',
};

const whyCardStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #eee',
  borderRadius: '10px',
  padding: '1.8rem',
  flex: '1 1 260px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
};

const ctaBoxStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #2B3445 0%, #1a2235 100%)',
  borderRadius: '16px',
  padding: '4rem 3rem',
  textAlign: 'center',
  marginTop: '4rem',
};

const ProductSearchResult = () => {
  const width = useWindowSize();
  const isTablet = width < 1025;

  return (
    <>
      <Head>
        <title>About Us - Nobarun International</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Store',
              name: 'Nobarun International',
              image: 'https://www.nobarunbd.com/assets/images/logo.svg',
              '@id': '',
              url: 'https://www.nobarunbd.com/',
              telephone: '01711-998626',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '01',
                addressLocality: 'Dhaka',
                postalCode: '1206',
                addressCountry: 'BD',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 23.8227481,
                longitude: 90.36253359999999,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '09:00',
                closes: '18:00',
              },
              sameAs: [
                'https://www.facebook.com/nobaruninternational',
                'https://twitter.com/nobarunbd',
                'https://www.youtube.com/c/NobarunInternational/videos',
              ],
            }),
          }}
        />
      </Head>

      <Box p="20px" mb="70px" maxWidth="1200px" mx="auto">
        {/* Page Header */}
        <Box textAlign="center" mt={isTablet ? '35px' : '20px'} mb="20px">
          <H1 fontSize={isTablet ? '3rem' : '4.5rem'} color="#2B3445">
            About Us
          </H1>
          <p style={{ fontSize: '1.7rem', color: '#7D879C', maxWidth: '700px', margin: '1rem auto 0', lineHeight: '1.7' }}>
            Your trusted partner for commercial, industrial, and retail equipment solutions in Bangladesh since 2017.
          </p>
        </Box>

        {/* Stats Bar */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', margin: '3rem 0 4rem' }}>
          <div style={statCardStyle}>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>8+</div>
            <div style={{ fontSize: '1.4rem', opacity: 0.9 }}>Years of Experience</div>
          </div>
          <div style={statCardStyle}>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>2500+</div>
            <div style={{ fontSize: '1.4rem', opacity: 0.9 }}>Satisfied Clients</div>
          </div>
          <div style={statCardStyle}>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>500+</div>
            <div style={{ fontSize: '1.4rem', opacity: 0.9 }}>Successful Projects</div>
          </div>
        </div>

        {/* Who We Are */}
        <h2 style={sectionHeadingStyle}>Nobarun International | Proven Partner Since 2017</h2>
        <p style={paragraphStyle}>
          Nobarun International is a leading supplier and solution provider of commercial, industrial, and retail equipment in Bangladesh. Since 2017, we have been supporting businesses with reliable products, expert guidance, and complete project solutions — helping them start, scale, and operate efficiently.
        </p>
        <p style={paragraphStyle}>
          With over 8 years of experience, 2500+ satisfied clients, and 500+ successful projects, we have built a strong reputation for delivering quality, consistency, and dependable service across multiple industries.
        </p>

        {/* What We Do */}
        <h2 style={sectionHeadingStyle}>What We Do</h2>
        <p style={paragraphStyle}>
          We provide end-to-end solutions including product supply, installation, project setup, import support, and after-sales service. Our goal is to make your entire setup process smooth, efficient, and hassle-free.
        </p>
        <p style={{ ...paragraphStyle, fontWeight: 600, color: '#2B3445' }}>Our key product categories include:</p>
        <ul style={listStyle}>
          <li>Commercial Kitchen &amp; Restaurant Equipment</li>
          <li>Refrigeration &amp; Cold Storage Solutions</li>
          <li>Ice Cream Business Equipment &amp; Setup</li>
          <li>Supermarket &amp; Retail Equipment</li>
          <li>Safety &amp; Security System Products</li>
          <li>Car Parking &amp; Road Safety Equipment</li>
          <li>Industrial &amp; Warehouse Solutions</li>
          <li>Slaughterhouse &amp; Meat Processing Equipment</li>
        </ul>
        <p style={paragraphStyle}>
          Whether you are starting a new business or upgrading an existing one, we deliver solutions tailored to your exact requirements.
        </p>

        {/* Special Focus */}
        <h2 style={sectionHeadingStyle}>Special Focus Areas</h2>
        <p style={paragraphStyle}>We specialize in delivering complete solutions across a wide range of industries, including:</p>
        <ul style={listStyle}>
          <li>Commercial Kitchen Equipment</li>
          <li>Refrigeration &amp; Cold Storage Systems</li>
          <li>Ice Cream Business Setup</li>
          <li>Supermarket &amp; Retail Equipment</li>
          <li>Safety &amp; Security Systems</li>
          <li>Car Parking &amp; Road Safety Equipment</li>
          <li>Industrial &amp; Warehouse Solutions</li>
          <li>Slaughterhouse &amp; Meat Processing Equipment</li>
          <li>Food Business Setup Solutions</li>
        </ul>

        {/* Who We Work With */}
        <h2 style={sectionHeadingStyle}>Who We Work With</h2>
        <p style={paragraphStyle}>We proudly serve a diverse range of clients across multiple industries in Bangladesh, including:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0' }}>
          <ul style={{ ...listStyle, flex: '1 1 300px' }}>
            <li>Agro Processing &amp; Food Industry</li>
            <li>Banks &amp; Financial Institutions</li>
            <li>Brands &amp; Lifestyle Businesses</li>
            <li>Defense &amp; National Institutions</li>
            <li>Educational Institutions</li>
            <li>Engineering &amp; Infrastructure Firms</li>
            <li>Food &amp; Beverage Businesses</li>
            <li>Garments &amp; Textile Industry</li>
            <li>Government &amp; Semi-Government Organizations</li>
            <li>Group of Companies &amp; Corporate Offices</li>
          </ul>
          <ul style={{ ...listStyle, flex: '1 1 300px' }}>
            <li>Hospitals &amp; Healthcare Institutions</li>
            <li>Hotels &amp; Allied Services</li>
            <li>Resorts, Tourism &amp; Hospitality</li>
            <li>Restaurant &amp; Related Businesses</li>
            <li>Super Shop &amp; Departmental Stores</li>
            <li>Real Estate Developers &amp; Builders</li>
            <li>International &amp; Multinational Organizations</li>
            <li>Software, IT &amp; Digital Solution Companies</li>
            <li>Others &amp; Customized Project Clients</li>
          </ul>
        </div>
        <p style={paragraphStyle}>
          We also provide complete support for tender-based projects, including BOQ preparation, sourcing, import handling, and full project execution.
        </p>

        {/* Why Choose Us */}
        <h2 style={sectionHeadingStyle}>Why Choose Nobarun International</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
          {[
            { title: 'Proven Experience', desc: '8+ years in the industry' },
            { title: 'Trusted Nationwide', desc: '2500+ clients served' },
            { title: 'Project Expertise', desc: '500+ successful deliveries' },
            { title: 'Smart Sales Team', desc: 'Skilled professionals to guide you' },
            { title: 'Quick Response', desc: 'Fast support whenever you need it' },
            { title: 'End-to-End Service', desc: 'Planning to installation & after-sales' },
            { title: 'Flexible Payments', desc: 'Multiple bank channels available' },
            { title: 'Nationwide Delivery', desc: 'Delivered across Bangladesh' },
            { title: 'Import Capability', desc: 'Reliable international sourcing' },
          ].map((item) => (
            <div key={item.title} style={whyCardStyle}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1ca346', marginBottom: '0.4rem' }}>{item.title}</div>
              <div style={{ fontSize: '1.4rem', color: '#666' }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <p style={paragraphStyle}>
          We are committed to providing practical solutions, not just products — ensuring long-term value for your business.
        </p>

        {/* Our Brand */}
        <h2 style={sectionHeadingStyle}>Our Brand</h2>
        <p style={paragraphStyle}>
          We also operate our own brand <strong>&ldquo;Coffeewala&rdquo;</strong>, offering coffee and tea vending machine solutions — a smart and profitable way to run beverage businesses with ease and efficiency.
        </p>

        {/* Locations */}
        <h2 style={sectionHeadingStyle}>Our Locations</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ ...whyCardStyle, borderTop: '3px solid #1ca346' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2B3445', marginBottom: '0.6rem' }}>🏢 Corporate Office</div>
            <div style={{ fontSize: '1.4rem', color: '#666', lineHeight: '1.7' }}>H#199 (1st Floor), R#01,<br />Mohakhali DOHS, Dhaka, Bangladesh</div>
          </div>
          <div style={{ ...whyCardStyle, borderTop: '3px solid #1ca346' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2B3445', marginBottom: '0.6rem' }}>🔧 Workshop</div>
            <div style={{ fontSize: '1.4rem', color: '#666', lineHeight: '1.7' }}>Safa Green City Gate,<br />Nimtoli Road, Keraniganj, Dhaka</div>
          </div>
        </div>

        {/* Commitment */}
        <h2 style={sectionHeadingStyle}>Our Commitment</h2>
        <p style={paragraphStyle}>
          At Nobarun International, we believe in building long-term partnerships through quality, honesty, and reliable service. Every project we handle reflects our dedication to helping our clients succeed with confidence.
        </p>

        {/* CTA */}
        <div style={ctaBoxStyle}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Get in Touch</h2>
          <p style={{ fontSize: '1.6rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
            Looking to start or upgrade your business? Contact Nobarun International today for complete equipment solutions and professional support you can trust.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg,#1ca346 0%,#2db84f 50%,#6fba1a 100%)',
              color: '#fff',
              fontSize: '1.5rem',
              fontWeight: 700,
              padding: '1.2rem 3.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
            }}
          >
            Contact Us
          </a>
        </div>
      </Box>
    </>
  );
};

ProductSearchResult.layout = OtherLayout;

export async function getStaticProps() {
  let categories = [];
  let count = null;
  try {
    categories = await useAllProductCategories();
    categories = JSON.parse(JSON.stringify(categories));
  } catch (e) { }
  try {
    count = await useProductCount();
  } catch (e) {
  } finally {
    return {
      props: {
        categories,
        count,
      },
      revalidate: 30,
    };
  }
}

export default ProductSearchResult;
