import Logo from "@/components/Logoicon";
import Theme from "@/components/Theme";

export default function Navbar() {
  return (
    <header className="header flex justify-between max-w-7xl mx-auto my-7">
      <div>
        <Theme />
      </div>
      <div className="nav--left flex gap-7 items-center">
          <ul className="list--items flex gap-7 max-md:hidden">
            <li>About</li>
            <li>Work</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        <button className="dark-mode">
          <Logo />
        </button>
        <button className="download--CV bg-slate-900 py-2 px-5 text-white rounded-xl">Download CV</button>
      </div>
    </header>
  );
}
