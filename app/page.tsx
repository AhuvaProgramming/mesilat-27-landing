import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectIntro from "@/components/ProjectIntro";
import ApartmentSection from "@/components/ApartmentSection";
import VideoSection from "@/components/VideoSection";
import RentalOptions from "@/components/RentalOptions";
import LocationSection from "@/components/LocationSection";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProjectIntro />
      <ApartmentSection />
      <VideoSection />
      <RentalOptions />
      <LocationSection />
      <Gallery />
      <ContactSection />
      <Footer />
      <ContactBar />
    </main>
  );
}