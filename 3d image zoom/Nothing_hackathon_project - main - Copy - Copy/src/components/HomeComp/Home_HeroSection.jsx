
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GlassCanvas from "./Home_GlassCanvas";

const HeroSection = () => {
  const nothingRef = useRef(null);
  const exploreRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

   tl.from(exploreRef.current, {
    duration: 1,
    delay: 2,
    y: 100,   
    opacity: 0,
    ease: "power3.out",
  });

  tl.from(nothingRef.current, {
    duration: 1,
    yPercent: 100,
    opacity: 0,
    ease: "power3.out",
  }); 


  }, []);

  return (
    <>
    
      <div className="section-one-home">
        <video autoPlay muted loop playsInline preload="none" id="heroVideo">
          <source src="/video/introVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <GlassCanvas />

      <div className="hero-title">
        <h1>
          <span ref={exploreRef} className="explore-text">
            EXPLORE
          </span>
          <br />
          <span ref={nothingRef} className="nothing-text text-[#cc3628]">
            NOTHING
          </span>
        </h1>
      </div>
    </>
  );
};

export default HeroSection;
