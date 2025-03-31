import React from 'react';
import { Link } from 'react-router-dom';
// Context
import { useUser } from '../../context/UserContext';
// Constants
import { NumberOfCookies, POLICIES_PAGE_URL } from '../../utils/Constants';
// Styles
import { ButtonStyle, CancelButtonStyle, LinkStyle } from '../../utils/Styles';

function CookieConsentBar() {
  const { setHasAgreedToCookies } = useUser();


  const handleAgree = () => {
    localStorage.setItem('CookiePolicy', 'true');
    setHasAgreedToCookies(true);
  };

  const handleDisagree = () => {
    setHasAgreedToCookies(true);
  };

  return (
    <section
      aria-label='Cookie policy consent form'
      role="dialog"
      aria-modal="true"
      className='grid fixed bottom-0 z-max w-full'
    >
      <div className='grid px-4 h-full w-full bg-main-background'>
        <article className='grid grid-rows-reg pb-2 gap-4 h-full w-full'>
          <div className='text-center'>
            <h2 className='text-lg font-medium'>Cookie Consent</h2>
          </div>
          <section className='grid grid-cols-rev'>
            <div className='grid gap-4 w-full h-full'>
              <div className='grid h-fit w-full px-2'>
                <p>
                  We use cookies to improve your experience on our site. Please accept cookies before continuing.
                </p>
                <div className='flex gap-2'>
                  <p>
                    We currently use{' '}
                    <span className='text-green-600 font-bold'>
                      {Number(NumberOfCookies)}
                    </span>{' '}
                    cookies.
                  </p>
                  <p>
                    You can read further and find out more about our policies and how we use your data by{' '}
                    <Link
                      to={POLICIES_PAGE_URL}
                      className={LinkStyle}
                      aria-label='Read our policies page'
                    >
                      clicking here.
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-2 gap-2 w-full h-fit'>
              <div>
                <button
                  className={ButtonStyle}
                  onClick={handleAgree}
                  aria-label="Agree to cookie usage"
                >
                  I Agree
                </button>
              </div>
              <div>
                <button
                  className={CancelButtonStyle}
                  onClick={handleDisagree}
                  aria-label="Disagree to cookie usage"
                >
                  Disagree
                </button>
              </div>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}

export default CookieConsentBar;
