import { motion } from "framer-motion";
import { House, MapPin, Code2, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section className="section about" id="about">
      <motion.div className="about-mark" initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .45 }}>
        <House size={34} /><span>X</span>
      </motion.div>
      <span className="eyebrow">ABOUT SMARTHOMEX</span>
      <h2>Smart living, <span className="gold-text">simple control.</span></h2>
      <p className="about-intro">
        SmartHomeX is a developing smart-home technology project focused on smart-home automation,
        mobile app control and connected-home technology.
      </p>

      <div className="founder-card">
        <div className="founder-avatar">UF</div>
        <div className="founder-info">
          <span className="eyebrow">FOUNDER</span>
          <h3>Umair Farooq</h3>
          <p className="founder-title"><Code2 size={15} /> Founder &amp; Developer</p>
          <p>Working on the SmartHomeX vision: bringing mobile software and connected-home technology together in a practical experience.</p>
        </div>
      </div>

      <div className="company-details-grid">
        <div className="company-detail">
          <span className="company-detail-icon"><MapPin size={19} /></span>
          <div><span className="company-detail-label">LOCATION</span><b>Sopore, Jammu &amp; Kashmir, India</b></div>
        </div>
        <div className="company-detail">
          <span className="company-detail-icon"><House size={19} /></span>
          <div><span className="company-detail-label">ORGANISATION</span><b>SmartHomeX</b><small>Independent project in development</small></div>
        </div>
      </div>

      <a className="button button-outline company-website-link" href="https://umairr6.github.io/smarthomxwebpage/" target="_blank" rel="noreferrer">
        Visit SmartHomeX Website <ExternalLink size={16} />
      </a>
      <p className="small-note company-note">SmartHomeX is presented here as a project in development. Company registration details have not been provided.</p>
    </section>
  );
}
