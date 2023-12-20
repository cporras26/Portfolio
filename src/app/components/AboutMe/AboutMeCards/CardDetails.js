import { useAboutMeContext } from "@/app/components/AboutMe/context/AboutMeContext";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});
export default function CardDetails() {
  const { mappedData, isFaded } = useAboutMeContext();
  return (
    <section className={`fade-left overflow-hidden ${isFaded ? "fade-out" : ""}`}>
      <p className={`text-[#47626D] ${hind.className} text-lg sm:text-base lg:text-xl`}>My Tech Skills Are:</p>
      <h2
        className="font-recoletaBold text-[#47626D] text-3xl sm:text-2xl md:text-3xl mb-4 w-44 md:w-56">{mappedData.title}</h2>
      <ul className={`${hind.className} ml-8 lg:ml-10 font-[300] list-disc text-[#47626D] lg:text-lg`}>
        {mappedData.array.map(skill => (
          <li>{skill}</li>
        ))}
      </ul>
    </section>
  );
}