import React from 'react';

function HeadingDesc({ title, desc }) {
  return (
    <div>
      <h2 className='font-bold text-3xl text-[#ed1e61]'>{title}</h2>
      <p className='text-lg text-gray-500'>{desc}</p>
    </div>
  );
}

export default HeadingDesc;
