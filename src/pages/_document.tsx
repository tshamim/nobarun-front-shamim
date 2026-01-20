import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Basic Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#1ca346" />
          
          {/* Default SEO Meta Tags */}
          <meta 
            name="description" 
            content="Nobarun International - Leading supplier of Digital Safety & Security Products, Supermarket Equipment, Slaughterhouse Equipment, and Commercial Kitchen Equipment in Bangladesh since 2017." 
          />
          <meta 
            name="keywords" 
            content="digital gate systems, commercial kitchen equipment, supermarket equipment, cold storage solutions, restaurant equipment, car parking management, security products Bangladesh, Nobarun International" 
          />
          <meta name="author" content="Nobarun International" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          
          {/* Open Graph Meta Tags for Social Media */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Nobarun International" />
          <meta property="og:locale" content="en_US" />
          <meta 
            property="og:image" 
            content="https://nobarunawsvideouploader.s3.ap-south-1.amazonaws.com/logo.png" 
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Nobarun International Logo" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@nobarunbd" />
          <meta name="twitter:creator" content="@nobarunbd" />
          
          {/* Favicon and App Icons */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Canonical URL - will be overridden by individual pages */}
          <link rel="canonical" href="https://nobarun.com" />
          
          {/* Preconnect to Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            rel="preload"
            href="/assets/images/banners/mobile/slider-1.webp"
            as="image"
          />

          {/* Preload the font */}
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap"
          />

          {/* Defer loading of the stylesheet */}
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap"
            rel="stylesheet"
            media="print"
            // onLoad="this.media='all'"
          />

          {/* Fallback for users with JavaScript disabled */}
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap"
              rel="stylesheet"
            />
          </noscript>
        </Head>
        <body>
          {/* google tag manager was here */}
          <Main />
          <NextScript />

          {/* Google Analytics GA4 */}
          {/* Lazy Load GA4 */}
          <script
            id="ga4-loader"
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('DOMContentLoaded', function () {
                  var gaScript = document.createElement('script');
                  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=GTM-WXL5GDL';
                  gaScript.async = true;
                  document.head.appendChild(gaScript);

                  gaScript.onload = function () {
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                      window.dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', 'GTM-WXL5GDL');
                  };
                });
              `,
            }}
          />

          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe title="no script" src="https://www.googletagmanager.com/ns.html?id=GTM-WXL5GDL"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
            }}
          />
          {/* <!-- End Google Tag Manager (noscript) --> */}
        </body>
      </Html>
    );
  }
}
