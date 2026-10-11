import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  { q: "What is SmartHomeX?", a: "SmartHomeX is a developing smart-home project focused on managing compatible connected devices through a mobile application and hardware." },
  { q: "Which hardware does it use?", a: "The current project uses an ESP32 and a four-channel relay setup. Compatibility depends on the hardware and firmware configuration." },
  { q: "Can I control my home from anywhere?", a: "Remote access depends on the deployed cloud services, broker, device firmware and app configuration. Verify the current release before relying on remote control." },
  { q: "Where can I download the Android app?", a: "The public APK release has not been configured yet. A verified release file and download link will be added when ready." },
];

export default function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="section-heading"><span className="eyebrow">GOOD TO KNOW</span><h2>Frequently asked questions</h2><p>Useful details about the SmartHomeX project.</p></div>
      <div className="faq-list">{questions.map((item, i) => <div className="faq-item" key={item.q}><button className="faq-question" onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}>{item.q}<ChevronDown className={active === i ? "chevron active" : "chevron"} size={19} /></button>{active === i && <div className="faq-answer">{item.a}</div>}</div>)}</div>
    </section>
  );
}