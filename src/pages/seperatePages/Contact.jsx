import React, { useState } from "react";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "44bb6ab1-1913-4488-8831-b4ab85dfd1cf");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        e.target.reset();
      } else {
        alert(data.message || "Something went wrong. Please reach out via email.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please email us directly at hello@zenvymedia.com");
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#F9B2D7] py-16 sm:py-28">
      <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          {/* Left Column */}
          <div>
            <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#59605a]">Contact the studio</span>
            <h1 className="text-[clamp(4rem,7vw,7rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
              LET’S <br />
              <em>talk.</em>
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed">
              Tell us what you are looking to build. We review every submission
              and typically get back to you within 24 hours with an initial review.
            </p>

            <div>
              <a
                href="mailto:hello@zenvymedia.com"
                className="mt-9 inline-flex items-center gap-4 border-b-2 border-[#141815] pb-2 text-lg font-bold transition-colors hover:border-[#2463eb] hover:text-[#2463eb]"
              >
                <span>hello@zenvymedia.com</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-8 text-[13px] leading-[1.7] text-[#59605a]">
              <strong className="mb-1 block text-[#141815]">
                Studio Hours
              </strong>
              Monday – Friday, 9:00 AM – 6:00 PM IST <br />
              Chennai, India &amp; Global Remote
            </div>
          </div>

          {/* Right Column / Form */}
          <div className="border-2 border-[#141815] bg-[#f5f3ec] p-5 shadow-[9px_9px_0_0_#141815] sm:p-8">
            {submitted ? (
              <div className="rounded bg-[#e8edff] p-6">
                <h3 className="text-[22px] font-black uppercase tracking-[-.05em] text-[#2463eb]">Inquiry received.</h3>
                <p className="mt-2.5 text-sm leading-[1.6] text-[#59605a]">
                  Thank you for reaching out. We have received your project details and will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-[18px] inline-flex min-h-14 items-center justify-center gap-3 bg-[#141815] px-6 py-4 text-sm font-bold text-[#f5f3ec] transition-colors hover:bg-[#2463eb]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={sendEmail}>
                <div className="mb-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[.07em]" htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-none border border-[#141815] bg-white px-3 py-3 text-sm outline-none transition-colors placeholder:text-[#59605a]/70 focus:border-[#2463eb] focus:ring-1 focus:ring-[#2463eb]" placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[.07em]" htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-none border border-[#141815] bg-white px-3 py-3 text-sm outline-none transition-colors placeholder:text-[#59605a]/70 focus:border-[#2463eb] focus:ring-1 focus:ring-[#2463eb]" placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="mb-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[.07em]" htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="w-full rounded-none border border-[#141815] bg-white px-3 py-3 text-sm outline-none transition-colors placeholder:text-[#59605a]/70 focus:border-[#2463eb] focus:ring-1 focus:ring-[#2463eb]" placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[.07em]" htmlFor="service">Service Needed</label>
                    <select className="w-full rounded-none border border-[#141815] bg-white px-3 py-3 text-sm outline-none transition-colors focus:border-[#2463eb] focus:ring-1 focus:ring-[#2463eb]" id="service" name="service" defaultValue="Website Design & Build">
                      <option value="Website Design & Build">Website Design &amp; Build</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Branding & Identity">Branding &amp; Identity</option>
                      <option value="Paid Advertising & SEO">Paid Advertising &amp; SEO</option>
                      <option value="Video Editing & Motion">Video Editing &amp; Motion</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[.07em]" htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="min-h-36 w-full resize-y rounded-none border border-[#141815] bg-white px-3 py-3 text-sm outline-none transition-colors placeholder:text-[#59605a]/70 focus:border-[#2463eb] focus:ring-1 focus:ring-[#2463eb]" placeholder="Briefly describe what you want to achieve, timelines, and any current website links..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#141815] px-6 py-4 text-sm font-bold text-[#f5f3ec] transition-colors hover:bg-[#2463eb]"
                >
                  {loading ? "Sending..." : "Submit inquiry →"}
                </button>

                <p className="mt-3.5 text-center text-[11px] text-[#59605a]">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
