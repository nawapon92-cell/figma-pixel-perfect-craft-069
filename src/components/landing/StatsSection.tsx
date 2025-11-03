import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '+1K',
      label: 'Streamers',
      icon: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/85cb975d2bc4f558fe62b76d85dd8e73bf257b6b?placeholderIfAbsent=true'
    },
    {
      number: '+5K',
      label: 'Streamers',
      icon: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/f18125082e37243482b8a7642b20fd66a9071a81?placeholderIfAbsent=true'
    },
    {
      number: '+10K',
      label: 'Streamers',
      icon: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/ec38908bacef149d316f82efa59f8b0289a1a2aa?placeholderIfAbsent=true'
    }
  ];

  return (
    <section className="items-stretch flex w-full flex-col overflow-hidden px-[115px] py-14 max-md:max-w-full max-md:px-5">
      <div className="flex w-full gap-[40px_48px] whitespace-nowrap justify-center flex-wrap max-md:max-w-full">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="min-w-60 grow shrink w-[286px] px-5">
              <div className="text-neutral-800 text-center text-[32px] font-semibold">
                {stat.number}
              </div>
              <div className="flex w-full gap-3 text-2xl text-[#5d5d5d] font-normal justify-center mt-3">
                <img
                  src={stat.icon}
                  className="aspect-[1] object-contain w-8 shrink-0"
                  alt=""
                />
                <div>{stat.label}</div>
              </div>
            </div>
            {index < stats.length - 1 && (
              <img
                src="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/7bee7802a1022126f90faaaa52b25a5f448e313f?placeholderIfAbsent=true"
                className="object-contain w-0 stroke-[3px] stroke-[Main/Neutral/Neutral-100] shrink-0"
                alt=""
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
