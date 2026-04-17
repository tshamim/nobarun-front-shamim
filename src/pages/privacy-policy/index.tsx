import Box from '@component/Box';
import OtherLayout from '@component/layout/OtherLayout';
import { H1, H2, H3, H4, Paragraph } from '@component/Typography';
import useAllProductCategories from '@hook/Home/useAllProductCategories';
import useProductCount from '@hook/useNoOfProduct';
import useWindowSize from '@hook/useWindowSize';
import Head from 'next/head';

const ProductSearchResult = () => {
  const width = useWindowSize();
  const isTablet = width < 1025;

  return (
    <>
      <Head>
        <title>privacy policy - Nobarun International</title>
      </Head>
      <Box p="20px" mb="70px" maxWidth="1200px" mx="auto">
        <H1
          textAlign="center"
          mt={isTablet ? '35px' : ''}
          mb={30}
          fontSize="4rem"
        >
          Privacy Policy
        </H1>

        <Box mb="4rem" color="#555">
          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Nobarun International | Proven Partner Since 2017</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            At Nobarun International, accessible from{' '}
            <a href="https://www.nobarunbd.com/" style={{ color: '#ec1c24' }}>www.nobarunbd.com</a>, 
            protecting the privacy of our visitors and clients is one of our top priorities. This Privacy Policy explains what information we collect, how we use it, and how we protect it.
          </Paragraph>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            By using our website, you agree to the terms of this Privacy Policy.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Information We Collect</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1rem">
            We may collect personal and business information when you:
          </Paragraph>
          <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li>Submit an inquiry or request a quotation</li>
            <li>Contact us via phone, email, or WhatsApp</li>
            <li>Place an order or engage in a project</li>
          </ul>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1rem">
            This information may include:
          </Paragraph>
          <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Company or business name</li>
            <li>Address or location</li>
            <li>Project or product requirements</li>
          </ul>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            We may also collect non-personal data such as IP address, browser type, and website usage data for analytics purposes.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">How We Use Your Information</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1rem">
            We use the collected information to:
          </Paragraph>
          <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li>Provide quotations and respond to inquiries</li>
            <li>Supply products and manage project execution</li>
            <li>Communicate with you regarding orders, services, and support</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Send relevant updates or promotional information (if applicable)</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            We may contact you via phone, email, or WhatsApp for business communication, quotation follow-up, and project-related discussions.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Business & Marketing Use of Information</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            Nobarun International may use client business names, company names, and general locations (city/area) along with non-sensitive project or product details for:
          </Paragraph>
          <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li>Marketing and promotional content</li>
            <li>Website and portfolio display</li>
            <li>Client references and reviews</li>
          </ul>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            We do not publish or share any confidential, financial, or sensitive information.
          </Paragraph>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            If any client prefers to keep their information private, they may request restriction or removal at any time by contacting us.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Information Sharing</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            We do not sell, trade, or rent your personal or business information to third parties.
          </Paragraph>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1rem">
            Information may be shared only when necessary for:
          </Paragraph>
          <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li>Product delivery or logistics support</li>
            <li>Payment processing through banking channels</li>
            <li>Legal or regulatory requirements</li>
          </ul>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Data Security</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure. Access to personal data is limited to authorized personnel only.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Cookies and Website Data</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            Our website may use cookies to enhance user experience and analyze website performance. Cookies help us understand user preferences and improve our content.
          </Paragraph>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            You can choose to disable cookies through your browser settings.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Third-Party Links</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            Our website may contain links to external websites. We are not responsible for the privacy practices of those third-party websites.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Your Rights</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1rem">
            You have the right to:
          </Paragraph>
          <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li>Request access to your data</li>
            <li>Request correction or update of your information</li>
            <li>Request deletion of your data (where applicable)</li>
          </ul>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            To exercise any of these rights, please contact us directly.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Children’s Information</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            Nobarun International does not knowingly collect personal information from children under the age of 13. If such information is identified, we will take immediate steps to remove it.
          </Paragraph>

          <H3 fontSize="2.5rem" mb="1rem" mt="2rem" color="#2B3445">Updates to This Policy</H3>
          <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem" textAlign="justify">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page.
          </Paragraph>

          <Box mt="4rem" p="3rem" backgroundColor="#f6f9fc" borderRadius="10px" textAlign="center" boxShadow="0px 5px 15px rgba(0,0,0,0.05)">
            <H3 fontSize="2.5rem" mb="1rem" color="#2B3445">Contact Us</H3>
            <Paragraph fontSize="1.6rem" lineHeight="1.8" mb="1.5rem">
              If you have any questions about this Privacy Policy or your data, please contact us:<br /><br />
              <b>Nobarun International</b><br />
              <b>Corporate Office:</b> H#199 (1st Floor), R#01, Mohakhali DOHS, Dhaka, Bangladesh<br />
              <b>Website:</b> <a href="https://www.nobarunbd.com" style={{ color: '#ec1c24' }}>www.nobarunbd.com</a><br />
              <b>Phone:</b> <a href="tel:+8809610321421" style={{ color: 'inherit' }}>+8809610321421</a><br />
              <b>Email:</b> <a href="mailto:nobarunbd@gmail.com" style={{ color: 'inherit' }}>nobarunbd@gmail.com</a>
            </Paragraph>
          </Box>
        </Box>
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
  } catch (e) {}
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
