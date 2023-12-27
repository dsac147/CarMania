"use client";

import React from "react";
import Image from "next/image";

import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Drive the Experience — Effortless Booking, Instant Joyride!
        </h1>
        <p className="hero__subtitle">
          Rev up your car rental adventure with our seamless booking journey.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="text-white rounded-full mt-10 bg-red"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
