'use client'
import Image from "next/image";

// Define the type for the scrollToRefs object
interface HeroProps {
    scrollToRefs: {
        about: React.RefObject<HTMLElement>;
        fleet: React.RefObject<HTMLElement>;
        achievements: React.RefObject<HTMLElement>;
        services: React.RefObject<HTMLElement>;
        contact: React.RefObject<HTMLElement>;
    };
}

export default function Hero({ scrollToRefs }: HeroProps) {
    return (
        <div className="my-5 w-full bg-heroBg bg-cover bg-no-repeat h-[300px] flex items-center">
            <div className="w-full flex items-center justify-between px-20">
                <div>
                    <Image src={"/hayatLogo.png"} alt="logo" width={175} height={175} />
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => scrollToRefs.about.current.scrollIntoView({ behavior: "smooth" })}
                        className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036]"
                    >
                        About us
                    </button>
                    <button
                        onClick={() => scrollToRefs.fleet.current.scrollIntoView({ behavior: "smooth" })}
                        className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036]"
                    >
                        Fleet
                    </button>
                    <button
                        onClick={() => scrollToRefs.achievements.current.scrollIntoView({ behavior: "smooth" })}
                        className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036]"
                    >
                        Achievements
                    </button>
                    <button
                        onClick={() => scrollToRefs.services.current.scrollIntoView({ behavior: "smooth" })}
                        className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036]"
                    >
                        Services
                    </button>
                    <button
                        onClick={() => scrollToRefs.contact.current.scrollIntoView({ behavior: "smooth" })}
                        className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036]"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
}
