import React from 'react';
import { Button } from '@/components/ui/Button';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="items-stretch flex w-full flex-col overflow-hidden font-semibold text-center leading-[1.3] justify-center px-[115px] py-14 max-md:max-w-full max-md:px-5">
      <div className="bg-[rgba(2,6,9,1)] w-full overflow-hidden rounded-[30px] max-md:max-w-full">
        <div className="flex flex-col relative min-h-[235px] w-full items-stretch justify-center px-[69px] py-12 max-md:max-w-full max-md:px-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/64218be67ba523edd3f836b89cafc4a5dca36058?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0"
            alt="Background"
          />
          <div className="relative flex flex-col items-stretch justify-center max-md:max-w-full">
            <h2 className="text-5xl tracking-[-1.44px] max-md:max-w-full max-md:text-[40px] text-white">
              Every Audience Deserves to Keep Up
            </h2>
            <p className="text-white text-2xl tracking-[-0.72px] mt-6 max-md:max-w-full">
              Never lose your audience again — your AI keeps everyone connected.
            </p>
            <Button
              variant="primary"
              size="lg"
              icon="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/32c005fa226116421a30b6991c62157c4251860b?placeholderIfAbsent=true"
              className="self-center mt-6"
            >
              Start a New Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
