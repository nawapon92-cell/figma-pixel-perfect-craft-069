import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="items-center flex w-full flex-col overflow-hidden px-[115px] py-14 max-md:max-w-full max-md:px-5">
      <div className="flex w-[800px] max-w-full flex-col items-stretch text-neutral-800 font-normal justify-center">
        <div className="justify-center items-center border border-[Main/Neutral/Neutral-100] self-center flex min-h-[38px] flex-col text-base tracking-[0.25px] leading-none px-4 py-[9px] rounded-[100px] border-solid">
          <div className="flex items-center gap-2 justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/2a54582dd3236278e31184dcf05700350cc69355?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt=""
            />
            <div className="font-normal leading-5 self-stretch my-auto">
              Seamless AI in Every Moment
            </div>
          </div>
        </div>
        <h2 className="text-center text-5xl font-semibold leading-none tracking-[-1.92px] mix-blend-luminosity mt-3 max-md:max-w-full max-md:text-[40px]">
          How It Works
        </h2>
        <p className="text-[#5d5d5d] text-center text-xl leading-[34px] mix-blend-luminosity mt-3 max-md:max-w-full">
          Discover how our AI co-host listens, translates, and summarizes in
          real time — helping your audience stay engaged from start to finish.
        </p>
      </div>
      
      <div className="items-stretch shadow-[6px_0_24px_0_rgba(0,0,0,0.12),0_16px_32px_0_rgba(17,37,62,0.16)] flex min-h-[450px] w-[800px] max-w-full flex-col justify-center mt-12 p-3 rounded-[36px] max-md:mt-10">
        <img
          src="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/6ef85cadd005d3d24b043586c60a4293aec7599b?placeholderIfAbsent=true"
          className="aspect-[1.82] object-contain w-full flex-1 py-5 max-md:max-w-full"
          alt="How it works demonstration"
        />
      </div>
    </section>
  );
};
