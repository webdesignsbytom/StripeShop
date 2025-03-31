import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Constants
import {
  CookiePolicyName,
  NumberOfCookies,
  POLICIES_PAGE_URL,
} from '../../utils/Constants';
// Images
import CookieSVG from '../../assets/images/icons/cookie-icon.svg';

function CookieConsentModal({ setHasAgreedToCookies }) {

  const location = useLocation();
  console.log('location: ' + location);
  console.log('cookie');

  const handleAgree = () => {
    localStorage.setItem(CookiePolicyName, 'true');
    setHasAgreedToCookies(true);
  };

  const handleDisagree = () => {
    setHasAgreedToCookies(true);
  };

  return (
    <>
      {location.pathname === POLICIES_PAGE_URL ? (
        <section className='fixed lg:max-w-fit lg:right-4 lg:bottom-4 bottom-0 w-full bg-colour1 border-t-2 border-solid border-colour3 lg:border-2 lg:rounded py-2 px-2'>
          <section className='grid grid-cols-2 gap-2 w-full h-fit'>
            <div>
              <button
                className={`px-2 py-2.5 lg:px-8 w-full bg-error-red text-white font-medium text-lg leading-tight uppercase rounded shadow-md active:shadow-lg transition duration-150 ease-in-out`}
                onClick={handleDisagree}
                aria-label='Disagree to cookie usage'
              >
                DISAGREE
              </button>
            </div>
            <div>
              <button
                className={`px-2 py-2.5 lg:px-8 w-full active:bg-red-500 bg-colour2 text-white font-medium text-lg leading-tight uppercase rounded shadow-md active:shadow-lg transition duration-150 ease-in-out`}
                onClick={handleAgree}
                aria-label='Agree to cookie usage'
              >
                I AGREE
              </button>
            </div>
          </section>
        </section>
      ) : (
        <section
          aria-label='Cookie policy consent form'
          role='dialog'
          aria-modal='true'
          className='grid fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-max w-full justify-center px-6 md:px-0'
        >
          <div className='grid rounded-xl px-4 pt-6 pb-4 shadow-xl h-fit w-full bg-main-background border-solid border-2 border-colour2 max-w-md'>
            <article className='grid gap-8 h-full w-full grid-rows-rev'>
              <div className='grid gap-4 w-full h-full'>
                <section className='mx-auto py-2'>
                  <img
                    src={CookieSVG}
                    alt='Cookie icon'
                    className='w-full h-fit max-w-24'
                  />
                </section>
                <section className='text-center'>
                  <h2 className='text-lg font-semibold text-colour2'>
                    Cookie Consent
                  </h2>
                </section>
                <section className='grid gap-2 h-full w-full px-2'>
                  <p>
                    We use cookies to improve your experience on our site.
                    Please accept cookies before continuing.
                  </p>
                  <p>
                    We currently use{' '}
                    <span className='text-colour2 font-bold'>
                      {Number(NumberOfCookies)}
                    </span>{' '}
                    cookies.
                  </p>
                  <p>
                    You can read further and find out more about our policies
                    and how we use your data by{' '}
                    <Link
                      to={POLICIES_PAGE_URL}
                      className={'text-colour2 italic'}
                      aria-label='Read our policies page'
                    >
                      clicking here.
                    </Link>
                  </p>
                </section>
              </div>
              <section className='grid grid-cols-2 gap-2 w-full h-fit'>
                <div>
                  <button
                    className={`px-2 py-2.5 w-full bg-error-red text-white font-medium text-lg leading-tight uppercase rounded shadow-md active:shadow-lg transition duration-150 ease-in-out`}
                    onClick={handleDisagree}
                    aria-label='Disagree to cookie usage'
                  >
                    Disagree
                  </button>
                </div>
                <div>
                  <button
                    className={`px-2 py-2.5 w-full bg-colour2 text-white font-medium text-lg leading-tight uppercase rounded shadow-md active:shadow-lg transition duration-150 ease-in-out`}
                    onClick={handleAgree}
                    aria-label='Agree to cookie usage'
                  >
                    I Agree
                  </button>
                </div>
              </section>
            </article>
          </div>
        </section>
      )}
    </>
  );
}

export default CookieConsentModal;
