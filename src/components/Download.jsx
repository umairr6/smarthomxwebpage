import { Download, House, Wifi, Lightbulb, Smartphone, ArrowDownToLine, Apple, Bell, Coins } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="section download-section" id="download">
      <div className="download-card">
        <div className="download-copy">
          <span className="eyebrow">YOUR SMART HOME STARTS HERE</span>
          <h2>Keep your switches.<br /><span className="gold-gradient">Upgrade your control.</span></h2>
          <p>SmartHomeX is designed to add smart control to compatible existing switchboard installations. Keep using your familiar physical switches while adding app-based control, subject to the supported setup.</p>
          <div className="money-animation" aria-label="Animated coins representing smart value"><span className="coin coin-one">₹</span><span className="coin coin-two">₹</span><span className="coin coin-three">₹</span><span className="coin-stack"><Coins size={43} strokeWidth={1.5} /></span><span className="money-caption">A smarter upgrade for your home</span></div>
          <a className="button button-outline enquiry-cta" href="https://wa.me/917006751681?text=Hi%20SmartHomeX%2C%20I%27d%20like%20to%20know%20about%20adding%20smart%20control%20to%20my%20existing%20switchboard.">Ask About Compatibility</a>
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
          <p className="small-note">SmartHomeX is intended to work alongside compatible existing physical switches, not replace your switchboard. Compatibility, installation scope and availability must be confirmed before arranging service. The APK is for Android; an iOS app is not currently available.</p>
        </div>
        <div className="download-symbol"><div className="symbol-ring ring-outer" /><div className="symbol-ring ring-inner" /><div className="symbol-center"><House size={54} strokeWidth={1.3} /></div><div className="symbol-orb orb-one"><Wifi size={21} /></div><div className="symbol-orb orb-two"><Lightbulb size={21} /></div><div className="symbol-orb orb-three"><Smartphone size={21} /></div></div>
      </div>
    </section>
  );
}
