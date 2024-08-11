'use client'
import Section1 from "@/components/section1/Section1";
import Reviews from "@/components/section2/Reviews";
import Section3 from "@/components/section3/Section3";
import Image from "next/image";
import Lenis from '@studio-freight/lenis';
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import ScalingDiv from "@/components/animations/scalingdiv/ScalingDiv";
import Section5 from "@/components/section5/Section5";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Disable scrolling on the body when loading
    document.body.style.overflow = loading ? 'hidden' : 'auto';

    return () => {
      // Reset overflow style when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <main className="min-h-[100vh]">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      <Section1 />
      <Reviews />
      <Section3 />
      {/* <Section4/> */}
    </main>
  );
}
