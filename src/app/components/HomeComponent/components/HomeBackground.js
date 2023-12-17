function HomeBackground({ children }) {
  return (
    <div
      id="home"
      style={{
        backgroundImage:
          "linear-gradient(62deg, #EEF7FB 0% 50%, #48AFDE 50% 100%)"
      }}
    >
      {children}
    </div>
  );
}

export default HomeBackground;
