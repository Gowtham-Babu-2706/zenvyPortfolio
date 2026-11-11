import React from "react";

export const StudioStatement = () => {
  return (
    <section className="bg-[#141815] py-24 text-[#f5f3ec] sm:py-36" aria-label="About the studio">
      <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
        <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#F9B2D7]">The studio</span>
        <p className="max-w-6xl text-[clamp(2.6rem,6vw,6.8rem)] font-black uppercase leading-[.92] tracking-[-.065em]">
          Company sites, identities, portfolios, and creative campaigns for ambitious brands,{" "}
          <em className="font-serif font-normal normal-case text-[#F9B2D7]">designed and engineered with clarity.</em>
        </p>
      </div>
    </section>
  );
};
