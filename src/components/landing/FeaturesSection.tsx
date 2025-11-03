import React from 'react';
import { Button } from '@/components/ui/Button';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/0a0976ea04ba5a9458389d2ea594292167e81f3e?placeholderIfAbsent=true',
      title: 'Real-Time AI Summaries',
      description: 'Keeps everyone caught up, even those who join late.'
    },
    {
      icon: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/36e1ae77f423c79911557af046457b030ffd6493?placeholderIfAbsent=true',
      title: 'Live Translation',
      description: 'Auto-translate speech and chat for a global audience.'
    },
    {
      icon: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/904eaa1ee498db8ebc4f417f3d7a709e5cd6ba84?placeholderIfAbsent=true',
      title: 'Smart Chat Moderator',
      description: 'Filters off-topic or spam comments, surfaces great questions.'
    },
    {
      icon: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/38987f5c4dcafab88a0c2b4abac0cd0db7b2016c?placeholderIfAbsent=true',
      title: 'QR Summary Access',
      description: 'Viewers scan a QR code to follow your session highlights on their phone.'
    },
    {
      icon: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/1ad207be30569c21de0fbd46aa039dc581eb294e?placeholderIfAbsent=true',
      title: 'All-in-One Presentation Tool',
      description: 'Share slides, YouTube, or screen in one platform.'
    }
  ];

  return (
    <section className="items-stretch flex w-full flex-col overflow-hidden px-[115px] py-14 max-md:max-w-full max-md:px-5">
      <div className="self-center flex w-[800px] max-w-full flex-col items-stretch text-neutral-800 font-normal justify-center mt-12 max-md:mt-10">
        <div className="justify-center items-center border border-[Main/Neutral/Neutral-100] self-center flex min-h-[38px] flex-col text-base tracking-[0.25px] leading-none px-4 py-[9px] rounded-[100px] border-solid">
          <div className="flex items-center gap-2 justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/251fa05c4aad3ea7da973ffe50fb5655713cd719?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt=""
            />
            <div className="font-normal leading-5 self-stretch my-auto">
              Powerful Features
            </div>
          </div>
        </div>
        <h2 className="text-center text-5xl font-semibold leading-none tracking-[-1.92px] mix-blend-luminosity mt-3 max-md:max-w-full max-md:text-[40px]">
          Powerful Features
        </h2>
        <p className="text-[#5d5d5d] text-center text-xl leading-[34px] mix-blend-luminosity mt-3 max-md:max-w-full">
          Whether you're streaming, teaching, or presenting — your AI co-host
          listens, summarizes, translates, and manages your audience, so you
          can focus on what really matters: your message.
        </p>
      </div>
      
      <div className="flex w-full gap-3 justify-center flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        {features.map((feature, index) => (
          <article key={index} className="bg-[rgba(0,0,0,0.001)] flex min-w-60 min-h-[296px] flex-col items-stretch justify-center grow shrink w-[274px] p-3 rounded-[36px]">
            <div className="border border-[Main/Neutral/Neutral-100] bg-white w-full flex-1 p-5 rounded-[28px] border-solid">
              <div className="w-full">
                <div className="justify-center items-center shadow-[4px_4px_10px_0_rgba(0,0,0,0.10)] flex min-h-12 w-12 gap-2.5 h-12 rounded-[100px]">
                  <img
                    src={feature.icon}
                    className="aspect-[1] object-contain w-6 self-stretch my-auto"
                    alt=""
                  />
                </div>
                <h3 className="text-neutral-800 text-[32px] font-medium leading-10 tracking-[-1.28px] mix-blend-luminosity mt-2.5">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[#5d5d5d] text-lg font-normal leading-7 mix-blend-luminosity mt-2.5">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      
      <Button
        variant="dark"
        size="md"
        className="self-center mt-12 max-md:mt-10 bg-neutral-800 text-white"
      >
        Try It Now
      </Button>
    </section>
  );
};
