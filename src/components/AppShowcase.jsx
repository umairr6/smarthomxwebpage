import { motion } from "framer-motion";
import { House, Lightbulb, Clock3, ShieldCheck, Layers3 } from "lucide-react";

export default function AppShowcase() {
  return (
    <section className="section showcase">
      <div className="showcase-grid">
        <motion.div className="phone-scene" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-top"><span>SmartHomeX</span><span className="avatar">X</span></div>
            <div className="phone-greeting">Your space,</div><h3>your rules.</h3>
            <div className="phone-room">
              <div className="room-title"><House size={19} /><b>Living Room</b></div>
              <span className="room-label">ILLUSTRATIVE DEVICE CONTROL</span>
              {[["Light 01", true], ["Light 02", false]].map(([label, on]) => <div className="room-light" key={label}><span className="light-circle"><Lightbulb size={20} /></span><span><b>{label}</b><small>Relay channel</small></span><span className={on ? "switch-demo" : "switch-demo switch-off"} /></div>)}
            </div>
            <div className="phone-bottom"><House size={18} /><Layers3 size={18} /><Clock3 size={18} /><ShieldCheck size={18} /></div>
          </div>
          <div className="phone-decoration decoration-one" /><div className="phone-decoration decoration-two" />
        </motion.div>
        <div className="showcase-copy">
          <span className="eyebrow">DESIGNED FOR EVERYDAY LIVING</span>
          <h2>Control made<br /><span className="gold-text">beautifully simple.</span></h2>
          <p>SmartHomeX brings connected-home controls into one considered mobile experience. The interface aims to make device management easier without unnecessary complexity.</p>
          <ul className="check-list"><li><span>✓</span>A focused device-control interface</li><li><span>✓</span>Designed for multi-channel relay control</li><li><span>✓</span>A foundation for future smart-home features</li></ul>
          <a className="text-link" href="#download">Discover SmartHomeX →</a>
          <p className="small-note">Illustrative app preview, not a live connection. Actual screens and available features may vary by release.</p>
        </div>
      </div>
    </section>
  );
}