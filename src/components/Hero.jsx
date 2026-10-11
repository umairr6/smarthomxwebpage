import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Wifi, House, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero hero-video-background" id="home">
      <video
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        poster="/images/app/04-home-dashboard.jpg"
      >
        <source src="/videos/smarthomex_intro.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
      <div className="hero-glow" />
      <div className="hero-content">
        <motion.div className="status-pill" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <span className="status-dot" /> A NEW WAY TO EXPERIENCE HOME
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>
          Your home.<br /><span className="gold-gradient">Your control.</span>
        </motion.h1>
        <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}>
          Meet SmartHomeX — a smart-home technology project exploring simpler ways to manage connected devices and everyday routines.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .3 }}>
          <a className="button button-gold" href="#download">Explore the App <ArrowRight size={18} /></a>
          <a className="button button-outline" href="#features">Discover Features</a>
        </motion.div>
        <div className="hero-note"><Zap size={16} /> Built around connected-home technology</div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .2 }}>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="home-illustration">
          <div className="window window-one" /><div className="window window-two" /><div className="ceiling-light" />
          <div className="sofa"><div className="sofa-back" /><div className="sofa-seat" /><div className="sofa-arm" /></div>
          <div className="side-table"><div className="plant"><i /><i /><i /></div><div className="table-top" /></div>
          <div className="floor-line" />
          <div className="floating-chip chip-light"><Lightbulb size={19} /><span><b>Lighting</b><small>Smart control concept</small></span></div>
          <div className="floating-chip chip-wifi"><Wifi size={20} /><span><b>Connected</b><small>Device technology</small></span></div>
        </div>
        <div className="visual-caption"><span className="caption-icon"><House size={17} /></span><span><b>Smarter by design</b><small>Technology that feels natural.</small></span></div>
      </motion.div>
      <a className="scroll-cue" href="#features">SCROLL TO EXPLORE ↓</a>
    </section>
  );
}