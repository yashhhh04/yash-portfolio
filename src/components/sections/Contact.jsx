import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
  <RevealOnScroll>
    <div className="w-full max-w-md bg-white/10 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent text-center from-blue-500 to-cyan-400">
        Get In Touch
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          />
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            placeholder="Example@gmail.com"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          />
        </div>
        <div className="relative">
          <textarea
            id="message"
            placeholder="Your Message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  </RevealOnScroll>
</section>

  );
};
