import React, { useEffect, useState } from 'react';
// Api
import client from '../../api/client';
// Constants
import { GET_PRODUCT_ARRAY_API } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import HomePageMainContainer from '../../components/home/HomePageMainContainer';

const HomePage = React.memo(() => {
  const [productArray, setProductArray] = useState([]);
  console.log('productArray');
  useEffect(() => {
    client
      .get(`${GET_PRODUCT_ARRAY_API}`)
      .then((res) => {
        setProductArray(res.data.productList.data);
        console.log('res', res.data.productList.data);
      })
      .catch((err) => {
        console.error('Unable to retrieve product data', err);
      });
  }, []);

  return (
    <>
      {/* Page */}
      <div className='grid min-h-screen overflow-hidden bg-colour1 text-colour2 dark:bg-colour2 dark:text-colour1 font-poppins'>
        <div className='grid'>
          {/* Navigation */}
          <Navbar />

          {/* Main page content */}
          <section className='grid gap-6 p-6'>
            <h2 className='text-3xl font-bold text-center'>Our Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {productArray?.map((product) => (
                <div
                  key={product.id}
                  className='border rounded-lg shadow-lg p-4'
                >
                  {product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className='w-full h-40 object-cover rounded-md'
                    />
                  ) : (
                    <div className='w-full h-40 bg-gray-300 flex items-center justify-center rounded-md'>
                      No Image
                    </div>
                  )}
                  <h3 className='mt-2 text-lg font-semibold'>{product.name}</h3>
                  <p className='text-sm text-gray-600'>
                    {product.description || 'No description available.'}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
});

export default HomePage;
