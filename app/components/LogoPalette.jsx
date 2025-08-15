'use client';
import React, { useState } from 'react';
import HeadingDesc from '../create/components/HeadingDesc';
import Lookup from '../data/Lookup';
import Colors from '../data/Colors';

function LogoPalette({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.palette);
  return (
    <div className='my-10'>
      <HeadingDesc
        title={Lookup.LogoColorPaletteTitle}
        desc={Lookup.LogoColorPaletteDesc}
      />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {Colors.map((palette, index) => (
          <div
            key={index}
            className={`flex cursor-pointer p-1 ${
              selectedOption === palette.name &&
              'border-2 rounded-lg border-[#ed1e61]'
            } `}
          >
            {palette?.colors.map((color, index) => (
              <div
                className='h-24 w-full'
                style={{
                  backgroundColor: color,
                }}
                key={index}
                onClick={() => {
                  setSelectedOption(palette.name);
                  onHandleInputChange(palette.name);
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoPalette;
