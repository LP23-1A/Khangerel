import Logo from "@/components/Logoicon";
import Theme from "@/components/Theme";
import MENU from "./Menu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import DarkTheme from "../components/DarkTheme";


export default function Navbar({ Handler }) {
  const [isOpen, setIsOpen] = useState(false)

  const menuHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="header flex justify-between max-w-7xl mx-auto pt-5 items-center max-md:px-2">
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
        <button className="dark-mode" onClick={Handler}>
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
