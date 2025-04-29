import React from "react";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] items-center overflow-hidden">
      <div className="container relative z-10 flex justify-between items-center py-12">
        <div className="w-1/2 flex flex-col max-w-[600px]">
          <h1 className="text-6xl text-gray-headline font-extrabold leading-[60px] pb-6">
            Book your services{" "}
            <span className="text-green">with ease and confidence</span>
          </h1>
          <p className="text-gray-text text-xl leading-[28px]">
            Find and book the perfect service in minutes. Our simple booking
            platform makes schedulling appointmets a breeze.
          </p>
          <div className="flex items-center justify-start gap-4">
            <button className="flex items-center justify-center gap-2 bg-green cursor-pointer hover:bg-green-dark px-10 mt-8 py-4 font-bold text-white text-xl rounded-none">
              Book Now
              <MoveRight />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white cursor-pointer hover:bg-[#EFF7F6] border border-green px-10 mt-8 py-4 font-bold text-green text-xl rounded-none">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full z-0">
        <img
          src="/heropic.jpg"
          alt="hero-image"
          className="w-full h-full object-cover clip-diagonal"
        />
      </div>
    </section>
  );
};

export default Hero;
