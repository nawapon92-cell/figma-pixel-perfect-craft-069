import React from 'react';
import { Button } from '@/components/ui/Button';

export const FinalCTASection: React.FC = () => {
  const benefits = [
    {
      color: '#FFCF89',
      text: 'No credit card required'
    },
    {
      color: '#9AD5F5',
      text: 'Free plan available'
    },
    {
      color: '#BDE7CE',
      text: 'Cancel anytime'
    }
  ];

  return (
    <section className="items-stretch flex w-full flex-col overflow-hidden text-base font-medium leading-none justify-center px-[115px] py-14 max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="bg-[rgba(1,2,5,1)] flex w-full flex-col items-center px-[25px] py-[37px] rounded-[30px] max-md:max-w-full max-md:px-5">
          <h2 className="text-white text-center text-[64px] leading-[70px] tracking-[-2.56px] max-md:max-w-full max-md:text-[40px] max-md:leading-[48px]">
            Ready to Transform Your Conversations?
          </h2>
          <p className="text-[#f6f6f6] text-center text-xl font-normal leading-6 tracking-[0.5px] mix-blend-luminosity w-[503px] mt-5 max-md:max-w-full">
            Start a new session or review your past conversations. Your
            insights are waiting.
          </p>
          
          <div className="self-stretch flex w-full items-center gap-5 text-[#e7e7e7] font-normal tracking-[0.25px] justify-center flex-wrap mt-5 max-md:max-w-full">
            {benefits.map((benefit, index) => (
              <div key={index} className="self-stretch flex items-center gap-3 my-auto">
                <div 
                  className="self-stretch flex w-4 shrink-0 h-4 my-auto rounded-[50%]"
                  style={{ backgroundColor: benefit.color }}
                />
                <div className="font-normal leading-5 self-stretch my-auto">
                  {benefit.text}
                </div>
              </div>
            ))}
          </div>
          
          <Button
            variant="primary"
            size="lg"
            icon="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/32c005fa226116421a30b6991c62157c4251860b?placeholderIfAbsent=true"
            className="mt-5"
          >
            Let's Go Live
          </Button>
        </div>
      </div>
    </section>
  );
};
