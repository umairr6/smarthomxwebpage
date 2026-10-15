import { motion } from "framer-motion";
import { Lightbulb, Smartphone, Clock3, House, ArrowRight } from "lucide-react";
const features=[
 {icon:Lightbulb,title:"Everyday Device Control",text:"Control compatible lights and other supported electrical circuits from the SmartHomeX app."},
 {icon:Smartphone,title:"Control from Your Phone",text:"A mobile experience designed to bring supported rooms and devices together in one place."},
 {icon:House,title:"Keep Your Existing Switches",text:"Add smart control alongside compatible physical switches instead of replacing your familiar switchboard."},
 {icon:Clock3,title:"Convenience That Can Grow",text:"Explore the controls available in the current app release. Timers and automation depend on the installed version."}
];
export default function Features(){return <section className="section features" id="features"><div className="section-heading"><span className="eyebrow">THE SMARTHOMEX EXPERIENCE</span><h2>Make everyday living <span className="gold-text">feel simpler.</span></h2><p>Smart-home control planned around your space, supported devices and agreed installation requirements.</p></div><div className="feature-grid">{features.map(({icon:Icon,title,text},i)=><motion.article className="feature-card" key={title} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.45,delay:i*.08}}><div className="feature-icon"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p><a href="#download" aria-label={`Enquire about ${title}`}><ArrowRight size={19}/></a></motion.article>)}</div></section>; }
