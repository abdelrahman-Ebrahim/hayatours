import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const inView = useInView(ref, { amount: 0.3 });
  const logoControls = useAnimation();
  const buttonControls = useAnimation();
  const t = useTranslations("Hero");
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    if (inView) {
      logoControls.start({ opacity: 1, x: 0 });
      buttonControls.start({ opacity: 1, x: 0 });
    } else {
      logoControls.start({ opacity: 0, x: -50 });
      buttonControls.start({ opacity: 0, x: 50 });
    }
  }, [inView, logoControls, buttonControls]);

  // Remove the locale from the pathname
  const pathWithoutLocale = pathname.replace(`/${locale}`, "");

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
          className="flex items-center gap-4"
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
            {t("aboutUs")}
          </button>
          <button
            onClick={() => scrollToRefs.fleet.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036] min-w-[160px] md:min-w-fit"
          >
            {t("fleet")}
          </button>
          <button
            onClick={() => scrollToRefs.achievements.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036] min-w-[160px] md:min-w-fit"
          >
            {t("achievments")}
          </button>
          <button
            onClick={() => scrollToRefs.services.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036] min-w-[160px] md:min-w-fit"
          >
            {t("services")}
          </button>
          <button
            onClick={() => scrollToRefs.contact.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#968152] py-2 px-4 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-[#8b7036] min-w-[160px] md:min-w-fit"
          >
            {t("contact")}
          </button>

            {/* Language switcher button */}
            <Link 
            href={`/${locale === 'en' ? 'ar' : 'en'}${pathWithoutLocale}`}
            className="bg-white text-[#968152] py-2 px-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-gray-100 border border-[#968152] flex items-center gap-2"
          >
            {locale === 'en' ? 'ع' : 'EN'}
            <Image src={"/globe.svg"} alt="language" width={20} height={20}/>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}