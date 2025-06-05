"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import image1 from "../../images/hero_image1.jpg";
import image2 from "../../images/hero_image2.jpg";  
import image3 from "../../images/hero_image3.jpg"; 
import image4 from "../../images/hero_image4.jpg";   

const images = [
  image4,
  image1,
  image3,
  image2,
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFadeIn(true);
      }, 500); // Fade-out duration
    }, 5000); // Total interval time

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:h-screen h-[95vh] flex flex-col justify-center bg-black relative overflow-hidden">
      {/* Fading background image */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out">
        <Image
          src={images[currentIndex]}
          alt="Background"
          fill
          priority
          className={`object-cover w-full h-full transition-opacity duration-700 ease-in-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* Foreground content */}
      <div className="container relative z-10 mx-auto text-center text-white">
        <div className="max-w-5xl md:mx-auto text-start mx-4">
          <Badge className="mb-3 bg-green-100 md:mt-0 mt-[50px] text-green-800 hover:bg-green-200">
            Established 2015 • 500+ Active Members
          </Badge>

          <h1 style={{lineHeight:'27px'}} className="text-xl md:text-2xl font-extrabold mb-3">
            Ahmadu Bello University
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-950">Developers Club</span>
          </h1>

          <p className="md:text-6xl text-5xl mb-8 md:leading-[60px] font-extrabold leading-[50px]">
            500+ ABU techies learning, building, and leading the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button asChild size="xl" className="bg-gradient-to-b from-green-500 transition-all ease-in-out duration-300 to-green-950 text-[19px] font-extrabold   hover:scale-[104%]">
              <Link href="/register">Become a Member</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-green-400 text-white text-[19px] font-extrabold bg-transparent backdrop-blur-sm hover:bg-black/50 hover:text-white"
            >
              <Link href="/events">Explore Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
