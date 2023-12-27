import Image from "next/image";

function SliderImage({ src, className = "" }) {
  return (
    <Image
      height={12}
      width={150}
      src={src}
      alt="slider image"
      className={`h-10 w-32 cursor-pointer ${className}`}
    />
  );
}

export default SliderImage;
