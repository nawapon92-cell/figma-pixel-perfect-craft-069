import React from 'react';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Features',
      links: [
        'Real-Time AI Summaries',
        'Live Translation',
        'Smart Chat Moderator',
        'QR Summary Access',
        'All-in-One Presentation Tool'
      ]
    },
    {
      title: 'Perfect for',
      links: [
        'Streamers',
        'Teachers & Trainers',
        'Business Presenters',
        'Online Sellers'
      ]
    },
    {
      title: 'Social',
      links: [
        'Facebook',
        'Youtube'
      ]
    }
  ];

  return (
    <footer>
      <div className="content-start flex-wrap border-t-[Main/Neutral/Neutral-100] flex w-full gap-[99px] text-base text-neutral-800 font-normal px-[115px] py-6 border-t border-solid max-md:max-w-full max-md:px-5">
        <div className="flex flex-col text-xl whitespace-nowrap tracking-[0.5px] leading-[1.2] flex-1 shrink basis-[0%]">
          <div>YouAllSum</div>
        </div>
        
        {footerSections.map((section, index) => (
          <div key={index} className="flex-1 shrink basis-[0%]">
            <div className="font-semibold leading-6 mix-blend-luminosity">
              {section.title}
            </div>
            {section.links.map((link, linkIndex) => (
              <div key={linkIndex} className="text-base font-normal leading-6 tracking-[0.5px] mix-blend-luminosity mt-3">
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="justify-center items-stretch relative flex w-full flex-col text-[11px] font-normal text-center tracking-[0.5px] leading-6 py-3 max-md:max-w-full">
        <div className="absolute z-0 flex min-h-[65px] w-[1280px] h-[65px] right-0 top-0 max-md:max-w-full" />
        <div className="text-[#5d5d5d] font-normal leading-6 mix-blend-luminosity z-0 max-md:max-w-full">
          © 2025 You All Sum — Your Lovable AI Co-Host
        </div>
        <div className="text-[#888888] self-center z-0">
          Stream confidently. Engage globally. Never lose your audience again.
        </div>
      </div>
    </footer>
  );
};
