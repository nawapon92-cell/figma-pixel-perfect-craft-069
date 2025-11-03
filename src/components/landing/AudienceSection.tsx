import React from 'react';

export const AudienceSection: React.FC = () => {
  const audiences = [
    {
      image: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/51551cad5283382074a4e2b972645586784f2360?placeholderIfAbsent=true',
      title: 'Streamers',
      description: 'Stay in the spotlight — let AI handle the rest. Focus on your content while AI translates, summarizes, and manages the chat in real time.'
    },
    {
      image: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/53a45af7e3acda14a5e1071b5901ec47520feab4?placeholderIfAbsent=true',
      title: 'Educators & Trainers',
      description: 'Teach without language limits. Keep every learner engaged with live translations and instant lesson summaries.'
    },
    {
      image: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/b666fff45694ad4a4f9000940ecd84fe6604e0e8?placeholderIfAbsent=true',
      title: 'Business Presenters',
      description: 'Speak once, reach everyone. Communicate clearly with global teams through real-time captions and summaries.'
    },
    {
      image: 'https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/731b1ff6dba799a3f0c238e82e86cecc3398d2e7?placeholderIfAbsent=true',
      title: 'Online Sellers',
      description: 'Engage more customers effortlessly. Let AI translate, summarize, and respond to live questions — while you focus on closing sales.'
    }
  ];

  return (
    <section className="bg-white relative flex w-full flex-col overflow-hidden items-stretch px-[115px] py-14 max-md:max-w-full max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/0e74874df096f0190d7a14ff030f33b133ad37d3?placeholderIfAbsent=true"
        className="aspect-[1.68] object-contain w-[1280px] absolute z-0 h-[760px] right-0 top-0 max-md:max-w-full"
        alt=""
      />
      
      <div className="self-center z-0 flex w-[800px] max-w-full flex-col items-stretch text-neutral-800 font-normal justify-center">
        <div className="justify-center items-center border border-[Main/Neutral/Neutral-100] self-center flex min-h-[38px] flex-col text-base tracking-[0.25px] leading-none px-4 py-[9px] rounded-[100px] border-solid">
          <div className="flex items-center gap-2 justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/dd9760b0c44c9b8817f8acae14a0ad217c995b6d?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt=""
            />
            <div className="font-normal leading-5 self-stretch my-auto">
              Transforming Conversations Everywhere
            </div>
          </div>
        </div>
        <h2 className="text-center text-5xl font-semibold leading-none tracking-[-1.92px] mix-blend-luminosity mt-3 max-md:max-w-full max-md:text-[40px]">
          Perfect for Anyone Who Talks Live
        </h2>
        <p className="text-[#5d5d5d] text-center text-xl leading-[34px] mix-blend-luminosity mt-3 max-md:max-w-full">
          From classrooms to boardrooms, turn every conversation into collaborative value
        </p>
      </div>
      
      <div className="z-0 flex w-full gap-3 flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        {audiences.map((audience, index) => (
          <article key={index} className="items-stretch flex min-w-60 flex-col justify-center grow shrink w-[203px] p-1.5 rounded-[32px]">
            <div className="bg-white w-full p-4 rounded-3xl">
              <div className="min-h-[180px] w-full">
                <img
                  src={audience.image}
                  className="aspect-[1.17] object-contain w-full gap-2.5 flex-1 rounded-2xl"
                  alt={audience.title}
                />
              </div>
              <div className="w-full mt-5">
                <h3 className="text-neutral-800 text-2xl font-medium leading-loose tracking-[-0.96px] mix-blend-luminosity">
                  {audience.title}
                </h3>
                <p className="text-[#5d5d5d] text-lg font-normal leading-6 tracking-[0.5px] mix-blend-luminosity mt-2.5">
                  {audience.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
