'use client'
import Section1 from "@/components/section1/Section1";
import Reviews from "@/components/section2/Reviews";
import Section3 from "@/components/section3/Section3";
import Section4 from "@/components/section4/Section4";
import Image from "next/image";
import Lenis from '@studio-freight/lenis';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main className="">
      <Section1/>
      <Reviews/>
      <Section3/>
      <Section4/>
    </main>
  );
}
