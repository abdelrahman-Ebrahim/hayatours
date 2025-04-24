'use client'

import { useRef } from 'react';
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Counts from "@/components/Counts";
import Experties from "@/components/Experties";
import Fleet from "@/components/Fleet";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const fleetRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRefs = {
    about: aboutRef,
    fleet: fleetRef,
    achievements: achievementsRef,
    services: servicesRef,
    contact: contactRef,
  };

  return (
    <>
      <Hero scrollToRefs={scrollToRefs} />

      <div ref={aboutRef}>
        <About />
      </div>

      <Counts />

      <div ref={servicesRef}>
        <Experties />
      </div>

      <div ref={fleetRef}>
        <Fleet />
      </div>

      <div ref={achievementsRef}>
        <Achievements />
      </div>

      <Gallery />

      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}
