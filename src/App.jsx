import Header from "./components/Header";
import Hero from "./components/Hero";
import ImpactQuote from "./components/ImpactQuote";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Editorial from "./components/Editorial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="bg-cream">
      <Header />
      <main>
        <Hero />
        <ImpactQuote />
        <About />
        <Portfolio />
        <Services />
        <Editorial />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
