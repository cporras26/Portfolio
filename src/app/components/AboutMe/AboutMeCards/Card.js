export default function Card({ item, index, handleCardClick, selectedIndex }) {
  return (
    <a onClick={() => handleCardClick(item, index)}
       style={{ boxShadow: "#48AFDE -5px 10px 20px 0" }}
       className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl center
               p-6 lg:p-10 flex flex-col justify-center items-center hover:-translate-y-2
                ${selectedIndex === index ? "-translate-y-2 bg-[#476571]" : "bg-[#EAF7FC] hover:bg-[#476571]"}`}
    >
      <div className="w-16 h-16 sm:w-10 sm:h-10 lg:w-16 lg:h-16">
        <img src={item.img} alt="" />
      </div>
      <h4 className={`text-center text-sm lg:text-xl font-recoletaBold transition-colors 
                duration-500 group-hover:text-white mt-3 ${selectedIndex === index ? "text-white" : "text-[#47626D]"}`}>
        {item.title}
      </h4>
      <div className={`absolute -top-2 -right-2 transform transition-all duration-500 opacity-0
                group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-[#32474f] flex justify-center items-center
                font-bold text-white font-recoletaBold text-xl ${selectedIndex === index ? "opacity-100 rotate-12" : "group-hover:rotate-12"}`}>
        {item.count}
      </div>
    </a>);
}