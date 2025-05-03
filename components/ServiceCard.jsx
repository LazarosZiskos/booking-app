import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import React from "react";

const ServiceCard = () => {
  return (
    <Card>
      <div className="rounded-tl-lg rounded-tr-lg overflow-hidden">
        <img
          src="/heropic.jpg"
          alt="card-image"
          className="w-[400px] object-fill"
        />
      </div>
      <CardHeader>
        <CardTitle>
          <h1 className="text-xl">Haircut</h1>
        </CardTitle>
        <CardDescription>
          <p className="text-gray-text font-semibold leading-[24px] text-[16px]">
            One-on-one consultation with our experts to discuss your specific
            needs.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center]">
          <div className="text-gray-text text-[16px] leading-[24px] font-semibold flex items-center gap-1">
            <Clock className="text-green" size={20} />
            60 min
          </div>
          <div className="text-[16px] leading-[24px] font-semibold">$30</div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full mb-6">
          <Link href="/book-now">
            <Button className="bg-green w-full rounded-none hidden md:block hover:bg-green-dark cursor-pointer text-[16px] leading-[24px]">
              Book Now
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
