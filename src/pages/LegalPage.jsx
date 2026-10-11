import { Link } from "react-router-dom";
import { House, ArrowLeft } from "lucide-react";

export default function LegalPage({ type }) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Use";
  const updated = "11 October 2026";

  return (
    <main className="legal-page">
      <div className="legal-topbar">
        <Link className="brand" to="/"><span className="brand-icon"><House size={22} /></span><span>SmartHome<span className="gold">X</span></span></Link>
        <Link className="legal-back" to="/"><ArrowLeft size={16} /> Back to website</Link>
      </div>
      <article className="legal-document">
        <span className="eyebrow">SMARTHOMEX · LEGAL</span>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: {updated}</p>
        {isPrivacy ? <PrivacyContent /> : <TermsContent />}
        <p className="legal-disclaimer">This page is a starter template for a project in development, not legal advice. Review it against the actual app, services, data flows and applicable law before publishing or distributing the app.</p>
        <Link className="button button-outline" to="/">Return to SmartHomeX <ArrowLeft size={16} /></Link>
      </article>
    </main>
  );
}

function PrivacyContent() {
  return (
    <>
      <p>SmartHomeX is a smart-home technology project in development. This policy explains, at a high level, how information may be handled when you visit this website or use a SmartHomeX app release. The final policy must be updated to match the services and data collection actually enabled in each release.</p>
      <h2>1. Information and data</h2>
      <p>Depending on the features you use and how the project is deployed, information may include account details you submit, app preferences, room and device labels, device status, and technical diagnostics needed to operate or troubleshoot the service. Do not assume that every category is collected; the project owner must confirm actual data flows before publication.</p>
      <h2>2. How information may be used</h2>
      <p>Information may be used to provide account access, display configured homes and devices, operate supported smart-home features, maintain security, diagnose faults, and respond to support requests. Information should not be used for unrelated purposes without appropriate notice and, where required, consent.</p>
      <h2>3. Connected devices and third-party services</h2>
      <p>SmartHomeX is being developed around connected hardware and may use services such as a backend/authentication provider and an MQTT broker. The final policy must name the actual providers in use, explain what data each receives, and link to their current privacy policies. Device traffic may pass through networks or servers depending on the deployment.</p>
      <h2>4. Permissions and local network</h2>
      <p>Features may require network access to sign in, communicate with configured services, or interact with supported devices. Grant only permissions needed for features you choose to use. Do not connect untrusted hardware or expose device-control services directly to the public internet without suitable security controls.</p>
      <h2>5. Sharing and disclosure</h2>
      <p>Personal information should not be sold. It may be processed by service providers necessary to operate enabled features, or disclosed when required by law or to address security abuse. The project owner must verify these practices and add the names of relevant providers before this policy is treated as final.</p>
      <h2>6. Storage, retention and security</h2>
      <p>Reasonable technical and organisational safeguards should be used, but no system can be guaranteed completely secure. Retention periods, hosting regions, backup practices and deletion procedures must be documented for the actual production setup. Never place passwords, private API keys, signing keystores, broker credentials or service-role secrets in public website code or a public repository.</p>
      <h2>7. Your choices and requests</h2>
      <p>You should be able to request help with access, correction or deletion of personal data where applicable law provides those rights. A verified privacy contact address has not yet been supplied. Add a monitored official contact address and a practical process for handling requests before publishing this policy as final.</p>
      <h2>8. Children</h2>
      <p>SmartHomeX is not being presented as a service specifically designed for children. The project owner must determine any age-related requirements that apply to the actual audience and release.</p>
      <h2>9. Changes to this policy</h2>
      <p>This policy may be revised as SmartHomeX features and infrastructure change. Material changes should be reflected here with an updated revision date.</p>
      <h2>10. Contact</h2>
      <p>Project: SmartHomeX · Location: Sopore, Jammu &amp; Kashmir, India. Founder &amp; Developer: Umair Farooq. Phone/WhatsApp: +91 70067 51681. Official privacy email: not yet provided.</p>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <p>These terms apply to this SmartHomeX website and any development or test app made available by the project. SmartHomeX is currently described as a project in development, not as a registered company.</p>
      <h2>1. Development status</h2>
      <p>Features, interfaces, integrations and downloads may change, be incomplete, or be unavailable. Website screenshots are illustrative of the app screens at the time they were captured and do not guarantee a particular live device state or service level.</p>
      <h2>2. Safe use of smart-home controls</h2>
      <p>Use SmartHomeX only with devices you own or are authorised to control. Relay-connected equipment can involve mains electricity and physical safety risks. Installation and wiring should be completed by a qualified person, with appropriate isolation, enclosure, ratings and protection. Do not rely on the app as the sole safety mechanism for critical equipment.</p>
      <h2>3. Accounts and credentials</h2>
      <p>Keep account credentials and app-lock PINs confidential. Do not share access with people who are not authorised to control your devices. Notify the project contact if you suspect unauthorised access. Never send passwords, PINs or secret keys through public support channels.</p>
      <h2>4. Availability and remote access</h2>
      <p>Connectivity and remote operation depend on internet access, device firmware, broker/backend configuration, power and third-party services. Continuous availability, uninterrupted operation and error-free device status are not guaranteed.</p>
      <h2>5. Downloads and updates</h2>
      <p>Install only release packages published through a channel that you can verify as official. At the time this page was prepared, a public APK download has not been confirmed. Do not install an unofficial package merely because it uses the SmartHomeX name.</p>
      <h2>6. Acceptable use</h2>
      <p>Do not attempt to bypass authentication, interfere with service availability, access another person's devices or data, reverse engineer services unlawfully, or use the project to violate applicable law or another person's rights.</p>
      <h2>7. Third-party services</h2>
      <p>Some features may rely on third-party infrastructure or software. Their availability and terms are governed by the relevant providers. The project owner should list the actual integrations and associated terms before a public production release.</p>
      <h2>8. Disclaimer and liability</h2>
      <p>To the extent permitted by applicable law, the project and development builds are provided on an “as available” basis without a promise that they will suit every purpose. Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded. Obtain appropriate legal review before using this template for a commercial release.</p>
      <h2>9. Changes and contact</h2>
      <p>These terms may change as the project develops. Contact: SmartHomeX, Sopore, Jammu &amp; Kashmir, India · Founder &amp; Developer: Umair Farooq · Phone/WhatsApp: +91 70067 51681. Official legal contact email: not yet provided.</p>
    </>
  );
}
