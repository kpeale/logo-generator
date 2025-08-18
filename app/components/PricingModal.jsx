'use client';
import React, { useEffect } from 'react';
import HeadingDesc from '../create/components/HeadingDesc';
import Lookup from '../data/Lookup';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SignInButton, useUser } from '@clerk/nextjs';

function PricingModal({ onHandleInputChange, formData }) {
  const { user } = useUser();
  useEffect(() => {
    if (formData?.title && typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData]);
  return (
    <div className='my-10'>
      <HeadingDesc
        title={Lookup.LogoPricingModelTitle}
        desc={Lookup.LogoPricingModelDesc}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
        {Lookup.pricingOption.map((pricing, index) => (
          <div
            key={index}
            className='flex flex-col items-center p-5 border rounded-2xl'
          >
            <Image
              src={pricing.icon}
              alt='pricing.title'
              width={60}
              height={60}
            />
            <h2 className='font-medium text-2xl'>{pricing.title}</h2>
            <div>
              {pricing.features.map((feature, index) => (
                <h2
                  key={index}
                  className='text-lg mt-3'
                >
                  {feature}
                </h2>
              ))}
            </div>
            {user ? (
              <Button className='bg-[#ed1e61] mt-5'>{pricing.button}</Button>
            ) : (
              <SignInButton
                mode='modal'
                forceRedirectUrl={'/generate-logo?type=' + pricing.title}
              >
                <Button className='bg-[#ed1e61] mt-5'>{pricing.button}</Button>
              </SignInButton>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingModal;
