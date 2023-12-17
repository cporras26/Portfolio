import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function PortfolioHeading() {
  return (
    <div className="mb-8">
      <p className="text-[#48AFDE] lg:pl-24 px-5 sm:pl-10 font-extrabold text-5xl">Recent Works</p>
      <p
        className={`max-w-2xl lg:pl-24 px-5 sm:px-10 text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}>
        Here are some of the most recent projects I have worked on. As a full-stack developer I not only
        worry about the functionality of the application, but also about the look & feel, always having in mind the
        end-user. Because of this, here you can find projects in which I have only focused on the front-end
        (including HTML, CSS, JavaScript, React and NextJS) and also full-stack projects using back-end
        technologies such as ASP.NET Core.
      </p>
    </div>);
}