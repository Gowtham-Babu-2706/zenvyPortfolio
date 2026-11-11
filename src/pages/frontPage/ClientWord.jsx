const ClientWords = () => {
  return (
    <section
      className="bg-[#eeece3] px-6 py-20 text-[#181a18] sm:px-10 lg:max-h-screen lg:px-12 lg:py-28"
      aria-labelledby="proof-title"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[180px_minmax(0,1fr)_310px] lg:gap-x-12">
        {/* Heading */}
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.08em]">
            Client words
          </p>

          <h2
            id="proof-title"
            className="text-5xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-6xl"
          >
            In
            <br />
            their
            <br />
            <em className="font-serif text-[1.05em] normal-case font-normal">
              words.
            </em>
          </h2>
        </div>

        {/* Main testimonial */}
        <figure className="max-w-[620px]">
          <svg
            className="mb-5 h-auto w-20 sm:w-24"
            viewBox="0 0 120 92"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M50 8C24 18 8 38 8 62c0 14 8 24 21 24 12 0 20-8 20-20 0-11-8-19-19-19-3 0-5 0-7 1 3-14 13-25 30-32Z" />
            <path d="M112 8C86 18 70 38 70 62c0 14 8 24 21 24 12 0 20-8 20-20 0-11-8-19-19-19-3 0-5 0-7 1 3-14 13-25 30-32Z" />
          </svg>

          <blockquote>
            <p className="font-serif text-[clamp(1.55rem,2.25vw,2.4rem)] leading-[1.08] tracking-[-0.035em]">
              We own ten homes at Casa De Laguna and were still sending people
              to a site built in 2013. Noah pulled the photos and details out
              of the old site, designed a logo from the rooflines and the pond,
              and put the community, the homes and current availability in one
              place.{" "}
              <mark className="bg-[#dbe541] px-0.5 italic">
                It’s the first time the website has looked like the place we
                actually rent.
              </mark>
            </p>
          </blockquote>

          <figcaption className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs">
            <strong className="font-bold">Owner</strong>

            <span className="text-[#5c615b]">Great OC Condos</span>

            <a
              href="/greatoc/"
              className="ml-auto inline-flex items-center gap-4 border-b border-current pb-2 font-bold transition-opacity hover:opacity-60"
            >
              See the project
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 18 18 6M6 6h12v12" />
              </svg>
            </a>
          </figcaption>
        </figure>

        {/* Side testimonial */}
        <div className="lg:pt-1">
          <figure className="border border-[#53544f] p-7 sm:p-9">
            <blockquote>
              <p className="font-serif text-3xl italic leading-[0.95] tracking-[-0.04em]">
                “Highly recommend.
                <br />
                Great work.”
              </p>
            </blockquote>

            <figcaption className="mt-7 text-xs">
              <strong className="block font-bold">Dan Parker</strong>
              <span className="mt-2 block text-[#5c615b]">
                Great OC Condos · Google review
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ClientWords;