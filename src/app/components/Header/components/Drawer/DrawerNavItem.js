import { useHeaderContext } from "@/app/components/Header/context/HeaderContext";

export default function DrawerNavItem({ navItem, children }) {
  const { selectedNavItem, setSelectedNavItem, setIsDrawerOpen } = useHeaderContext();

  return (
    <li className="group my-4 2xl:my-6">
      <div className="inline-block relative">
        <a href={`/#${navItem}`} onClick={() => {
          setSelectedNavItem(navItem);
          setIsDrawerOpen(false);
        }
        }>{children}</a>
        <div className={`absolute top-2 -left-2 w-full h-full transform-gpu 
    transition-all duration-300 ${selectedNavItem === navItem ? "opacity-100 -rotate-6" : "opacity-0"} 
    group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10`}></div>
      </div>
    </li>);
}