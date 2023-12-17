import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

function ButtonLink({ href, download, children, style, className }) {
  const backgroundColor = style == "primary" ? "bg-[#47AEDE]" : "bg-[#223740]";
  const backgroundHoverColor =
    style == "primary" ? "hover:bg-[#223740]" : "hover:bg-[#47AEDE]";

  return (
    <a
      href={href}
      download={download}
      className={`inline-block uppercase tracking-wider transition-all duration-300 ease-in-out rounded-lg
                    text-white py-3 px-5 font-bold md:py-2 lg:-y3 lg:px-8 md:text-xs lg:text-base
                    ${hind.className} hover:shadow-lg transform hover:translate-y-1 cursor-pointer ${backgroundColor} ${backgroundHoverColor} ${className}`}
    >
      {children}
    </a>
  );
}

export default ButtonLink;
