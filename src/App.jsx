import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PromoVideo from "./components/PromoVideo.jsx";
import Features from "./components/Features.jsx";
import AppShowcase from "./components/AppShowcase.jsx";
import Technology from "./components/Technology.jsx";
import Download from "./components/Download.jsx";
import About from "./components/About.jsx";
import Support from "./components/Support.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import WorkWithMe from "./pages/WorkWithMe.jsx";
function SiteVideoBackground() { return <div className="site-video-background" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata" poster={`${import.meta.env.BASE_URL}images/app/04-home-dashboard.jpg`}><source src={`${import.meta.env.BASE_URL}videos/smarthomex_intro.mp4`} type="video/mp4" /></video></div>; }

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PromoVideo />
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
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SiteVideoBackground />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="/work-with-me" element={<WorkWithMe />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
