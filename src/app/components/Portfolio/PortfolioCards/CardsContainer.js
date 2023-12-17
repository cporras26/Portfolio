export default function CardsContainer({ children }) {
  return <div
    className="container mx-auto grid auto-rows-fr gap-4 px-4 sm:px-10 md:grid-cols-2 xl:grid-cols-3 xl:px-10">{children}</div>;
}