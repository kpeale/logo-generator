import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Header = () => {
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

      <div>
        <Button className='bg-black'>Get started</Button>
      </div>
    </div>
  );
};

export default Header;
