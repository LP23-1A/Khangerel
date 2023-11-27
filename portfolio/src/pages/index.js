import Navbar from "@/components/Navbar";
import Content from "@/components/content"
import About from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import Work from "@/components/work";
import Footer from "@/components/footer";
import { useState } from "react";
import DarkTheme from "../components/Icons/DarkTheme"

export default function Home() {
  const [dark, setDark] = useState(true);
  const Handler = () => {
    setDark(!dark);
    if (setDark(!dark) === false) {
      <DarkTheme />
    }
  }
  return (
    <div className={`${dark && "bg-black text-white"}`}>
      <Navbar Handler={Handler}/>
      <Content />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
}
