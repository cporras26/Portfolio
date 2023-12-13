export default function HeaderComponent({isScrolled, children}){
    return <header className="fixed top-0 z-50 transition-all duration-500" style={{
        backgroundColor: isScrolled ? "#fff" : "transparent",
        boxShadow: isScrolled ? "#48AFDE -10px 25px 50px 10px" : ""
    }}> {children}
    </header>
}