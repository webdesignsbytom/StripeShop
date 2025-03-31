import React from 'react';
// Components
import LoadingSpinner from './LoadingSpinner';

function LoadingScreen() {
  return (
    <div 
      id='loading-screen' 
      className='grid h-screen w-full overflow-hidden justify-center items-center bg-colour1'
      aria-live='polite' 
      aria-busy='true'
      role='alert'
      aria-labelledby='loading-description'
    >
      <article className='grid gap-2 h-fit'>
        <div>
          <p id='loading-description' className='text-colour3 text-2xl'>The content is loading, please wait...</p>
        </div>
        <div className='grid justify-center'>
          {/* Spinner for visual feedback */}
          <LoadingSpinner lg={true} />
        </div>
      </article>
    </div>
  );
}

export default LoadingScreen;
