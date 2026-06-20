import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Collaborations from "@/components/Collaborations";
import Testimonials from "@/components/Testimonials";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Collaborations />
        <Testimonials />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
