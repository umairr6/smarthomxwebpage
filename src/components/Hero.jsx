import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Wifi, House, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="hero-content">
        <motion.div className="status-pill" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <span className="status-dot" /> A NEW WAY TO EXPERIENCE HOME
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>
          Your home.<br /><span className="gold-gradient">Your control.</span>
        </motion.h1>
        <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}>
          Meet SmartHomeX — a simpler way to bring supported home devices into one mobile control experience. Installation options and compatible circuits are confirmed for your home.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .3 }}>
          <a className="button button-gold" href="#download">Explore the App <ArrowRight size={18} /></a>
          <a className="button button-outline" href="#features">Discover Features</a>
        </motion.div>
        <div className="hero-note"><Zap size={16} /> Smart control, planned around your home</div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .2 }}>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="home-illustration">
          <div className="window window-one" /><div className="window window-two" /><div className="ceiling-light" />
          <div className="sofa"><div className="sofa-back" /><div className="sofa-seat" /><div className="sofa-arm" /></div>
          <div className="side-table"><div className="plant"><i /><i /><i /></div><div className="table-top" /></div>
          <div className="floor-line" />
          <div className="floating-chip chip-light"><Lightbulb size={19} /><span><b>Lighting</b><small>Lighting control</small></span></div>
          <div className="floating-chip chip-wifi"><Wifi size={20} /><span><b>Connected</b><small>Connected home</small></span></div>
        </div>
        <div className="visual-caption"><span className="caption-icon"><House size={17} /></span><span><b>Smarter by design</b><small>Technology that feels natural.</small></span></div>
      </motion.div>
      <a className="scroll-cue" href="#features">SCROLL TO EXPLORE ↓</a>
    </section>
  );
}