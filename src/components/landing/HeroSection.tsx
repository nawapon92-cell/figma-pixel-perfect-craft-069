import React from 'react';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <header className="flex flex-col bg-blend-normal relative min-h-[800px] w-full overflow-hidden items-center pt-3 pb-[217px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/acc4a2728518383fcba37f63fa353bd80ca7b583?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero background"
      />
      <div className="relative mb-[-43px] w-full max-w-[1050px] max-md:max-w-full max-md:mb-2.5">
        <nav className="flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
          <div className="text-white text-xl font-normal leading-[1.2] tracking-[0.5px] my-auto">
            YouAllSum
          </div>
          <div className="flex gap-5 text-base font-medium text-center tracking-[0.1px] leading-none">
            <div className="flex items-stretch gap-2 text-white whitespace-nowrap">
              <Button
                variant="secondary"
                size="md"
                icon="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/0588a2c677c331bf756b9cfa211e2e6f0a6d6b41?placeholderIfAbsent=true"
                className="bg-transparent border-none"
              >
                Plans
              </Button>
              <Button
                variant="secondary"
                size="md"
                icon="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/dd4d5b63eb733a03012ec5385b60a54d3a303209?placeholderIfAbsent=true"
                className="bg-transparent border-none"
              >
                EN
              </Button>
            </div>
            <Button variant="primary" size="md">
              Sign In
            </Button>
          </div>
        </nav>
        
        <div className="flex w-[569px] max-w-full flex-col items-stretch text-base text-white font-normal leading-none mt-[164px] max-md:mt-10">
          <h1 className="text-[56px] font-bold leading-[72px] tracking-[-2.24px] max-md:max-w-full max-md:text-[40px] max-md:leading-[58px]">
            Live Summarization & Translation
          </h1>
          <p className="text-xl leading-[34px] mt-5 max-md:max-w-full">
            Real-time AI co-host for your live stream or presentation —
            translating and summarizing as you speak. Keep your audience
            engaged and in sync on any device.
          </p>
          <div className="flex w-full gap-5 tracking-[0.25px] flex-wrap mt-5 max-md:max-w-full">
            <div className="flex items-center gap-3">
              <div className="bg-[#FFCF89] self-stretch flex w-4 shrink-0 h-4 my-auto rounded-[50%]" />
              <div className="self-stretch my-auto">98% Accuracy</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#9AD5F5] self-stretch flex w-4 shrink-0 h-4 my-auto rounded-[50%]" />
              <div className="self-stretch my-auto">QR Access</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#BDE7CE] self-stretch flex w-4 shrink-0 h-4 my-auto rounded-[50%]" />
              <div className="self-stretch my-auto">Live Summaries</div>
            </div>
          </div>
          <Button
            variant="primary"
            size="lg"
            icon="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/d804e8593ecb5791554cbfcd0c923cf815863c90?placeholderIfAbsent=true"
            className="mt-5 self-start"
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </header>
  );
};
