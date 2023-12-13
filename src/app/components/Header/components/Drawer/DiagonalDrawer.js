export default function DiagonalDrawer({isOpen, setIsOpen, selectedIndex, setSelectedIndex}){
    return <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}></div>
}