import { House } from "lucide-react";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-mark"><House size={34} /><span>X</span></div>
      <span className="eyebrow">OUR VISION</span>
      <h2>A more thoughtful way<br />to experience <span className="gold-text">home.</span></h2>
      <p>SmartHomeX is a developing smart-home technology project focused on bringing connected devices, mobile control and practical automation together in one accessible experience.</p>
      <div className="about-values"><div><b>01</b><span>Practical innovation</span></div><div><b>02</b><span>Simpler interactions</span></div><div><b>03</b><span>Connected living</span></div></div>
      <p className="small-note">Add verified company registration, founder, address and public contact details here before publishing.</p>
    </section>
  );
}