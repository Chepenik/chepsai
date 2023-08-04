"use client";

import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <div id="section_footer">
      <div className='text-center py-4'>
        <Link href="https://1manstartup.com/privacy-policy" target="_blank" className='btn btn-link'>
          About
        </Link>
        <span> | </span>
        <Link href="https://1manstartup.com/terms-and-conditions" target="_blank" className='btn btn-link'>
          Merch
        </Link>
        <span> | </span>
        <Link href="mailto:Roads<dave@1manstartup.com>" className='btn btn-link'>
          Contact
        </Link>
        <p>Copyright © {current_year}, Binmucker LLC. All Rights Reserved.</p>
        <div>
            <a href="">
            <FontAwesomeIcon icon={faTwitter} size="lg" className="mx-2" />
            </a>
            <a href="">
                <FontAwesomeIcon icon={faGithub} size="lg" className="mx-2" />
            </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};