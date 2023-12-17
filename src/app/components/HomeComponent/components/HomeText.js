import ButtonLink from "@/app/UI/ButtonLink";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function HomeText() {
  return (
    <div className="bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent">
      <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
        <p
          className={`text-[#47AEDE] text-3xl md:text-base lg:text-2xl ${hind.className}`}
        >
          Hi There!
        </p>
        <h1 className="text-[#223740] font-recolectaBlack text-5xl md:-text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
          I&apos;m Carlos Porras
        </h1>
        <h2
          className={`text-[#223740] py-2 font-bold uppercase tracking-widest md:text-xl ${hind.className}`}
        >
          A Fullstack Developer
        </h2>
        <ButtonLink href="/#portfolio" style="primary" className="mr-3">
          Projects
        </ButtonLink>
        <ButtonLink
          href="ehizcv.pdf"
          download="CarlosPorrasResume.pdf"
          style="secondary"
        >
          My Resume
        </ButtonLink>
      </div>
    </div>
  );
}

export default HomeText;
