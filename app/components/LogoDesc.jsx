import React from 'react';
import HeadingDesc from '../create/components/HeadingDesc';
import Lookup from '../data/Lookup';

function LogoDesc({ onHandleInputChange, formData }) {
  return (
    <div className='my-10'>
      <HeadingDesc
        title={Lookup.LogoDescTitle}
        desc={Lookup.LogoDescDesc}
      />
      <input
        type='text'
        placeholder={Lookup.LogoDescTitle}
        className='p-4 border rounded-lg mt-5 w-full'
        value={formData?.desc}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoDesc;
