import { useState, useEffect, useRef } from "react";
import "./App.css";

// ─────────────────────────────────────────────────────────────
// IMAGE IMPORTS  ← just drop your files in src/assets/
// ─────────────────────────────────────────────────────────────
import logo   from "./assets/logo.png";   // circular SF logo
import gym1   from "./assets/gym1.png";   // Warzone collage
import gym2   from "./assets/gym2.png";   // Smith / rack
import gym3   from "./assets/gym3.png";   // Interior collage
import gym4   from "./assets/gym4.png";   // Group photo
import gym5   from "./assets/gym5.png";   // Dumbbell rack
import gym6   from "./assets/gym6.png";   // Storefront / opening

// ── NAVBAR ───────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = [
    { label: "Home",     id: "home" },
    { label: "About",    id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery",  id: "gallery" },
    { label: "Reviews",  id: "reviews" },
    { label: "Contact",  id: "contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => scrollTo("home")}>
        <img src={logo} alt="Stoic Fitness Logo" className="nav-logo-img" />
        <div className="logo-text">
          <span className="logo-main">STOIC</span>
          <span className="logo-sub">FITNESS</span>
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <li key={l.id}>
            <button onClick={() => scrollTo(l.id)}>{l.label}</button>
          </li>
        ))}
      </ul>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "x" : ""}></span>
        <span className={menuOpen ? "x" : ""}></span>
        <span className={menuOpen ? "x" : ""}></span>
      </button>
    </nav>
  );
}

