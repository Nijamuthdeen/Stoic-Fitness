# 🏋️ Stoic Fitness – Website

## ✅ Setup

```bash
npm install
npm run dev
```

---

## 📁 Where to Drop Your Images

```
stoic-fitness/
├── public/
│   └── logo.png          ← Logo for browser tab (favicon)
│
└── src/
    └── assets/
        ├── logo.png       ← Logo for Navbar + Footer
        ├── gym1.png       ← Gallery: Warzone Hall
        ├── gym2.png       ← Gallery: Functional Area
        ├── gym3.png       ← Gallery: Training Floor
        ├── gym4.png       ← Gallery: Team & Community
        ├── gym5.png       ← Gallery: Free Weights Zone
        └── gym6.png       ← Gallery: Grand Opening / Storefront
```

> Images can be .jpg or .png — just rename them as above.

---

## 📧 Contact Form — Email Setup (Optional)

Currently uses `mailto:` (opens mail app). To send directly without opening mail app, use EmailJS:

```bash
npm install @emailjs/browser
```

Then in `App.jsx` → `Contact` → `handleSubmit`, replace with:

```js
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: form.name,
        phone:     form.phone,
        email:     form.email,
        message:   form.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    setStatus("✅ Message sent! We'll get back to you soon.");
    setForm({ name:"", phone:"", email:"", message:"" });
  } catch {
    setStatus("❌ Something went wrong. Please call us directly.");
  }
  setSending(false);
};
```

Sign up free at https://emailjs.com

---

## 🎨 Theme Colors

| Variable        | Value     |
|----------------|-----------|
| `--orange`     | `#ff6b00` |
| `--black`      | `#0d0d0d` |
| `--offwhite`   | `#f7f5f2` |

---

## 📞 Contact Details Used

- Phone: +91 91501 05196 / +91 91762 70989
- Email: stoicfitness2025@gmail.com
- Instagram: @stoicfitness.taramani
- Address: 2nd Floor, 64, Sannathi Street, Tharamani, Chennai – 600113
- GSTIN: 33AUZPP6750F1Z2
