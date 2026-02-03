import React, { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "44bb6ab1-1913-4488-8831-b4ab85dfd1cf"); // 🔑 replace this

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully 🚀");
        e.target.reset();
      } else {
        console.error(data);
        alert(data.message || "Something went wrong 😢");
      }
    } catch (error) {
      console.error(error);
      alert("Network error 😢");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-[7.1rem] my-auto bg-primary text-textPrimary relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              HAVE A <br /> BIG IDEA?
            </motion.h2>

            <p className="mt-8 text-xl text-gray-400 max-w-md leading-relaxed">
              We're always looking for ambitious brands to partner with.
            </p>

            <div className="mt-12 space-y-7">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                  Email us
                </p>
                <a
                  href="mailto:zenvyofficial04@gmail.com"
                  className="text-2xl font-medium hover:text-gray-300 transition-colors"
                >
                  zenvyofficial04@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                  Contact us
                </p>
                <p className="text-2xl font-medium">+91 86109 74409</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 md:p-12 rounded-2xl"
          >
            <form onSubmit={sendEmail} className="space-y-6">
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-zinc-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    Phone No
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-zinc-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-zinc-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Project Type
                </label>
                <select
                  name="project_type"
                  className="w-full bg-zinc-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-white"
                >
                  <option>Product Marketing</option>
                  <option>Web Design</option>
                  <option>Branding</option>
                  <option>Development</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-zinc-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-white resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black py-5 rounded-xl font-bold flex items-center justify-center group hover:bg-gray-200 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-125 h-125 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
    </section>
  );
};
