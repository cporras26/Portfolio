import { AboutData } from "@/app/data";
import Card from "@/app/components/AboutMe/AboutMeCards/Card";
import { useAboutMeContext } from "@/app/components/AboutMe/context/AboutMeContext";

export default function Cards() {
  const { selectedIndex, handleCardClick } = useAboutMeContext();

  return (
    <div className="hidden sm:block"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {
          AboutData.map((item, index) => (
            <Card item={item}
                  index={index}
                  selectedIndex={selectedIndex}
                  handleCardClick={handleCardClick}
            />))
        }
      </div>
    </div>);
}