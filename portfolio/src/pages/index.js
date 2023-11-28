import Navbar from "@/components/Navbar";
import Content from "@/components/content"
import About from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import Work from "@/components/work";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
}
