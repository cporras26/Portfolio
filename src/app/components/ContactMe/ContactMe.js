"use client";
import { Hind } from "next/font/google";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SmallSpinner from "@/app/UI/SmallSpinner";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function ContactMe() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [key]: value
    });
  };

  const clearState = () => {
    setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      ...state
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(async res => {
        setLoading(false);
        const response = await res.json();
        toast.success(response.message, { duration: 5000 });
      })
      .catch((e) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        clearState();
        setLoading(false);
      });
  };

  return (
    <>
      <Toaster containerClassName="font-[300] tracking-wider" />
      <div className="py-12 px-6" id="contactMe">
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
          <form className="rounded-lg bg-[#476571] py-12 px-6 shadow-gray-500 shadow-lg"
                onSubmit={handleSubmit}
          >
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className={`sm:basis-40 text-[#111619] font-bold tracking-wider ${hind.className}`}>Your
                Name</label>
              <input
                className={`px-[12px] outline-none rounded-md grow ${hind.className}`}
                type="text"
                name="name"
                onChange={handleChange}
                value={state.name}
                disabled={loading}
                required
              />
            </div>

            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className={`sm:basis-40 text-[#111619] font-bold ${hind.className}`}>Your Email</label>
              <input
                className={`px-[12px] outline-none rounded-md grow ${hind.className}`}
                type="email"
                name="email"
                onChange={handleChange}
                value={state.email}
                disabled={loading}
                required
              />
            </div>

            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className={`sm:basis-40 text-[#111619] font-bold ${hind.className}`}>Email Subject</label>
              <input
                className={`px-[12px] outline-none rounded-md grow ${hind.className}`}
                type="text"
                name="subject"
                onChange={handleChange}
                value={state.subject}
                disabled={loading}
                required
              />
            </div>

            <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className={`sm:basis-40 text-[#111619] font-bold ${hind.className}`}>Email Body</label>
              <textarea
                className={`px-[12px] outline-none rounded-md grow h-[180px] ${hind.className}`}
                name="message"
                onChange={handleChange}
                value={state.message}
                disabled={loading}
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                className={`bg-[#27353a] text-white ${hind.className} tracking-wider uppercase px-6 py-3 
              hover:bg-[#161e21] rounded-xl transform duration-300 flex items-center justify-center`}
                disabled={loading}
              >
                {loading ? <SmallSpinner /> : "Send Email"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}