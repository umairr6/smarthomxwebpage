import { House, Mail, ArrowUpRight, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand" href="#home"><span className="brand-icon"><House size={22} /></span><span>SmartHome<span className="gold">X</span></span></a>
          <p>Smart living. Simple control.</p>
          <p className="footer-description">A developing smart-home technology project focused on mobile app control and connected living.</p>
        </div>
        <div className="footer-links"><h4>EXPLORE</h4><a href="#features">Features</a><a href="#app-showcase">App Screens</a><a href="#technology">Technology</a><a href="#about">About the Project</a></div>
        <div className="footer-links"><h4>CONTACT & SUPPORT</h4><a href="#support"><MessageCircle size={13} /> Support options</a><a href="https://wa.me/917006751681" target="_blank" rel="noreferrer"><PhoneIcon /> WhatsApp: +91 70067 51681</a><a href="mailto:" onClick={(e) => e.preventDefault()}><Mail size={13} /> Official email not provided</a></div>
        <div className="footer-links"><h4>PROJECT DETAILS</h4><p><MapPin size={13} /> Sopore, Jammu &amp; Kashmir, India</p><p>Founder: Umair Farooq</p><p>Founder &amp; Developer</p><a href="https://umairr6.github.io/smarthomxwebpage/" target="_blank" rel="noreferrer">Project website <ArrowUpRight size={13} /></a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} SmartHomeX. Project in development.</span><a href="#home">Back to top <ArrowUpRight size={13} /></a></div>
    </footer>
  );
}

function PhoneIcon() {
  return <MessageCircle size={13} />;
}
