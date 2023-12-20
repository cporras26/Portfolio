import PrevIcon from "@/app/UI/icons/PrevIcon";
import NextIcon from "@/app/UI/icons/NextIcon";
import { useAboutMeContext } from "@/app/components/AboutMe/context/AboutMeContext";

export default function CardButtons() {
  const { handlePrevious, handleNext } = useAboutMeContext();
  return (
    <div className="absolute right-10 -bottom-5 flex gap-2">
      <Button onClick={handlePrevious}><PrevIcon /></Button>
      <Button onClick={handleNext}><NextIcon /></Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <span onClick={onClick}
               className=" cursor-pointer w-12 h-12 rounded-xl bg-[#47626D] flex items-center justify-center"
  >
    {children}</span>;
}