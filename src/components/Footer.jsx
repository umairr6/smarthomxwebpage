import { House, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand"><a className="brand" href="#home"><span className="brand-icon"><House size={22} /></span><span>SmartHome<span className="gold">X</span></span></a><p>Intelligence. Comfort. Control.</p><p className="footer-description">Exploring a more connected way to experience home.</p></div>
        <div className="footer-links"><h4>EXPLORE</h4><a href="#features">Features</a><a href="#technology">Technology</a><a href="#about">About</a><a href="#faq">FAQs</a></div>
        <div className="footer-links"><h4>RESOURCES</h4><a href="#download">Android App</a><a href="#technology">How It Works</a><a href="mailto:REPLACE_WITH_SUPPORT_EMAIL"><Mail size={13} /> Contact Support</a></div>
        <div className="footer-links"><h4>PROJECT</h4><p>Independent smart-home development project.</p><p className="small-note">Replace the support email and add verified company details before publishing.</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} SmartHomeX. All rights reserved.</span><a href="#home">Back to top <ArrowUpRight size={13} /></a></div>
    </footer>
  );
}