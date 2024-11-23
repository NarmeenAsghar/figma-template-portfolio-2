import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import Services from "@/components/Services";
import Subscribe from "@/components/subscribe";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <div className="md:w-[1440px] md:h-[4541px] md:gap-0 h-screen ml-4 mr-4 ">
      <Header />
      <Hero />
      <Services />
      <Explore />
      <Testimonial />
      <OurTeam />
      <Subscribe />
      <Footer />
    </div>
  );
}
