// components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div className='m-8'>
      <h2 className='text-5xl font-bold'>Contact Us</h2>
      <div className='my-16 h-full'>
        <p className='text-2xl font-light'>If you have any questions or feedback, feel free to reach out to us:</p>
        <ul className='text-2xl my-12'>
          <li className=''>Email: info@timewarp.com</li>
          <li className=''>Phone: +1 (555) 123-4567</li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
