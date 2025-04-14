import Image from "next/image";

// Define the type for the scrollToRefs object
interface HeroProps {
  scrollToRefs: {
    about: React.RefObject<HTMLDivElement | null>;  // Allow for null
    fleet: React.RefObject<HTMLDivElement | null>;  // Allow for null
    achievements: React.RefObject<HTMLDivElement | null>;  // Allow for null
    services: React.RefObject<HTMLDivElement | null>;  // Allow for null
    contact: React.RefObject<HTMLDivElement | null>;  // Allow for null
  };
}

export default function Hero({ scrollToRefs }: HeroProps) {
  return (
    <div className="my-5 py-5 w-full h-auto bg-heroBg bg-cover bg-no-repeat flex items-center md:py-0 md:h-[300px]">
      <div className="w-full flex flex-col items-center justify-between gap-6 px-4 lg:flex-row lg:px-20">
        <div>
          <Image src={"/hayatLogo.png"} alt="logo" width={175} height={175} />
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
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
        </div>
      </div>
    </div>
  );
}
