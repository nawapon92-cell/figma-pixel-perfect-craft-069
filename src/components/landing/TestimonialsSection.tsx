import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "My viewers said it's like having subtitles and notes at once — they never felt lost again.",
      author: "— Nina, Streamer from Tokyo",
      avatar: "https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/cd2477ee561f98e4d63e07ab53cfc4bc056e57cd?placeholderIfAbsent=true"
    },
    {
      quote: "I use it for my online lectures — students can follow summaries in real time, even if their English isn't perfect.",
      author: "— Dr. Daniel, Lecturer from Singapore",
      avatar: "https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/965c3d894e7dee6bcd81d0f5d5e2e1b340b5acbb?placeholderIfAbsent=true"
    },
    {
      quote: "Students love scanning the QR to catch up — they never miss a topic anymore!",
      author: "— Dr. Aaron, Online Lecturer from London",
      avatar: "https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/1ba16cda70099a115e11b31a42be607ea6249031?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="items-stretch flex w-full flex-col overflow-hidden px-[115px] py-14 max-md:max-w-full max-md:px-5">
      <div className="self-center flex w-[800px] max-w-full flex-col items-stretch text-neutral-800 font-normal justify-center">
        <div className="justify-center items-center border border-[Main/Neutral/Neutral-100] self-center flex min-h-[38px] flex-col text-base tracking-[0.25px] leading-none px-4 py-[9px] rounded-[100px] border-solid">
          <div className="flex items-center gap-2 justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/d0b6e100e3f94d1dbeda8e2b181952c0/ce3ac7a4e134a9c7ced72efd583e755ebdc2efb2?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt=""
            />
            <div className="font-normal leading-5 self-stretch my-auto">
              Voices That Inspire Innovation
            </div>
          </div>
        </div>
        <h2 className="text-center text-5xl font-semibold leading-none tracking-[-1.92px] mix-blend-luminosity mt-3 max-md:max-w-full max-md:text-[40px]">
          Trusted by Creators Worldwide
        </h2>
        <p className="text-[#5d5d5d] text-center text-xl leading-[34px] mix-blend-luminosity mt-3 max-md:max-w-full">
          Hear how educators, streamers, and teams around the world use our
          live translation and summary tools to make every session more
          engaging and inclusive.
        </p>
      </div>
      
      <div className="flex w-full gap-12 flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        {testimonials.map((testimonial, index) => (
          <article key={index} className="items-center shadow-[6px_0_24px_0_rgba(0,0,0,0.12),0_16px_32px_0_rgba(17,37,62,0.16)] flex min-w-60 gap-2.5 grow shrink w-[254px] bg-white px-8 py-[31px] rounded-[30px] max-md:px-5">
            <div className="self-stretch flex min-w-60 w-full items-center gap-3 flex-1 shrink basis-[0%] my-auto">
              <div className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
                <blockquote className="text-[#5d5d5d] text-sm font-medium leading-[22px]">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-[#b0b0b0] text-xs font-light leading-[1.7] mt-3 not-italic">
                  {testimonial.author}
                </cite>
              </div>
              <img
                src={testimonial.avatar}
                className="aspect-[1] object-contain w-[70px] self-stretch shrink-0 my-auto rounded-[50%]"
                alt={`Avatar for ${testimonial.author}`}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
