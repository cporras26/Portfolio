export default function PortfolioBackground({ children }) {
  return (
    <div
      id="portfolio"
      className="pt-24 -mb-40 w-full"
      style={{
        backgroundImage: "linear-gradient(-62deg, #EEF7FB 68%, white 0% 100%)"
      }}
    >
      {children}
    </div>);
}