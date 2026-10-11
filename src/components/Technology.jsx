import { Cpu, Wifi, Smartphone, ShieldCheck } from "lucide-react";

const stack = [
  { icon: Cpu, label: "HARDWARE", title: "ESP32", text: "Wi-Fi-enabled microcontroller hardware for connected relay control." },
  { icon: Wifi, label: "COMMUNICATION", title: "MQTT", text: "Message-based communication between compatible devices and the app." },
  { icon: Smartphone, label: "APPLICATION", title: "Flutter", text: "A cross-platform mobile application for connected-home control." },
  { icon: ShieldCheck, label: "BACKEND", title: "Supabase", text: "Backend services for configured authentication and application data." },
];

export default function Technology() {
  return (
    <section className="section technology" id="technology">
      <div className="section-heading"><span className="eyebrow">UNDER THE HOOD</span><h2>Built with purpose.<br /><span className="gold-text">Designed to connect.</span></h2><p>Mobile software and connected hardware brought together in a modular architecture.</p></div>
      <div className="tech-grid">{stack.map(({ icon: Icon, label, title, text }) => <article className="tech-card" key={title}><div className="tech-icon"><Icon size={25} /></div><span className="tech-label">{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="tech-disclaimer">This describes the project's development stack. Capabilities depend on the implemented firmware, deployment and configuration.</p>
    </section>
  );
}