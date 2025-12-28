import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import SearchBar from "../components/sections/SearchBar";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}
