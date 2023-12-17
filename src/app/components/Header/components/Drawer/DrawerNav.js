export default function DrawerNav({ children }) {
  return <nav className="text-white font-recoletaBold text-center text-4xl lg:text-4xl 2xl:text-6xl uppercase">
    <ul className="flex flex-col">
      {children}
    </ul>
  </nav>;
}