import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function ContactMe() {
  return (
    <div className="py-12 px-6" id="#contactMe">
      <h1 className="font-recoletaBlack text-5xl text-[#48AFDE] mb-5 md:px-24 px-5">
        Contact Me
      </h1>
      <h4 className="font-[300] w-full md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#223740]
          text-2xl mb-5 px-5 md:px-24"
      >
        If you are interested in contacting me, feel free to fill the form below and this will
        automatically send me an email. I will respond as soon as possible.
      </h4>
      <div className="max-w-3xl mx-auto px-4">
        <form className="rounded-lg bg-[#476571] py-12 px-6 shadow-gray-500 shadow-lg">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className={`sm:basis-40 text-[#111619] font-bold tracking-wider ${hind.className}`}>Your
              Name</label>
            <input
              className="px-[12px] outline-none rounded-md grow"
              type="text"
              name="name"
              required
            />
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className={`sm:basis-40 text-[#111619] font-bold ${hind.className}`}>Your Email</label>
            <input
              className="px-[12px] outline-none rounded-md grow"
              type="email"
              name="email"
              required
            />
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className={`sm:basis-40 text-[#111619] font-bold ${hind.className}`}>Email Subject</label>
            <input
              className="px-[12px] outline-none rounded-md grow"
              type="text"
              name="subject"
              required
            />
          </div>

          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className={`sm:basis-40 text-[#111619] font-bold ${hind.className}`}>Email Body</label>
            <textarea
              className="px-[12px] outline-none rounded-md  grow h-[180px]"
              name="message"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              className={`bg-[#27353a] text-white ${hind.className} tracking-wider uppercase px-6 py-3 
              hover:bg-[#161e21] rounded-xl transform duration-300`}>Send
              Email
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}