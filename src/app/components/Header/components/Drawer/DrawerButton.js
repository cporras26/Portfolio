export default function DrawerButton({ onClick, children }) {
  return <div onClick={onClick}
              className="absolute top-0 left-0 z-50 cursor-pointer w-16 h-16 lg:w-20 lg:h-20
        bg-[#48AFDE] flex justify-center items-center rounded-br-3xl">
    {children}
  </div>;
}