import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Smartphone } from "lucide-react";

const screenshots = [
  { src: `${import.meta.env.BASE_URL}/images/app/01-splash.jpg`, title: "A premium first impression", label: "SPLASH SCREEN", description: "The SmartHomeX identity, with the black-and-gold visual language used throughout the app." },
  { src: `${import.meta.env.BASE_URL}/images/app/02-app-lock.jpg`, title: "A personal layer of security", label: "APP LOCK", description: "A dedicated four-digit PIN screen for the app-lock experience." },
  { src: `${import.meta.env.BASE_URL}/images/app/03-sign-in.jpg`, title: "Your account, in one place", label: "SIGN IN", description: "A sign-in interface with account creation and password recovery entry points." },
  { src: `${import.meta.env.BASE_URL}/images/app/04-home-dashboard.jpg`, title: "A view of your smart home", label: "HOME DASHBOARD", description: "Review homes, rooms, and the device connection overview from the dashboard." },
  { src: `${import.meta.env.BASE_URL}/images/app/05-home-rooms.jpg`, title: "Organise spaces your way", label: "ROOMS", description: "A room list with options to add rooms and pair compatible ESP32 devices." },
  { src: `${import.meta.env.BASE_URL}/images/app/06-device-controls.jpg`, title: "Device controls and automation", label: "DEVICE CONTROLS", description: "A device screen showing relay controls alongside timers and schedules." }
];

export default function AppShowcase() {
  const [active, setActive] = useState(3);
  const current = screenshots[active];
  const change = (direction) => setActive((index) => (index + direction + screenshots.length) % screenshots.length);
  return (
    <section className="section showcase" id="app-showcase">
      <div className="showcase-heading">
        <span className="eyebrow">THE REAL APP EXPERIENCE</span>
        <h2>Meet the app behind <span className="gold-text">smarter living.</span></h2>
        <p>Explore actual SmartHomeX screens, from secure sign-in to room and device controls.</p>
      </div>
      <div className="real-showcase">
        <motion.div className="real-phone-wrap" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}>
          <div className="real-phone-glow" />
          <div className="real-phone">
            <div className="real-phone-speaker" />
            <AnimatePresence mode="wait">
              <motion.img key={current.src} src={current.src} alt={`SmartHomeX ${current.label.toLowerCase()} screenshot`} className="real-phone-image" initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.985 }} transition={{ duration: 0.22 }} />
            </AnimatePresence>
          </div>
          <div className="real-phone-caption"><Smartphone size={15} /> ACTUAL SMART HOMEX APP SCREEN</div>
        </motion.div>
        <div className="real-showcase-copy">
          <span className="real-screen-count">SCREEN {String(active + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}</span>
          <AnimatePresence mode="wait">
            <motion.div key={current.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
              <span className="eyebrow">{current.label}</span><h3>{current.title}</h3><p>{current.description}</p>
            </motion.div>
          </AnimatePresence>
          <div className="showcase-controls">
            <button className="showcase-arrow" onClick={() => change(-1)} aria-label="Previous app screenshot"><ArrowLeft size={19} /></button>
            <button className="showcase-arrow" onClick={() => change(1)} aria-label="Next app screenshot"><ArrowRight size={19} /></button>
          </div>
          <div className="showcase-thumbnails" aria-label="Choose app screenshot">
            {screenshots.map((screen, index) => <button key={screen.src} className={active === index ? "showcase-thumb active" : "showcase-thumb"} onClick={() => setActive(index)} aria-label={`Show ${screen.label}`} aria-pressed={active === index}><img src={screen.src} alt="" /></button>)}
          </div>
          <p className="small-note">Screenshots supplied for the SmartHomeX website. Device status and features shown reflect the captured moment and may change in use.</p>
        </div>
      </div>
    </section>
  );
}
