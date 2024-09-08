import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// Import required modules
import { EffectCreative } from "swiper/modules";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export default function Crousal({ doctors }) {
  return (
    <>
      <Carousel className="w-[35vw] h-[70vh]">
        <CarouselContent>
          {doctors.length &&
            doctors.map((docs, idx) => {
              return (
                <CarouselItem key={idx}>
                  <Link>
                    <div className="flex overflow-hidden flex-col items-center justify-center p-3">
                      <div className="img w-full p-3 ">
                        <img
                          className="shadow-lg rounded-md"
                          src={docs.doctorImageUrl}
                          className="w-full object-cover"
                          alt={docs.photographer}
                        />
                      </div>
                      <div className="name">
                        <div className="text-lg font-semibold">
                          {docs.doctorName}
                        </div>
                      </div>
                      <div className="specialization">
                        <p className="text-sm text-muted-foreground">
                          {docs.specialization}
                        </p>
                      </div>
                      <div className="number">
                        <p className="text-sm text-muted-foreground">
                          {docs.doctorNumber}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
