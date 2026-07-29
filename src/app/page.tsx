import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStorySection from "@/components/BrandStorySection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { menuItems, contactInfo } from "@/data/restaurant";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandStorySection />
        <MenuSection dishes={menuItems} />
        <ContactSection info={contactInfo} />
      </main>
      <Footer />
    </>
  );
}
