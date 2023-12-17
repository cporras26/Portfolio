"use client";
import Tag from "@/app/UI/Tag";
import { Hind } from "next/font/google";
import ButtonLink from "@/app/UI/ButtonLink";
import { Tooltip } from "flowbite-react";
import InfoIcon from "@/app/UI/icons/InfoIcon";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});
export default function Card({ item }) {
  const { name, description, image, tags, info } = item;

  return (
    <div className="overflow-hidden rounded-lg flex flex-col"
         style={{ boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)" }}>
      <img src={image} alt="" className="w-full h-80" />
      <div className="px-4 pt-6 flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((technology) => (<Tag technology={technology} />))}
        </div>
        <p className={`text-2xl font-[300] tracking-wider mb-2`}>{name}</p>
        <p className={`text-sm leading-7 ${hind.className}`}>{description}</p>
      </div>
      <div className="flex py-6 px-4 gap-4">
        <ButtonLink style="primary">GitHub</ButtonLink>
        <ButtonLink style="secondary">Demo</ButtonLink>
        {info && (
          <div className={`ml-auto flex items-center`}>
            <Tooltip content={info} style="dark" className={`w-80 ${hind.className} text-sm`}>
              <InfoIcon />
            </Tooltip>
          </div>
        )}
      </div>
    </div>);
}