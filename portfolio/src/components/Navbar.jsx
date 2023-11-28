import Logo from "@/components/Logoicon";
import Theme from "@/components/Theme";
import MENU from "./Menu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useTheme } from "next-themes";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuHandler = () => {
    setIsOpen(!isOpen)
  }
  const themeToggle = () => {
    if (theme === 'dark') {
      setTheme('light')
    } 
    if (theme === 'light') {
      setTheme('dark')
    }
  }
  return (
    <header className="header flex justify-between max-w-screen-2xl px-[80px] mx-auto pt-5 items-center max-md:px-2">
      <div>
        <Theme />
      </div>
      <div className="nav--left flex gap-7 items-center max-md:hidden">
          <ul className="list--items flex gap-7">
            <li>About</li>
            <li>Work</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        <button className="dark-mode" onClick={themeToggle}>
          <Logo />
        </button>
        <button className="download--CV bg-slate-900 py-2 px-5 text-white rounded-xl">Download CV</button>
      </div>
      <button className="md:hidden" onClick={menuHandler}>
        <MENU />
      </button>
      {
        isOpen && <MobileMenu setIsOpen={setIsOpen} />
      }
    </header>
  );
}
