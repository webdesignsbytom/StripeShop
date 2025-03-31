import React from 'react';
import { Link } from 'react-router-dom';
// Constants
import {
  CompanyTagLine,
  CompanyName,
  CompanyPhoneNumber,
  ContactEmailAddress,
} from '../../utils/Constants';
// Components
import FooterSocialCTA from './FooterSocialCTA';
// Images
import CompanyMainLogo from '../../assets/images/logos/byte-toast-studio-logo-web-developer-transparent-svg.svg';
// Data
import { FooterLinksArray } from '../../utils/data/FooterData';
import { MainServicesArray } from '../../utils/data/CompanyData';

function FooterComponent() {
  return (
    <footer className='grid bg-alt-background w-full overflow-hidden py-6 md:py-12 px-6 md:px-20 font-poppins'>
      <div className='grid lg:grid-cols-3 mx-auto gap-6 bg-colour1 px-2 md:px-10 py-8 w-full'>
        {/* Logo section */}
        <section className='grid h-fit my-auto gap-4 py-2 w-full'>
          <div className='grid items-center justify-center'>
            <img
              src={CompanyMainLogo}
              alt={`${CompanyName} footer logo`}
              className='min-w-6 w-full'
            />
          </div>
          <div className='text-center'>
            <p className='text-sm'>{CompanyTagLine}</p>
          </div>
          <FooterSocialCTA />
        </section>

        {/* Footer links */}
        <section className='grid grid-cols-2 px-2 gap-2 w-full'>
          <section className='grid grid-rows-reg w-full lg:justify-center text-center'>
            <div className='text-left h-fit w-full'>
              <h6>Quick Links</h6>
              <div className='border-b-2 border-solid border-colour2 pt-2 mb-2'></div>
            </div>
            <ul className='text-left w-full'>
              {FooterLinksArray.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link.route}
                      aria-label={`${link.name} page navigation tab`}
                      className={`text-sm`}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                      aria-current={({ isActive }) =>
                        isActive ? 'page' : undefined
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className='grid grid-rows-reg justify-center text-center'>
            <div className='text-left h-fit'>
              <h6>Services</h6>
              <div className='border-b-2 border-solid border-colour2 pt-2 mb-2'></div>
            </div>
            <ul className='text-left'>
              {MainServicesArray.map((service) => {
                return (
                  <li key={service.label} className={`text-sm`}>
                    {service.label}
                  </li>
                );
              })}
            </ul>
          </section>
        </section>

        {/* Social media links */}
        <section className='grid grid-rows-reg gap-2 w-fit px-2'>
          <section className='text-left'>
            <h6>Contact</h6>
            <div className='border-b-2 border-solid border-colour2 pt-2 mb-2'></div>
          </section>

          <section className='grid gap-1 h-fit text-sm'>
            {/* Email */}
            <div>
              <a href={`mailto:${ContactEmailAddress}`}>
                <p>
                  <span className='font-semibold'>Email: </span>
                  {ContactEmailAddress}
                </p>
              </a>
            </div>
            {/* Phone */}
            <div>
              <a href={`tel:${CompanyPhoneNumber}`}>
                <p>
                  <span className='font-semibold'>Phone: </span>+
                  {CompanyPhoneNumber} (UK)
                </p>
              </a>
            </div>
            {/* Short address */}
            <div>
              <p>
                <span className='font-semibold'>Location: </span> Tavistock,
                Devon, United Kingdom
              </p>
            </div>
            {/* Long address */}
            {/* <div>
              <span className='font-semibold'>Location:</span>
              <ul className='list-none'>
                <li>{AddressLine1}</li>
                <li>{AddressLine2}</li>
                <li>{LocationCity}</li>
                <li>{PostalCode}</li>
              </ul>
            </div> */}
          </section>
        </section>
      </div>
    </footer>
  );
}

export default FooterComponent;
