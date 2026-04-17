import Box from '@component/Box';
import OtherLayout from '@component/layout/OtherLayout';
import { H1, H3, Paragraph } from '@component/Typography';
import useAllProductCategories from '@hook/Home/useAllProductCategories';
import useProductCount from '@hook/useNoOfProduct';
import useWindowSize from '@hook/useWindowSize';
import Head from 'next/head';
import React from 'react';

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
                'https://www.youtube.com/c/NobarunInternational/videos',
              ],
            }),
          }}
        />
      </Head>

      <Box p="20px" mb="70px" maxWidth="1200px" mx="auto">
        <H1
          textAlign="center"
          mt={isTablet ? '35px' : ''}
          mb={30}
          fontSize="4rem"
        >
          About us
        </H1>

        <Box
          mb="4rem"
          color="#555"
        >
          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Nobarun International | Proven Partner Since 2017</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            Nobarun International is a leading supplier and solution provider of commercial, industrial, and retail equipment in Bangladesh. Since 2017, we have been supporting businesses with reliable products, expert guidance, and complete project solutions helping them start, scale, and operate efficiently.
          </Paragraph>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            With over 8 years of experience, 2500+ satisfied clients, and 500+ successful projects, we have built a strong reputation for delivering quality, consistency, and dependable service across multiple industries.
          </Paragraph>
          
          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">What We Do</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            We provide end-to-end solutions including product supply, installation, project setup, import support, and after-sales service. Our goal is to make your entire setup process smooth, efficient, and hassle-free.
          </Paragraph>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1rem">
            Our key product categories include:
          </Paragraph>
          <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li>Commercial Kitchen & Restaurant Equipment</li>
            <li>Refrigeration & Cold Storage Solutions</li>
            <li>Ice Cream Business Equipment & Setup</li>
            <li>Supermarket & Retail Equipment</li>
            <li>Safety & Security System Products</li>
            <li>Car Parking & Road Safety Equipment</li>
            <li>Industrial & Warehouse Solutions</li>
            <li>Slaughterhouse & Meat Processing Equipment</li>
          </ul>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            Whether you are starting a new business or upgrading an existing one, we deliver solutions tailored to your exact requirements.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Special Focus Areas</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1rem">
            We specialize in delivering complete solutions across a wide range of industries, including:
          </Paragraph>
          <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li>Commercial Kitchen Equipment</li>
            <li>Refrigeration & Cold Storage Systems</li>
            <li>Ice Cream Business Setup</li>
            <li>Supermarket & Retail Equipment</li>
            <li>Safety & Security Systems</li>
            <li>Car Parking & Road Safety Equipment</li>
            <li>Industrial & Warehouse Solutions</li>
            <li>Slaughterhouse & Meat Processing Equipment</li>
            <li>Food Business Setup Solutions</li>
          </ul>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Who We Work With</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1rem">
            We proudly serve a diverse range of clients across multiple industries in Bangladesh, including:
          </Paragraph>
          <Box display="flex" flexWrap="wrap" mb="1.5rem">
            <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', paddingLeft: '2rem', flex: '1 1 300px' }}>
              <li>Agro Processing & Food Industry</li>
              <li>Banks & Financial Institutions</li>
              <li>Brands & Lifestyle Businesses</li>
              <li>Defense & National Institutions</li>
              <li>Educational Institutions</li>
              <li>Engineering & Infrastructure Firms</li>
              <li>Food & Beverage Businesses</li>
              <li>Garments & Textile Industry</li>
              <li>Government & Semi-Government Organizations</li>
              <li>Group of Companies & Corporate Offices</li>
            </ul>
            <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', paddingLeft: '2rem', flex: '1 1 300px' }}>
              <li>Hospitals & Healthcare Institutions</li>
              <li>Hotels & Allied Services</li>
              <li>Resorts & Tourism & Hospitality</li>
              <li>Restaurant & Related Businesses</li>
              <li>Super Shop & Departmental Stores</li>
              <li>Real Estate Developers & Builders</li>
              <li>International & Multinational Organizations</li>
              <li>Software, IT & Digital Solution Companies</li>
              <li>Others & Customized Project Clients</li>
            </ul>
          </Box>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            We also provide complete support for tender-based projects, including BOQ preparation, sourcing, import handling, and full project execution.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Why Choose Nobarun International</H3>
          <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li><b>Proven Experience:</b> 8+ years in the industry</li>
            <li><b>Trusted Nationwide:</b> 2500+ clients served</li>
            <li><b>Project Expertise:</b> 500+ successful project deliveries</li>
            <li><b>Smart & Experienced Sales Team:</b> Skilled professionals to guide you properly</li>
            <li><b>Quick Response Commitment:</b> Fast support whenever you need it</li>
            <li><b>End-to-End Service:</b> From planning to installation and after-sales</li>
            <li><b>Flexible Payment Options:</b> Multiple bank channels available</li>
            <li><b>Nationwide Delivery:</b> Products and projects delivered across Bangladesh</li>
            <li><b>Strong Import Capability:</b> Reliable international sourcing</li>
          </ul>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            We are committed to providing practical solutions, not just products—ensuring long-term value for your business.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Our Brand</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            We also operate our own brand <b>“Coffeewala”</b>, offering coffee and tea vending machine solutions a smart and profitable way to run beverage businesses with ease and efficiency.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Our Locations</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1rem">
            <b>Corporate Office:</b><br />
            H#199 (1st Floor), R#01, Mohakhali DOHS, Dhaka, Bangladesh
          </Paragraph>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem">
            <b>Workshop:</b><br />
            Safa Green City Gate, Nimtoli Road, Keraniganj, Dhaka
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Our Commitment</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            At Nobarun International, we believe in building long-term partnerships through quality, honesty, and reliable service. Every project we handle reflects our dedication to helping our clients succeed with confidence.
          </Paragraph>

          <Box mt="4rem" p="3rem" backgroundColor="#f6f9fc" borderRadius="10px" textAlign="center" boxShadow="0px 5px 15px rgba(0,0,0,0.05)">
            <H3 fontSize="2.5rem" mb="1rem" color="#2B3445">Get in Touch</H3>
            <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem">
              Looking to start or upgrade your business?<br />
              Contact Nobarun International today for complete equipment solutions and professional support you can trust.
            </Paragraph>
          </Box>

        </Box>
      </Box>
    </>
  );
};

ProductSearchResult.layout = OtherLayout;

export async function getStaticProps() {
  let categories=[];
  let count=null;
  try {
    categories = await useAllProductCategories();
    categories=JSON.parse(JSON.stringify(categories));
  }
  catch (e) {

  }
  try {
    count = await useProductCount();
  }
  catch (e) {

  }
  finally {
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
