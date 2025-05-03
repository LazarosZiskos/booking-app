import React from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Services = () => {
  return (
    <section className="mt-10" id="services">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl text-gray-headline leading-[40px] py-2">
          Our Services
        </h1>
        <p className="text-xl text-gray-text leading-[28px]">
          Choose from a wide range of premium services tailored to your needs.
        </p>
        <div className="container mt-10 mb-10 grid grid-cols-3 gap-4">
          <ServiceCard
            title="✂️ Men's Haircut"
            subtitle="A classic cut tailored to your style. Includes wash and finish."
            min="30"
            price="30"
          />
          <ServiceCard
            title="💅 Classic Manicure"
            subtitle="Nail shaping, cuticle care, and polish in your favorite color."
            min="60"
            price="60"
          />
          <ServiceCard
            title="🌿 Swedish Massage"
            subtitle="A relaxing full-body massage to relieve tension and improve circulation."
            min="120"
            price="120"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/book-now">
          <button className="flex items-center justify-center gap-2 bg-green cursor-pointer hover:bg-green-dark px-10 py-2 font-bold text-white text-md rounded-none">
            View All Services
            <MoveRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
