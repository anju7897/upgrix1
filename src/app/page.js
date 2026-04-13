import About from "@/sections/Home/About";
import CaseStudy from "@/sections/Home/CaseStudy";
import Hero from "@/sections/Home/Hero";
import Services from "@/sections/Home/Services";
import Testimonials from "@/sections/Home/Testimonials";
import ClientTestimoni from "@/sections/Home/ClientTestimonial";
import AiSeo from "@/sections/Home/AiSeo";
import WhyChoose from "@/sections/Home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ClientTestimoni />
      <WhyChoose />
      <CaseStudy />
      <AiSeo />
      
      
    
    </>
  );
}