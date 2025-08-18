'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';

const Header = () => {
  const { user } = useUser();
  return (
    <div className='px-10 lg:px-32 xl:px-40 2xl:px-56  flex justify-between items-center shadow-sm flex-row'>
      <div>
        <Image
          src='/logoNew.png'
          alt='Logo'
          width={100}
          height={100}
        />
      </div>
      <div className='flex flex-row gap-3 items-center'>
        {user ? (
          <Button variant='outline'>Dashboard</Button>
        ) : (
          <Button className='bg-[#ed1e61]'>Get started</Button>
        )}

        <UserButton />
      </div>
    </div>
  );
};

export default Header;
