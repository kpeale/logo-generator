'use client';
import React, { useState } from 'react';
import LogoTitle from './components/LogoTitle';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import LogoDesc from '../components/LogoDesc';
import LogoPalette from '../components/LogoPalette';
import LogoDesigns from '../components/LogoDesigns';
import LogoIdea from '../components/LogoIdea';

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className='pt-20 p-10 border rounded-xl 2xl:mx-72 mt-4'>
      {step === 1 ? (
        <LogoTitle
          onHandleInputChange={(v) => onHandleInputChange('title', v)}
          formData={formData}
        />
      ) : step === 2 ? (
        <LogoDesc
          onHandleInputChange={(v) => onHandleInputChange('desc', v)}
          formData={formData}
        />
      ) : step === 3 ? (
        <LogoPalette
          onHandleInputChange={(v) => onHandleInputChange('palette', v)}
          formData={formData}
        />
      ) : step === 4 ? (
        <LogoDesigns
          onHandleInputChange={(v) => onHandleInputChange('design', v)}
          formData={formData}
        />
      ) : step === 5 ? (
        <LogoIdea
          onHandleInputChange={(v) => onHandleInputChange('idea', v)}
          formData={formData}
        />
      ) : null}

      <div className='flex items-center justify-between mt-10'>
        {step !== 1 && (
          <Button
            className='bg-transparent text-black border border-gray-300 hover:bg-gray-100'
            onClick={() => setStep(step - 1)}
          >
            <ArrowLeft />
            Previous
          </Button>
        )}

        <Button
          className='bg-[#ed1e61] '
          onClick={() => setStep(step + 1)}
        >
          <ArrowRight />
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
