const OtherPagesFooter = () => {
  return (
    <footer className="bg-white p-6 sm:p-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.07em]">
        Contact Zenvy
      </p>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-[clamp(2rem,13vw,13rem)] font-black leading-[0.8] tracking-tighter">
            LET&apos;S
          </h1>
          <h1 className="text-[clamp(2rem,13vw,13rem)] font-black font-serif  italic leading-[1] tracking-wider">
            talk.
          </h1>
        </div>

        <div className="flex items-center justify-center ">
          <span className="border p-9 hover:bg-black hover:text-white" aria-hidden="true">
            <svg className="hover:text-white" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M6 18 18 6M6 6h12v12" />
            </svg>
          </span>
        </div>
      </div>

      <p className="mt-8">
        A website, a brand, or a complete set of materials.
        <br />
        We reply within an hour during business hours, and we only use your
        details to answer you.
      </p>
    </footer>
  );
};

export default OtherPagesFooter;