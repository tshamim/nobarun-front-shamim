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

const infoCardStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #eee',
  borderTop: '3px solid #1ca346',
  borderRadius: '10px',
  padding: '2rem',
  flex: '1 1 220px',
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
        <title>Privacy Policy - Nobarun International</title>
      </Head>

      <Box p="20px" mb="70px" maxWidth="1200px" mx="auto">
        {/* Page Header */}
        <Box textAlign="center" mt={isTablet ? '35px' : '20px'} mb="20px">
          <H1 fontSize={isTablet ? '3rem' : '4.5rem'} color="#2B3445">
            Privacy Policy
          </H1>
          <p style={{ fontSize: '1.7rem', color: '#7D879C', maxWidth: '700px', margin: '1rem auto 0', lineHeight: '1.7' }}>
            Your privacy matters to us. Here's how we handle and protect your information.
          </p>
        </Box>

        {/* Intro */}
        <div style={{ background: '#f8f9fc', borderRadius: '12px', padding: '2.5rem 3rem', marginTop: '3rem', marginBottom: '1rem' }}>
          <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>Nobarun International | Proven Partner Since 2017</h2>
          <p style={paragraphStyle}>
            At Nobarun International, accessible from{' '}
            <a href="https://www.nobarunbd.com/" style={{ color: '#1ca346', fontWeight: 600 }}>www.nobarunbd.com</a>,
            protecting the privacy of our visitors and clients is one of our top priorities. This Privacy Policy explains what information we collect, how we use it, and how we protect it.
          </p>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            By using our website, you agree to the terms of this Privacy Policy.
          </p>
        </div>

        {/* Information We Collect */}
        <h2 style={sectionHeadingStyle}>Information We Collect</h2>
        <p style={paragraphStyle}>We may collect personal and business information when you:</p>
        <ul style={listStyle}>
          <li>Submit an inquiry or request a quotation</li>
          <li>Contact us via phone, email, or WhatsApp</li>
          <li>Place an order or engage in a project</li>
        </ul>
        <p style={paragraphStyle}>This information may include:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '2rem' }}>
          {['Name', 'Phone number', 'Email address', 'Company or business name', 'Address or location', 'Project or product requirements'].map((item) => (
            <div key={item} style={{
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '0.8rem 1.5rem',
              fontSize: '1.4rem',
              color: '#444',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}>
              <span style={{ color: '#1ca346', fontWeight: 700 }}>✓</span> {item}
            </div>
          ))}
        </div>
        <p style={paragraphStyle}>
          We may also collect non-personal data such as IP address, browser type, and website usage data for analytics purposes.
        </p>

        {/* How We Use */}
        <h2 style={sectionHeadingStyle}>How We Use Your Information</h2>
        <p style={paragraphStyle}>We use the collected information to:</p>
        <ul style={listStyle}>
          <li>Provide quotations and respond to inquiries</li>
          <li>Supply products and manage project execution</li>
          <li>Communicate with you regarding orders, services, and support</li>
          <li>Improve our website, services, and customer experience</li>
          <li>Send relevant updates or promotional information (if applicable)</li>
          <li>Prevent fraud and ensure security</li>
        </ul>
        <p style={paragraphStyle}>
          We may contact you via phone, email, or WhatsApp for business communication, quotation follow-up, and project-related discussions.
        </p>

        {/* Business & Marketing */}
        <h2 style={sectionHeadingStyle}>Business &amp; Marketing Use of Information</h2>
        <p style={paragraphStyle}>
          Nobarun International may use client business names, company names, and general locations (city/area) along with non-sensitive project or product details for:
        </p>
        <ul style={listStyle}>
          <li>Marketing and promotional content</li>
          <li>Website and portfolio display</li>
          <li>Client references and reviews</li>
        </ul>
        <p style={paragraphStyle}>We do not publish or share any confidential, financial, or sensitive information.</p>
        <p style={paragraphStyle}>
          If any client prefers to keep their information private, they may request restriction or removal at any time by contacting us.
        </p>

        {/* Information Sharing */}
        <h2 style={sectionHeadingStyle}>Information Sharing</h2>
        <p style={paragraphStyle}>We do not sell, trade, or rent your personal or business information to third parties.</p>
        <p style={paragraphStyle}>Information may be shared only when necessary for:</p>
        <ul style={listStyle}>
          <li>Product delivery or logistics support</li>
          <li>Payment processing through banking channels</li>
          <li>Legal or regulatory requirements</li>
        </ul>

        {/* Policy Cards Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', margin: '3rem 0' }}>
          <div style={infoCardStyle}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🔒</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#2B3445', marginBottom: '0.6rem' }}>Data Security</div>
            <p style={{ fontSize: '1.4rem', color: '#666', lineHeight: '1.7', margin: 0 }}>
              We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure. Access is limited to authorized personnel only.
            </p>
          </div>
          <div style={infoCardStyle}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🍪</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#2B3445', marginBottom: '0.6rem' }}>Cookies &amp; Website Data</div>
            <p style={{ fontSize: '1.4rem', color: '#666', lineHeight: '1.7', margin: 0 }}>
              Our website may use cookies to enhance user experience and analyze performance. You can choose to disable cookies through your browser settings.
            </p>
          </div>
          <div style={infoCardStyle}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🔗</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#2B3445', marginBottom: '0.6rem' }}>Third-Party Links</div>
            <p style={{ fontSize: '1.4rem', color: '#666', lineHeight: '1.7', margin: 0 }}>
              Our website may contain links to external websites. We are not responsible for the privacy practices of those third-party websites.
            </p>
          </div>
        </div>

        {/* Your Rights */}
        <h2 style={sectionHeadingStyle}>Your Rights</h2>
        <p style={paragraphStyle}>You have the right to:</p>
        <ul style={listStyle}>
          <li>Request access to your data</li>
          <li>Request correction or update of your information</li>
          <li>Request deletion of your data (where applicable)</li>
        </ul>
        <p style={paragraphStyle}>To exercise any of these rights, please contact us directly.</p>

        {/* Children */}
        <h2 style={sectionHeadingStyle}>Children's Information</h2>
        <p style={paragraphStyle}>
          Nobarun International does not knowingly collect personal information from children under the age of 13. If such information is identified, we will take immediate steps to remove it.
        </p>

        {/* Updates */}
        <h2 style={sectionHeadingStyle}>Updates to This Policy</h2>
        <p style={paragraphStyle}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page.
        </p>

        {/* Contact CTA */}
        <div style={ctaBoxStyle}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Contact Us</h2>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            If you have any questions about this Privacy Policy or your data, please reach out to us.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
            {[
              { label: 'Company', value: 'Nobarun International', icon: '🏢' },
              { label: 'Address', value: 'H#199 (1st Floor), R#01, Mohakhali DOHS, Dhaka', icon: '📍' },
              { label: 'Phone', value: '+8809610321421', icon: '📞', href: 'tel:+8809610321421' },
              { label: 'Email', value: 'nobarunbd@gmail.com', icon: '✉️', href: 'mailto:nobarunbd@gmail.com' },
              { label: 'Website', value: 'www.nobarunbd.com', icon: '🌐', href: 'https://www.nobarunbd.com' },
            ].map((item) => (
              <div key={item.label} style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '1.5rem 2rem',
                minWidth: '200px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                <div style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.3rem' }}>{item.label}</div>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 600, textDecoration: 'none' }}>{item.value}</a>
                ) : (
                  <div style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 600 }}>{item.value}</div>
                )}
              </div>
            ))}
          </div>
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
