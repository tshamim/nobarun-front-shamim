import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  
  return (
    <footer className="footer-green">
      <div className="container">
        <div className="footer-content">
          {/* Corporate Office Column */}
          <div className="footer-column">
            <h3 className="footer-title">Corporate Office</h3>
            <div className="footer-text">
              <p><strong>Planet Ornate</strong></p>
              <p>H#199(1st Floor), R#01, Mohakhali New DOHS</p>
              <p>Dhaka 1206, Bangladesh</p>
              <p className="footer-contact-item">
                <span>Email: </span>
                <a href="mailto:nobarunbd@gmail.com">nobarunbd@gmail.com</a>
              </p>
              <p className="footer-contact-item">
                <span>Phone: </span>
                <a href="tel:+8801711998626">+8801711 998626</a>
              </p>
            </div>
          </div>

          {/* Important Links Column */}
          <div className="footer-column">
            <h3 className="footer-title">Important Links</h3>
            <ul className="footer-links-list">
              <li><Link href="/about"><a>About Us</a></Link></li>
              <li><Link href="/clients"><a>Clients</a></Link></li>
              <li><Link href="/terms"><a>Terms</a></Link></li>
              <li><Link href="/contact"><a>Contact Us</a></Link></li>
              <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
            </ul>
          </div>

          {/* Company Description Column */}
          <div className="footer-column footer-description">
            <p className="company-description">
              <strong>NOBARUN INTERNATIONAL</strong> is leading supplier of Digital Safety & Security Products, 
              Supermarket Equipments, Slaughterhouse Equipments & Commercial Kitchen Equipments in Bangladesh.
            </p>
            
            {/* Social Media Icons */}
            <div className="footer-social-icons">
              {iconList.map((item) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={item.iconName}
                  aria-label={item.label}
                  className="social-icon-link"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="footer-copyright">
              Copyright @Nobarun International (2017-{new Date().getFullYear()})
            </p>
          </div>

          {/* DMCA Badge */}
          <div className="footer-dmca">
            <a
              href="//www.dmca.com/Protection/Status.aspx?ID=b678e4b2-c844-4be2-a23b-448888201af6"
              title="DMCA.com Protection Status"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://images.dmca.com/Badges/dmca_protected_24_120.png?ID=b678e4b2-c844-4be2-a23b-448888201af6"
                alt="DMCA.com Protection Status"
                width={120}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const iconList = [
  {
    iconName: 'facebook',
    url: 'https://www.facebook.com/nobaruninternational',
    color: '#1877F2',
    label: 'Facebook Link for nobarunbd',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    iconName: 'twitter',
    url: 'https://twitter.com/nobarunbd',
    color: '#1DA1F2',
    label: 'Twitter Link for nobarunbd',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    iconName: 'youtube',
    url: 'https://www.youtube.com/c/NobarunInternational/videos',
    color: '#FF0000',
    label: 'Youtube Link for nobarunbd',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    iconName: 'google',
    url: 'https://www.google.com/maps/place/Nobarun+International/@23.7850459,90.3987561,16.97z/data=!4m5!3m4!1s0x3755c7404bd1656f:0x7ebd233d85ca7af8!8m2!3d23.78468!4d90.3985879',
    color: '#4285F4',
    label: 'Google Link for nobarunbd',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm-.004 3.5c.27 0 .542.016.806.047l-.008.106c-.024.315-.094.694-.227 1.075-.34.97-1.106 2.123-2.694 2.698l-.062.023-.061-.026c-.378-.159-.746-.407-1.043-.742-.547-.611-.875-1.458-.66-2.433A8.462 8.462 0 0111.996 3.5zm-3.89 1.086c-.26.675-.23 1.437.08 2.089.268.567.696 1.05 1.206 1.425-1.235.199-2.316.082-3.22-.277a8.515 8.515 0 011.934-3.237zm6.652 1.3c.804.677 1.397 1.587 1.704 2.619l-.125.042c-1.046.35-2.263.338-3.472-.103.475-.35.876-.778 1.162-1.26.32-.541.53-1.142.624-1.752.035.148.072.298.107.454zM12 5.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13z"/>
      </svg>
    ),
  },
  {
    iconName: 'pinterest',
    url: 'https://www.pinterest.com/nobaruninternational/',
    color: '#E60023',
    label: 'Pinterest Link for nobarunbd',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
      </svg>
    ),
  },
];

export default Footer;
