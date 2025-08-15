'use client';
import { Button } from '@/components/ui/button';
import Lookup from '../data/Lookup';
import { useState } from 'react';
import Link from 'next/link';

function Hero() {
  const [logoTitle, setLogoTitle] = useState('');
  return (
    <div className='flex items-center mt-24 flex-col gap-5'>
      <h2 className='text-[#ed1e61] text-5xl text-center font-bold'>
        {Lookup.HeroHeading}
      </h2>
      <h2 className='text-5xl text-center font-bold'>
        {Lookup.HeroSubHeading}
      </h2>
      <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>

      <div className='flex gap-6 w-full max-w-2xl mt-10'>
        <input
          type='text'
          placeholder={Lookup.InputTitlePlaceholder}
          className='p-3 border rounded-md w-full shadow-md'
          onChange={(event) => setLogoTitle(event.target.value)}
          value={logoTitle}
        />

        <Link href={'/create?title=' + logoTitle}>
          <Button className='bg-[#ed1e61] p-6 '>Get started</Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
