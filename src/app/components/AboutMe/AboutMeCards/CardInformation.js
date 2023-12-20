import CardDetails from "@/app/components/AboutMe/AboutMeCards/CardDetails";
import CardNumber from "@/app/components/AboutMe/AboutMeCards/CardNumber";
import CardButtons from "@/app/components/AboutMe/AboutMeCards/CardButtons";
import "../aboutme.css";


export default function CardInformation() {
  return (
    <div className="bg-white rounded-xl p-10 xl:p-12 sm:p-4 md:p-6 relative"
         style={{ boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)" }}>
      <CardDetails />
      <CardNumber />
      <CardButtons />
    </div>
  );
}