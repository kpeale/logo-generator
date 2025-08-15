'use client';
import React, { useState } from 'react';
import HeadingDesc from './HeadingDesc';
import Lookup from '@/app/data/Lookup';
import { useSearchParams } from 'next/navigation';

function LogoTitle({ onHandleInputChange }) {
  const searchParams = useSearchParams();
  const [title, setTitle] = useState(searchParams?.get('title') ?? '');
  return (
    <div className='my-10 '>
      <HeadingDesc
        title={Lookup.LogoTitle}
        desc={Lookup.LogoTitleDesc}
      />

      <input
        type='text'
        placeholder={Lookup.InputTitlePlaceholder}
        className='p-4 border rounded-lg mt-5 w-full'
        defaultValue={title}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoTitle;
