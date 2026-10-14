import { Download, House, Wifi, Lightbulb, Smartphone, ArrowDownToLine, Apple, Bell } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="section download-section" id="download">
      <div className="download-card">
        <div className="download-copy">
          <span className="eyebrow">YOUR SMART HOME STARTS HERE</span>
          <h2>Meet your next<br /><span className="gold-gradient">connected experience.</span></h2>
          <p>SmartHomeX is being prepared as a complete installed smart-home solution for agreed circuits. We confirm compatible devices, included work and available app features before an order.</p>
          <div className="launch-price-panel"><span className="launch-price-label">PROPOSED LAUNCH PRICE</span><strong>₹3,999</strong><small>Complete installed solution · subject to confirmed scope and site requirements</small><a href="mailto:mailbusiness1420@gmail.com?subject=SmartHomeX%20installation%20quote">Ask for an installation quote</a></div>
          <a
            className="button button-gold download-cta"
            href={`${import.meta.env.BASE_URL}downloads/smarthomex.apk`}
            download="SmartHomeX.apk"
          >
            <span className="download-cta-icon"><Download size={20} /></span>
            <span className="download-cta-copy">
              <strong>Download for Android</strong>
              <small>APK installer · Android</small>
            </span>
            <ArrowDownToLine className="download-arrow" size={21} />
            <span className="download-shine" aria-hidden="true" />
          </a>
          <a
            className="button download-ios-cta"
            href="#ios-availability"
            onClick={(e) => e.preventDefault()}
            aria-disabled="true"
            title="iOS release is not available yet"
          >
            <span className="download-ios-icon"><Apple size={21} /></span>
            <span className="download-cta-copy">
              <strong>Get it for iOS</strong>
              <small>iPhone app · Coming soon</small>
            </span>
            <Bell size={18} className="ios-notify-icon" />
            <span className="download-shine" aria-hidden="true" />
          </a>
          <p className="small-note">The APK is for Android devices. iOS is not available yet. The ₹3,499 price is a proposed launch price, not a final binding quotation; confirm included circuits, hardware, installation, warranty and any additional work before ordering.</p>
        </div>
        <div className="download-symbol"><div className="symbol-ring ring-outer" /><div className="symbol-ring ring-inner" /><div className="symbol-center"><House size={54} strokeWidth={1.3} /></div><div className="symbol-orb orb-one"><Wifi size={21} /></div><div className="symbol-orb orb-two"><Lightbulb size={21} /></div><div className="symbol-orb orb-three"><Smartphone size={21} /></div></div>
      </div>
    </section>
  );
}
