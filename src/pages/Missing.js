import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div className='container'>
      <p>
          هذه الصفحة غير موجودة 
      </p>
      <Link to='/junior'>عودة</Link>
    </div>

  )
}

export default Missing