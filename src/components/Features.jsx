import { motion } from "framer-motion";
import { Lightbulb, Smartphone, Clock3, Wifi, ArrowRight } from "lucide-react";

const features = [
  { icon: Lightbulb, title: "Smart Lighting", text: "Manage compatible lights and relay channels through a focused interface." },
  { icon: Smartphone, title: "Mobile Control", text: "A dedicated mobile experience designed around connected devices." },
  { icon: Clock3, title: "Timers & Schedules", text: "Explore planned routines and automation features as they become available." },
  { icon: Wifi, title: "Connected Technology", text: "Built around ESP32 hardware and MQTT device communication." },
];

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="section-heading">
        <span className="eyebrow">THE EXPERIENCE</span>
        <h2>Technology that works <span className="gold-text">for you.</span></h2>
        <p>A focused smart-home experience designed to make connected living feel simpler.</p>
      </div>
      <div className="feature-grid">
        {features.map(({ icon: Icon, title, text }, i) => (
          <motion.article className="feature-card" key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .45, delay: i * .08 }}>
            <div className="feature-icon"><Icon size={24} /></div><h3>{title}</h3><p>{text}</p><a href="#technology" aria-label={`Learn about ${title}`}><ArrowRight size={19} /></a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}