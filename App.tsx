import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { EventsSection } from "./components/EventsSection";
import { MissionSection } from "./components/MissionSection";
import { GetInvolvedSection } from "./components/GetInvolvedSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <MissionSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}