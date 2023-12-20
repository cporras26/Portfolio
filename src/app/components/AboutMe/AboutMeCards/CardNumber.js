import { useAboutMeContext } from "@/app/components/AboutMe/context/AboutMeContext";

export default function CardNumber() {
  const { mappedData, isFlipped } = useAboutMeContext();
  return (
    <div className="absolute -top-7 sm:-top-8 right-0 sm:-right-20">
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="rounded-2xl text-7xl xl:text-8xl font-recoletaBlack
          text-white bg-[#47626D] p-5 xl:p-8 w-28 h-28 xl:w-36 xl:h-36 transform transition duration-500
          transform-preserve -rotate-6 transform-preserve">
          <span className="text-2xl xl:text-6xl mr-2 sm:mr-3">*</span>
          {mappedData.count}
        </div>
      </div>
    </div>
  );
}