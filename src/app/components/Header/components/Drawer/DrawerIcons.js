import GitIcon from "@/app/UI/icons/GitIcon";
import LinkedinIcon from "@/app/UI/icons/LinkedinIcon";
import YoutubeIcon from "@/app/UI/icons/YoutubeIcon";

export default function DrawerIcons() {
  return <div className="mt-4 sm:mt-12 lg:mt-14 relative">
    <h3 className="font-bold text-[#48AFDE] text-2xl uppercasemb-5 mb-2">Follow Me Around</h3>
    <div className="flex flex-row justify-center">
      <a href="https://github.com/cporras26?tab=repositories"
         className="text-gray-300 hover:text-white transition-color duration-300"
         target="_blank"
      >
        <GitIcon />
      </a>
      <a href="https://www.linkedin.com/in/carlos-eduardo-porras-carvajal-82a064207/"
         className="text-gray-300 hover:text-white transition-color duration-300"
         target="_blank">
        <LinkedinIcon />
      </a>
      <a href="https://www.youtube.com/channel/UCk90yt6B_9EqRJh7kugyPHA"
         className="text-gray-300 hover:text-white transition-color duration-300"
         target="_blank">
        <YoutubeIcon />
      </a>
    </div>
  </div>;
}