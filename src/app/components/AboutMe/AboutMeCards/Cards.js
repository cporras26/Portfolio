import { AboutData } from "@/app/data";
import Card from "@/app/components/AboutMe/AboutMeCards/Card";

export default function Cards() {
  return (
    <div className="hidden sm:block"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {
          AboutData.map((item, index) => (
            <Card item={item} index={index} key={index}
            />))
        }
      </div>
    </div>);
}