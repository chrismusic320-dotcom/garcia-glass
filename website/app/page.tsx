import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import Portfolio from "@/components/sections/home/Portfolio";
import Quote from "@/components/sections/home/Quote";
import About from "@/components/sections/home/About";
import Contact from "@/components/sections/home/Contact";
import Footer from "@/components/sections/home/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
