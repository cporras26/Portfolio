import HomeSkillsSlider from "./HomeSkillsSlider";

function HomeImage() {
  return (
    <div className="col-span-12 bg-[#D9EEF7] md:bg-transparent md:col-span-7">
      <div className="flex justify-center">
        <img
          src="/carlosPorrasGradPic.png"
          alt="Profile picture"
          decoding="async"
          className="h-96 sm:h-[30rem] md:h-[40rem] inline-block"
        />
      </div>
    </div>
  );
}

export default HomeImage;
