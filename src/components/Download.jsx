import { Download, House, Wifi, Lightbulb, Smartphone } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="section download-section" id="download">
      <div className="download-card">
        <div className="download-copy">
          <span className="eyebrow">YOUR SMART HOME STARTS HERE</span>
          <h2>Meet your next<br /><span className="gold-gradient">connected experience.</span></h2>
          <p>The SmartHomeX Android release is being prepared. A verified app package and installation instructions will be published here when ready.</p>
          <a className="button button-gold download-disabled" href="#download" aria-disabled="true" onClick={(e) => e.preventDefault()}><Download size={19} /> APK Coming Soon</a>
          <p className="small-note">No public APK has been configured yet. Do not replace this with an unverified download link.</p>
        </div>
        <div className="download-symbol"><div className="symbol-ring ring-outer" /><div className="symbol-ring ring-inner" /><div className="symbol-center"><House size={54} strokeWidth={1.3} /></div><div className="symbol-orb orb-one"><Wifi size={21} /></div><div className="symbol-orb orb-two"><Lightbulb size={21} /></div><div className="symbol-orb orb-three"><Smartphone size={21} /></div></div>
      </div>
    </section>
  );
}