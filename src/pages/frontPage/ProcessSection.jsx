import React from "react";

export const ProcessSection = () => {
  return (
    <section className="bg-[#e1e4db] py-22 sm:py-32">
      <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
        <div className="mb-16 grid gap-5 md:grid-cols-[1fr_.78fr] md:items-start">
          <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#59605a] md:col-span-2">How we work</span>
          <h2 className="text-[clamp(2rem,7vw,8rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
            A DIRECT, TRANSPARENT <br />
            <em>process.</em>
          </h2>
          <p className="max-w-[20rem] self-end text-base leading-[1.45] text-[#59605a]">
            No bloated layers or guesswork. Just close collaboration and thoughtful execution.
          </p>
        </div>

        <div className="grid border-t border-[#141815] md:grid-cols-3">
          <div className="border-b border-[#141815] py-8 md:border-b-0 md:border-r md:border-[#141815] md:pr-8">
            <span className="text-[11px] font-bold">Step 01 / Discovery</span>
            <h3 className="mt-7 text-2xl font-black uppercase tracking-[-.05em]">Clarify &amp; Outline</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#59605a]">
              We dig into your brand goals, audience expectations, and functional requirements, outlining every deliverable clearly.
            </p>
          </div>

          <div className="border-b border-[#141815] py-8 md:border-b-0 md:border-r md:border-[#141815] md:px-8">
            <span className="text-[11px] font-bold">Step 02 / Creation</span>
            <h3 className="mt-7 text-2xl font-black uppercase tracking-[-.05em]">Design &amp; Build</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#59605a]">
              We craft your visual identity, user interfaces, or video edits with weekly progress reviews and active feedback loops.
            </p>
          </div>

          <div className="border-b border-[#141815] py-8 md:border-b-0 md:pl-8">
            <span className="text-[11px] font-bold">Step 03 / Delivery</span>
            <h3 className="mt-7 text-2xl font-black uppercase tracking-[-.05em]">Launch &amp; Support</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#59605a]">
              We handle testing, deployment, and asset handoffs, making sure your team has everything needed to run smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
