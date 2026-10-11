import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import AppShowcase from "./components/AppShowcase.jsx";
import Technology from "./components/Technology.jsx";
import Download from "./components/Download.jsx";
import About from "./components/About.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppShowcase />
        <Technology />
        <Download />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}