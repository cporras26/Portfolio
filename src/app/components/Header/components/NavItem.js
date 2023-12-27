import { useHeaderContext } from "@/app/components/Header/context/HeaderContext";

export default function NavItem({ navItem, children }) {
  const { selectedNavItem, setSelectedNavItem } = useHeaderContext();

  return <li className="group text-2xl relative font-bold mr-20">
    {selectedNavItem === navItem ? (
      <span
        className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
    ) : (
      <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
    )}
    <a className={`${selectedNavItem === navItem ? "text-black" : "text-[#666d47]"} group-hover:text-black`}
       href={`#${navItem}`}
       onClick={() => setSelectedNavItem(navItem)}>{children}</a>
  </li>;
}