import React, { useState } from 'react';
import HeadingDesc from '../create/components/HeadingDesc';
import Lookup from '../data/Lookup';
import LogoDesig from '../data/LogoDesig';
import Image from 'next/image';

function LogoDesigns({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title);
  return (
    <div className='my-10'>
      <HeadingDesc
        title={Lookup.LogoDesignTitle}
        desc={Lookup.LogoDescDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
        {LogoDesig.map((design, index) => (
          <div
            key={index}
            className={`p-1 hover:border-2 border-[#ed1e61] rounded-xl  cursor-pointer ${
              selectedOption === design.title &&
              'border-2 rounded-xl border-[#ed1e61]'
            }`}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className='w-full rounded-xl h-[150px] objext-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesigns;
