import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function Description({ children }) {
  return <p className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className}`}
  >{children}</p>;
}