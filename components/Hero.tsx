import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

interface HeroProps {
  scrollToRefs: {
    about: React.RefObject<HTMLDivElement | null>;
    fleet: React.RefObject<HTMLDivElement | null>;
    achievements: React.RefObject<HTMLDivElement | null>;
    services: React.RefObject<HTMLDivElement | null>;
    contact: React.RefObject<HTMLDivElement | null>;
  };
}

export default function Hero({ scrollToRefs }: HeroProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 }); // triggers when 30% in view

  const logoControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    if (inView) {
      logoControls.start({ opacity: 1, x: 0 });
      buttonControls.start({ opacity: 1, x: 0 });
    } else {
      logoControls.start({ opacity: 0, x: -50 });
      buttonControls.start({ opacity: 0, x: 50 });
    }
  }, [inView, logoControls, buttonControls]);

  return (
    <div
      ref={ref}
      className="my-5 py-5 w-full h-auto bg-heroBg bg-cover bg-no-repeat flex items-center md:py-0 md:h-[300px]"
    >
      <div className="w-full flex flex-col items-center justify-between gap-6 px-4 lg:flex-row lg:px-20">
        {/* Logo animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={logoControls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image src={"/hayatLogo.png"} alt="logo" width={175} height={175} />
        </motion.div>

        {/* Button group animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={buttonControls}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col items-center gap-4 md:flex-row"
        >
          <button
            onClick={() => scrollToRefs.about.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036] min-w-[160px] md:min-w-fit"
          >
            About us
          </button>
          <button
            onClick={() => scrollToRefs.fleet.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036] min-w-[160px] md:min-w-fit"
          >
            Fleet
          </button>
          <button
            onClick={() => scrollToRefs.achievements.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036] min-w-[160px] md:min-w-fit"
          >
            Achievements
          </button>
          <button
            onClick={() => scrollToRefs.services.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036] min-w-[160px] md:min-w-fit"
          >
            Services
          </button>
          <button
            onClick={() => scrollToRefs.contact.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036] min-w-[160px] md:min-w-fit"
          >
            Contact
          </button>
        </motion.div>
      </div>
    </div>
  );
}
