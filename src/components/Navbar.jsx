import { useState } from "react";
import { House, Menu, X, ArrowRight } from "lucide-react";

const links = [
  ["Features", "#features"],
  ["Technology", "#technology"],
  ["About", "#about"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={close} aria-label="SmartHomeX home">
        <span className="brand-icon"><House size={22} /></span>
        <span>SmartHome<span className="gold">X</span></span>
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
        <a className="nav-cta" href="#download" onClick={close}>Get the App <ArrowRight size={16} /></a>
      </nav>
    </header>
  );
}