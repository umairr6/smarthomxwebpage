import { useState } from "react";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, CheckCircle2, Handshake, Mail, MessageCircle, Send } from "lucide-react";

const initial = {
  name: "", email: "", phone: "", location: "", collaboration: "", experience: "", availability: "", budget: "", message: "", contact: "WhatsApp"
};

export default function WorkWithMe() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  function handleSubmit(event) {
    event.preventDefault();
    const subject = `SmartHomeX collaboration enquiry — ${form.name}`;
    const body = [
      "NEW WORK WITH ME ENQUIRY", "", `Name: ${form.name}`, `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone || "Not provided"}`, `Location: ${form.location || "Not provided"}`,
      `Interested in: ${form.collaboration}`, `Experience: ${form.experience || "Not provided"}`,
      `Availability: ${form.availability || "Not provided"}`, `Budget / investment range: ${form.budget || "Not provided"}`,
      `Preferred contact: ${form.contact}`, "", `About the idea: ${form.message || "Not provided"}`
    ].join("\n");
    window.location.href = `mailto:mailbusiness1420@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return <main className="work-page">
    <div className="work-topbar"><a href={`${import.meta.env.BASE_URL}`} className="work-back"><ArrowLeft size={16}/> Back to SmartHomeX</a><span className="work-mark">SmartHome<span>X</span></span></div>
    <section className="work-hero">
      <div className="work-eyebrow"><Handshake size={15}/> COLLABORATE WITH ME</div>
      <h1>Have an idea?<br/><span>Let's build something.</span></h1>
      <p>I'm open to meeting people who want to create, grow, and bring useful ideas to life. Tell me a little about yourself and how you'd like to work together.</p>
      <div className="work-benefits"><span><CheckCircle2 size={16}/> Share your idea</span><span><CheckCircle2 size={16}/> Choose your collaboration</span><span><CheckCircle2 size={16}/> Start a conversation</span></div>
    </section>

    <section className="work-form-wrap">
      <div className="work-form-intro"><div className="work-icon"><BriefcaseBusiness size={22}/></div><h2>Work With Me</h2><p>Fill in the form below. Select the options that best describe what you have in mind.</p><div className="work-note"><MessageCircle size={17}/><span>Prefer a quick chat? <a href="https://wa.me/917006751681" target="_blank" rel="noreferrer">Message me on WhatsApp</a>.</span></div></div>
      <form className="work-form" onSubmit={handleSubmit}>
        <div className="work-form-section"><span className="work-step">01</span><div><h3>About you</h3><p>How can I reach you?</p></div></div>
        <div className="work-fields">
          <label>Full name <em>*</em><input name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" required /></label>
          <label>Email address <em>*</em><input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" required /></label>
          <label>Phone / WhatsApp <input type="tel" name="phone" value={form.phone} onChange={update} placeholder="+91 ..." autoComplete="tel" /></label>
          <label>City / Country <input name="location" value={form.location} onChange={update} placeholder="Where are you based?" autoComplete="address-level2" /></label>
        </div>

        <div className="work-form-section"><span className="work-step">02</span><div><h3>How would you like to collaborate?</h3><p>Choose the closest match.</p></div></div>
        <label className="work-full-label">I'm interested in <em>*</em>
          <select name="collaboration" value={form.collaboration} onChange={update} required><option value="">Select a collaboration type</option><option>Business partnership</option><option>Sales, reseller or distribution</option><option>Installation or local service partner</option><option>Software / hardware development</option><option>Marketing, content or social media</option><option>Investment or funding discussion</option><option>Employment, internship or freelance work</option><option>Startup idea or new project</option><option>Other / not sure yet</option></select>
        </label>
        <div className="work-fields">
          <label>Your experience <select name="experience" value={form.experience} onChange={update}><option value="">Choose an option</option><option>Student / just starting</option><option>Beginner</option><option>1–3 years</option><option>3–5 years</option><option>5+ years</option><option>Experienced business owner</option></select></label>
          <label>When can you start? <select name="availability" value={form.availability} onChange={update}><option value="">Choose an option</option><option>Immediately</option><option>Within 2–4 weeks</option><option>Within 1–3 months</option><option>Just exploring for now</option></select></label>
          <label>Budget / investment range <span className="optional">Optional</span><select name="budget" value={form.budget} onChange={update}><option value="">Prefer not to say</option><option>No budget needed / skill collaboration</option><option>Under ₹10,000</option><option>₹10,000–₹50,000</option><option>₹50,000–₹2 lakh</option><option>₹2 lakh+</option><option>Looking for investment</option><option>To be discussed</option></select></label>
          <label>Preferred way to contact you <select name="contact" value={form.contact} onChange={update}><option>WhatsApp</option><option>Email</option><option>Phone call</option></select></label>
        </div>
        <label className="work-full-label">Tell me about your idea <span className="optional">Optional</span><textarea name="message" value={form.message} onChange={update} rows="5" placeholder="What would you like to work on? What skills, experience, or ideas would you bring?" /></label>
        <label className="work-consent"><input type="checkbox" required /> <span>I agree that my details may be used to respond to this collaboration enquiry. <em>*</em></span></label>
        <button className="work-submit" type="submit"><Send size={17}/> Send collaboration enquiry <ArrowRight size={17}/></button>
        {submitted && <p className="work-submit-note">Your email app should open with the enquiry prepared. Please send the email there to complete your submission. If it didn't open, contact mailbusiness1420@gmail.com or use WhatsApp.</p>}
        <p className="work-privacy">Your form opens an email draft addressed to SmartHomeX. It does not send automatically.</p>
      </form>
    </section>
    <footer className="work-footer"><span>SmartHomeX · Let's create something meaningful.</span><a href="mailto:mailbusiness1420@gmail.com"><Mail size={14}/> Contact by email</a></footer>
  </main>;
}
