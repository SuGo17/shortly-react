import "../Css/homepage.css";
import Hero from "./Sections/Hero";
import LinkForm from "./Sections/LinkForm";
import Features from "./Sections/Features";
import Footer from "./Sections/Footer";
import BoostSection from "./Sections/BoostSection";

function HomePage() {
  return (
    <main>
      <header className="header">
        <Hero />
        <LinkForm />
      </header>
      <Features />
      <BoostSection />
      <Footer />
    </main>
  );
}

export default HomePage;
