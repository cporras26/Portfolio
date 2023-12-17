export default function Nav({ children }) {
  return <nav className="invisible xl:visible xl:max-w-4xl mx-auto items-center">
    <ul className="flex font-recoletaBlack flex-row items-center h-20">
      {children}
    </ul>
  </nav>;
}