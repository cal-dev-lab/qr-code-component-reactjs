import React from 'react';
import qrcode from '../images/image-qr-code.png';

const Card = () => {
  
  return (

    <>

      <div className='flex h-screen mx-auto justify-center items-center bg-light-gray'>

        <div className='w-80 bg-white text-center p-4 rounded-2xl'>
  
          <img 
            src={qrcode} 
            alt='QR code image' 
            className='rounded-2xl' 
          />  
      
          <div className='flex flex-col px-2'>

            <h2 className='text-2xl text-dark-blue mt-6 font-outfit font-semibold'>Improve your front-end skills by building projects</h2>

            <p className='mb-4 font-outfit text-gray-blue mt-4 font-thin'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>

          </div>

        </div>

      </div>

    </>

  ); 

}

export default Card;
