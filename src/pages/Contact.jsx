import { useState } from "react";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!form.message.trim()) newErrors.message = "Please enter a message.";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 1000);
  }

  return (
    <div className="pt-28 md:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14 max-w-xl">
          <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-3">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-forest mb-4">We'd Love To Hear From You</h1>
          <p className="font-sans text-charcoal/60">
            Questions about a ritual, an order, or just want to say hello? Send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <ContactInfo icon={Mail} label="Email" value="hello@aaranya.in" />
            <ContactInfo icon={Phone} label="Phone" value="+91 98765 43210" />
            <ContactInfo icon={MapPin} label="Studio" value="Bengaluru, India" />
          </div>

          <Reveal className="lg:col-span-2">
            {status === "success" ? (
              <div className="bg-offwhite border border-sage/30 p-10 text-center">
                <CheckCircle2 size={36} className="text-sage mx-auto mb-4" />
                <h2 className="font-serif text-2xl text-forest mb-2">Message sent.</h2>
                <p className="font-sans text-charcoal/60 text-sm">
                  Thank you for reaching out — our team will get back to you within 1-2 business
                  days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs uppercase tracking-widest2 font-sans text-forest hover:text-gold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-offwhite p-6 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>
                <Field
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  error={errors.subject}
                />
                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-widest2 font-sans text-charcoal/60 mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full bg-cream border px-4 py-3 font-sans text-sm outline-none focus:border-forest ${
                      errors.message ? "border-rose" : "border-charcoal/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-rose text-xs font-sans mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans px-8 py-4 hover:bg-charcoal transition-colors disabled:opacity-60"
                >
                  {status === "loading" && <Loader2 size={14} className="animate-spin" />}
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest2 font-sans text-charcoal/60 mb-2 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full bg-cream border px-4 py-3 font-sans text-sm outline-none focus:border-forest ${
          error ? "border-rose" : "border-charcoal/20"
        }`}
      />
      {error && <p className="text-rose text-xs font-sans mt-1">{error}</p>}
    </div>
  );
}

function ContactInfo({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <Icon size={20} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
      <div>
        <p className="text-xs uppercase tracking-widest2 font-sans text-charcoal/50 mb-1">
          {label}
        </p>
        <p className="font-serif text-lg text-charcoal">{value}</p>
      </div>
    </div>
  );
}
