import React from 'react';

const Banner = () => {
  return (
    <section className="bg-[#221F42] min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
       
        <div className="basis-6/12 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-[#D0CDEF] text-5xl md:text-[50px] uppercase font-bold mb-4">
            Protecting Your Rights, Property & Family
          </h1>
          <p className="text-[#D0CDEF] text-lg md:text-xl mb-6">
            Expert Legal Solutions in <br /> Real Estate Law & Child Law
          </p>
          <button className="rounded-full px-10 py-3 bg-[#D0CDEF] font-semibold text-[#161431] text-xl hover:bg-opacity-90 transition">
            Start Now
          </button>
        </div>

 
        <div className="basis-6/12 flex items-center justify-center md:justify-end">
          <img
            src="https://i.ibb.co.com/xSCND5zj/Group-1597883253.png"
            alt="banner image"
            className="w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;