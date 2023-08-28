import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
