import { PlayCircle } from "lucide-react";

export default function PromoVideo() {
  return (
    <section className="section promo-video-section" id="promo-video">
      <div className="promo-video-heading">
        <span className="eyebrow">DISCOVER SMART HOMEX</span>
        <h2>See a <span className="gold-text">smarter home</span> in action.</h2>
        <p>Watch the SmartHomeX introduction and explore a more convenient way to control supported home devices.</p>
      </div>
      <div className="promo-video-frame">
        <video controls playsInline preload="metadata" poster={`${import.meta.env.BASE_URL}images/app/04-home-dashboard.jpg`} aria-label="SmartHomeX promotional video">
          <source src={`${import.meta.env.BASE_URL}videos/smarthomex_promo.mp4`} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <div className="promo-video-caption"><PlayCircle size={17} /> SMART HOMEX • PRODUCT INTRODUCTION</div>
      </div>
    </section>
  );
}
