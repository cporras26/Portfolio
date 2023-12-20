import { Hind } from "next/font/google";
import { useAboutMeContext } from "@/app/components/AboutMe/context/AboutMeContext";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function CardInformation() {
  const { mappedData, isFaded } = useAboutMeContext();

  return (
    <div className="bg-white rounded-xl p-10 xl:p-12 sm:p-4 md:p-6 relative"
         style={{ boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)" }}>
      <section className={`fade-left overflow-hidden ${isFaded ? "fade-out" : ""}`}>
        <p className={`text-[#47626D] ${hind.className} text-lg sm:text-base lg:text-xl
          transition duration-500 transform opacity-100`}>My Tech Skills Are:</p>
        <h2 className="font-recoletaBold text-[#47626D] text-3xl sm:text-2xl md:text-3xl
          mb-4 w-44 md:w-56 transition duration-500 transform opacity-100">{mappedData.title}</h2>
        <ul className={`${hind.className} ml-8 lg:ml-10 font-[300] list-disc text-[#47626D] lg:text-lg transition-all
        duration-500 transform opacity-100`}>
          {mappedData.array.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
      </section>

    </div>
  );
}