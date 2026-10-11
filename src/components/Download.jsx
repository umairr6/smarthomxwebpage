import { Download, House, Wifi, Lightbulb, Smartphone, ArrowDownToLine, Apple, Bell } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="section download-section" id="download">
      <div className="download-card">
        <div className="download-copy">
          <span className="eyebrow">YOUR SMART HOME STARTS HERE</span>
          <h2>Meet your next<br /><span className="gold-gradient">connected experience.</span></h2>
          <p>Control your connected home from one simple app. Download SmartHomeX for Android and get started.</p>
          <a
            className="button button-gold download-cta"
            href="/downloads/smarthomex.apk"
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
          <p className="small-note">Android APK download is for Android devices. The iOS version is not available yet; an iPhone app requires an iOS-compatible build and distribution through Apple's supported channels.</p>
        </div>
        <div className="download-symbol"><div className="symbol-ring ring-outer" /><div className="symbol-ring ring-inner" /><div className="symbol-center"><House size={54} strokeWidth={1.3} /></div><div className="symbol-orb orb-one"><Wifi size={21} /></div><div className="symbol-orb orb-two"><Lightbulb size={21} /></div><div className="symbol-orb orb-three"><Smartphone size={21} /></div></div>
      </div>
    </section>
  );
}