// ── HERO ─────────────────────────────────────────────────────
function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
        {[...Array(18)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${5 + (i * 5.5) % 95}%`,
            animationDelay: `${(i * 0.3) % 4}s`,
            animationDuration: `${4 + (i * 0.4) % 4}s`,
          }} />
        ))}
      </div>

      <div className={`hero-content ${visible ? "visible" : ""}`}>
        <div className="hero-badge">⚡ THARAMANI'S PREMIER FITNESS GYM</div>
        <h1 className="hero-title">
          <span className="line1">FORGE YOUR</span>
          <span className="line2">STRONGEST</span>
          <span className="line3">SELF</span>
        </h1>
        <p className="hero-sub">
          Professional trainers · Premium equipment · Results-driven environment
        </p>
        <div className="hero-cta">
          <a href="tel:+919150105196" className="btn-primary">📞 Book a Free Tour</a>
          <button className="btn-outline"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
            Explore Services
          </button>
        </div>
        <div className="hero-stats">
          {[["500+","Members"],["3+","Expert Trainers"],["100%","Dedication"],["7","Days Open"]].map(([n,l])=>(
            <div className="stat" key={l}>
              <span className="stat-num">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-dot" />
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────
function About() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className={`about-inner ${vis ? "visible" : ""}`}>
        <div className="about-text">
          <div className="section-label">ABOUT US</div>
          <h2>Where <span className="accent">Discipline</span> Meets <span className="accent">Transformation</span></h2>
          <p>
            Stoic Fitness in Tharamani, Chennai is not just a gym — it's a <strong>warzone of self-improvement</strong>.
            With state-of-the-art equipment, experienced trainers, and a community that pushes you forward,
            we believe every rep is a step toward the best version of you.
          </p>
          <p>
            Led by the legendary <strong>Kannan Master</strong>, our team provides personalized attention,
            corrects form, and keeps you motivated through every session.
          </p>
          <div className="about-highlights">
            {["Premium Equipment","Expert Guidance","Spacious & Clean","Welcoming Community"].map((h)=>(
              <div className="highlight" key={h}>
                <span className="check">✓</span> {h}
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual">
          <div className="av-card">
            <div className="av-icon">🏋️</div>
            <div className="av-label">BELIEVE IN YOURSELF</div>
            <div className="av-sub">Every session counts</div>
          </div>
          <div className="av-card accent-card">
            <div className="av-icon">🔥</div>
            <div className="av-label">WELCOME TO WARZONE</div>
            <div className="av-sub">Push your limits daily</div>
          </div>
          <div className="av-addr">
            <span>📍</span>
            <div>
              <strong>2nd Floor, No. 64, Sannathi Street</strong><br />
              100 Feet Road, Tharamani, Chennai – 600113
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SERVICES ──────────────────────────────────────────────────
const services = [
  { icon:"🏆", title:"Personal Training",    desc:"One-on-one sessions tailored to your body, goals, and pace with certified trainers." },
  { icon:"🏋️", title:"Weight Training",      desc:"Full range of free weights and machines for muscle building, strength, and endurance." },
  { icon:"🔥", title:"Daily Fitness Classes", desc:"Group classes every day to keep you consistent, motivated, and energized." },
  { icon:"⏱️", title:"Time Management",      desc:"Structured workout plans that maximize results within your available schedule." },
  { icon:"🥗", title:"Diet & Nutrition",     desc:"Expert dietary guidance aligned with your fitness goals — gain, lose, or maintain." },
  { icon:"💡", title:"Tips & Tricks",        desc:"Learn the science behind fitness — form corrections, techniques, and pro secrets." },
];

function Services() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="services" ref={ref}>
      <div className="section-header">
        <div className="section-label">WHAT WE OFFER</div>
        <h2>Our <span className="accent">Services</span></h2>
        <p>Everything you need for a complete fitness transformation — under one roof.</p>
      </div>
      <div className={`services-grid ${vis ? "visible" : ""}`}>
        {services.map((s, i) => (
          <div className="service-card" key={s.title} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="card-line" />
          </div>
        ))}
      </div>
    </section>
  );
}

// ── GALLERY ───────────────────────────────────────────────────
const galleryItems = [
  { label:"Warzone Hall",      img: gym1, desc:"Where transformations happen daily" },
  { label:"Functional Area",   img: gym2, desc:"Smith machine, cables & power racks" },
  { label:"Training Floor",    img: gym3, desc:"Premium cardio & strength machines" },
  { label:"Team & Community",  img: gym4, desc:"A family that trains together" },
  { label:"Free Weights Zone", img: gym5, desc:"Full dumbbell rack up to heavy loads" },
  { label:"Grand Opening",     img: gym6, desc:"Stoic Fitness — built for champions" },
];

function Gallery() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="section-header">
        <div className="section-label">INSIDE STOIC</div>
        <h2>Our <span className="accent">Facility</span></h2>
        <p>Spacious, clean, and loaded with premium equipment for every workout type.</p>
      </div>
      <div className={`gallery-grid ${vis ? "visible" : ""}`}>
        {galleryItems.map((g, i) => (
          <div className="gallery-card" key={g.label} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="gallery-visual">
              <img src={g.img} alt={g.label} className="gallery-img" />
              <div className="gallery-overlay"><span>{g.desc}</span></div>
            </div>
            <div className="gallery-info"><h4>{g.label}</h4></div>
          </div>
        ))}
      </div>
      <p className="gallery-note">
        📸 Follow us on Instagram —{" "}
        <a href="https://www.instagram.com/stoicfitness.taramani" target="_blank" rel="noreferrer">
          @stoicfitness.taramani
        </a>
      </p>
    </section>
  );
}

// ── REVIEWS ───────────────────────────────────────────────────
const reviews = [
  {
    name:"Vivek Jambhulkar", rating:5, time:"4 months ago", avatar:"V",
    review:"The atmosphere in this gym is amazing, equipped with all the facilities one may need for a complete workout. It's spacious, allowing for comfortable movement. The trainer is very supportive, knowledgeable, and always motivates me to push my limits safely. The place is always clean, well-maintained, and organized. Highly recommend it!",
  },
  {
    name:"Paras Sharma", rating:5, time:"2 months ago", avatar:"P",
    review:"One of the best gyms nearby. Equipped with almost all needed machines for both weight gain and weight loss. The guidance provided by Kanan master is top notch. He stands by the members and helps with workout and form. Every gym member is very friendly and welcoming. Thank you Stoic Fitness! 💙",
  },
  {
    name:"Sonu Kumar", rating:5, time:"3 months ago", avatar:"S",
    review:"Well experienced Kannan master. Equipment and atmosphere are excellent. A great place to work out with proper guidance and a motivated community around you.",
  },
];

function Reviews() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="reviews" className="reviews" ref={ref}>
      <div className="section-header">
        <div className="section-label">GOOGLE REVIEWS</div>
        <h2>What Members <span className="accent">Say</span></h2>
        <div className="overall-rating">
          <span className="big-star">★★★★★</span>
          <span className="rating-text">5.0 / 5.0 — Google Verified</span>
        </div>
      </div>
      <div className={`reviews-grid ${vis ? "visible" : ""}`}>
        {reviews.map((r, i) => (
          <div className="review-card" key={r.name} style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="review-top">
              <div className="reviewer-avatar">{r.avatar}</div>
              <div className="reviewer-info">
                <div className="reviewer-name">{r.name}</div>
                <div className="reviewer-time">{r.time}</div>
              </div>
              <div className="google-icon">
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.3 0 6.2 1.2 8.5 3.1l6.3-6.3C34.9 2.9 29.8 1 24 1 14.8 1 6.9 6.3 3.1 14l7.4 5.7C12.3 13.5 17.7 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-16.9z"/>
                  <path fill="#FBBC05" d="M10.5 28.3A14.6 14.6 0 0 1 9.5 24c0-1.5.2-2.9.6-4.3L2.7 14C1 17.2 0 20.5 0 24s1 6.8 2.7 10l7.8-5.7z"/>
                  <path fill="#34A853" d="M24 47c5.8 0 10.7-1.9 14.3-5.1l-7.4-5.7c-1.9 1.3-4.3 2-6.9 2-6.3 0-11.7-4-13.5-9.5l-7.8 5.7C6.9 41.7 14.8 47 24 47z"/>
                </svg>
              </div>
            </div>
            <div className="stars">{"★".repeat(r.rating)}</div>
            <p className="review-text">{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── HOURS ─────────────────────────────────────────────────────
function Hours() {
  const days = [
    { day:"Monday – Friday", time:"5:30 AM – 9:30 PM" },
    { day:"Saturday",        time:"5:30 AM – 9:30 PM" },
    { day:"Sunday",          time:"7:00 AM – 11:00 AM" },
  ];
  const today = new Date().toLocaleDateString("en-IN", { weekday: "long" });

  return (
    <section className="hours">
      <div className="hours-inner">
        <div className="hours-text">
          <div className="section-label">WE'RE OPEN</div>
          <h2>Opening <span className="accent">Hours</span></h2>
          <p>We make sure you always have time to train — early risers and night owls welcome!</p>
        </div>
        <div className="hours-table">
          {days.map((d) => {
            const isToday = d.day.includes(today);
            return (
              <div className={`hours-row ${isToday ? "today" : ""}`} key={d.day}>
                <span className="day-name">{d.day}</span>
                {isToday && <span className="today-badge">TODAY</span>}
                <span className="day-time">{d.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────
function Contact() {
  const [form, setForm]     = useState({ name:"", phone:"", email:"", message:"" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const subject = `New Enquiry from ${form.name} – Stoic Fitness Website`;
    const body    = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A%0AMessage:%0A${encodeURIComponent(form.message)}`;
    window.location.href = `mailto:stoicfitness2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setTimeout(() => {
      setStatus("✅ Your message is ready! We'll get back to you soon.");
      setForm({ name:"", phone:"", email:"", message:"" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <div className="section-label">GET IN TOUCH</div>
        <h2>Contact <span className="accent">Us</span></h2>
        <p>Have questions? Ready to start? We'd love to hear from you.</p>
      </div>
      <div className="contact-inner">
        <div className="contact-info">
          <h3>Reach Us Directly</h3>
          <a href="tel:+919150105196" className="contact-item">
            <span className="ci-icon">📞</span>
            <div>
              <div className="ci-label">Call Us</div>
              <div className="ci-value">+91 91501 05196</div>
              <div className="ci-value">+91 91762 70989</div>
            </div>
          </a>
          <a href="mailto:stoicfitness2025@gmail.com" className="contact-item">
            <span className="ci-icon">✉️</span>
            <div>
              <div className="ci-label">Email</div>
              <div className="ci-value">stoicfitness2025@gmail.com</div>
            </div>
          </a>
          <div className="contact-item">
            <span className="ci-icon">📍</span>
            <div>
              <div className="ci-label">Location</div>
              <div className="ci-value">2nd Floor, No. 64, Sannathi Street<br />100 Feet Road, Tharamani<br />Chennai – 600113</div>
            </div>
          </div>
          <a href="https://www.instagram.com/stoicfitness.taramani" target="_blank" rel="noreferrer" className="contact-item">
            <span className="ci-icon">📸</span>
            <div>
              <div className="ci-label">Instagram</div>
              <div className="ci-value">@stoicfitness.taramani</div>
            </div>
          </a>
          <a href="https://maps.google.com/?q=Stoic+Fitness+Tharamani+Chennai" target="_blank" rel="noreferrer" className="btn-primary map-btn">
            📍 Get Directions on Google Maps
          </a>
        </div>

        <div className="contact-form-wrap">
          <h3>Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" name="name" required placeholder="John Doe"
                  value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" required placeholder="+91 99999 99999"
                  value={form.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="you@email.com"
                value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea name="message" required rows={5}
                placeholder="I'm interested in joining Stoic Fitness..."
                value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn-primary submit-btn" disabled={sending}>
              {sending ? "Sending..." : "Send Message 🚀"}
            </button>
            {status && <div className="form-success">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────
function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Stoic Fitness" className="footer-logo-img" />
            <div>
              <div className="footer-name">STOIC FITNESS</div>
              <div className="footer-tagline">THARAMANI · CHENNAI</div>
            </div>
          </div>
          <p>Your ultimate fitness destination in Chennai. Transform your body, discipline your mind.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          {[["Home","home"],["About","about"],["Services","services"],["Gallery","gallery"],["Reviews","reviews"],["Contact","contact"]].map(([l,id])=>(
            <button key={id} onClick={() => scrollTo(id)}>{l}</button>
          ))}
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p><a href="tel:+919150105196">+91 91501 05196</a></p>
          <p><a href="tel:+919176270989">+91 91762 70989</a></p>
          <p><a href="mailto:stoicfitness2025@gmail.com">stoicfitness2025@gmail.com</a></p>
          <p>Mon–Sat: 5:30 AM – 9:30 PM</p>
          <p>Sun: 7:00 AM – 11:00 AM</p>
          <a href="https://www.instagram.com/stoicfitness.taramani" target="_blank" rel="noreferrer" className="insta-btn">
            📸 @stoicfitness.taramani
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Stoic Fitness. All rights reserved. | Tharamani, Chennai</p>
        <p className="gstin">GSTIN: 33AUZPP6750F1Z2</p>
      </div>
    </footer>
  );
}

// ── FLOAT CALL BUTTON ─────────────────────────────────────────
function FloatCall() {
  return (
    <a href="tel:+919150105196" className="float-call" title="Call Stoic Fitness">📞</a>
  );
}

// ── APP ROOT ──────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Hours />
      <Contact />
      <Footer />
      <FloatCall />
    </>
  );
}
