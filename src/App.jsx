import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import AppShowcase from "./components/AppShowcase.jsx";
import Technology from "./components/Technology.jsx";
import Download from "./components/Download.jsx";
import About from "./components/About.jsx";
import Support from "./components/Support.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import LegalPage from "./pages/LegalPage.jsx";
function SiteVideoBackground() { return <div className="site-video-background" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata" poster="/images/app/04-home-dashboard.jpg"><source src="/videos/smarthomex_intro.mp4" type="video/mp4" /></video></div>; }

function HomePage() {
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
        <Support />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteVideoBackground />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
