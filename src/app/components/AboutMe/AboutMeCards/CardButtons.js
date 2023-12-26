import PrevIcon from "@/app/UI/icons/PrevIcon";
import NextIcon from "@/app/UI/icons/NextIcon";
import { useAboutMeContext } from "@/app/components/AboutMe/context/AboutMeContext";

export default function CardButtons() {
  const { handlePrevious, handleNext } = useAboutMeContext();
  return (
    <div className="absolute right-4 -bottom-5 flex gap-2">
      <Button onClick={handlePrevious}><PrevIcon /></Button>
      <Button onClick={handleNext}><NextIcon /></Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <span onClick={onClick}
               className=" cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#47626D] flex items-center justify-center"
  >
    {children}</span>;
}