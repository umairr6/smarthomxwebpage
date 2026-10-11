import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, LifeBuoy, ExternalLink } from "lucide-react";

const phoneDigits = "917006751681";
const whatsappUrl = `https://wa.me/${phoneDigits}`;

export default function Support() {
  return (
    <section className="section support" id="support">
      <div className="section-heading">
        <span className="eyebrow">WE'RE HERE TO HELP</span>
        <h2>SmartHomeX <span className="gold-text">support.</span></h2>
        <p>Questions about the project or app? Use the contact option below. Official email addresses will be added once confirmed.</p>
      </div>

      <div className="support-grid">
        <motion.article className="support-card support-card-primary" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4 }}>
          <div className="support-icon"><MessageCircle size={25} /></div>
          <span className="support-label">WHATSAPP CONTACT</span>
          <h3>Talk to SmartHomeX</h3>
          <p>Contact the project using the provided phone number. WhatsApp availability depends on the number being registered with WhatsApp.</p>
          <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">Message on WhatsApp <ExternalLink size={16} /></a>
          <span className="support-phone"><Phone size={14} /> +91 70067 51681</span>
        </motion.article>

        <motion.article className="support-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: .08 }}>
          <div className="support-icon"><Mail size={25} /></div>
          <span className="support-label">EMAIL SUPPORT</span>
          <h3>Official email coming soon</h3>
          <p>No official business or support email has been supplied yet. We have left these unpublished rather than displaying an invented address.</p>
          <div className="support-pending"><LifeBuoy size={16} /> Email address not yet provided</div>
        </motion.article>
      </div>
      <p className="support-footnote">Please do not send passwords, app PINs, or other sensitive account details through public contact channels.</p>
    </section>
  );
}
