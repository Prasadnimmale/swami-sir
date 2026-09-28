import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualifications from "@/components/Qualifications";
import Specialties from "@/components/Specialties";
import Experience from "@/components/Experience";
import Aayushman from "@/components/Aayushman";
import Motherly from "@/components/Motherly";
import Testimonials from "@/components/Testimonials";
import Featured from "@/components/Featured";
import Publications from "@/components/Publications";
import Ventures from "@/components/Ventures";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Qualifications />
        <Specialties />
        <Experience />
        <Aayushman />
        <Motherly />
        <Testimonials />
        <Featured />
        <Publications />
        <Ventures />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}