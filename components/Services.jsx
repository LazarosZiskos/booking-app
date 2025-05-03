import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="mt-10">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl text-gray-headline leading-[40px] py-2">
          Our Services
        </h1>
        <p className="text-xl text-gray-text leading-[28px]">
          Choose from a wide range of premium services tailored to your needs.
        </p>
        <div className="mt-20 mb-20">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
