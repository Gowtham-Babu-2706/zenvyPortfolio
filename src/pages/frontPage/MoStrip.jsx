import React from "react";

export const MoStrip = () => {
  return (
    <section className="overflow-hidden border-b border-[#141815] bg-[#141815] py-2" aria-hidden="true">
      <div className="mx-auto w-full max-w-[1512px] px-0">
        <svg className="h-auto w-[1050px] max-w-none sm:w-full" viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax meet">
          {/* Sun */}
          <circle cx="210" cy="60" r="18" stroke="#cbd0c4" fill="none" />
          <path d="M210 32 v-8 M210 96 v-8 M182 60 h-8 M246 60 h-8 M190 40 l-6 -6 M230 80 l-6 -6 M190 80 l-6 6 M230 40 l-6 6" stroke="#cbd0c4" fill="none" strokeDasharray="2 2" />

          {/* Clouds */}
          <path d="M460 52 h80 a12 12 0 0 0 -16 -16 a18 18 0 0 0 -34 -4 a14 14 0 0 0 -22 10 a10 10 0 0 0 -8 10z" stroke="#cbd0c4" fill="none" />
          <path d="M780 70 h60 a10 10 0 0 0 -12 -12 a14 14 0 0 0 -24 -2 a10 10 0 0 0 -18 8 a8 8 0 0 0 -6 6z" stroke="#cbd0c4" fill="none" />

          {/* Roof line / horizon */}
          <path d="M40 180 H1400" stroke="#cbd0c4" fill="none" />

          {/* Building 01 */}
          <rect x="100" y="90" width="180" height="90" stroke="#cbd0c4" fill="none" />
          <path d="M100 110 h180 M130 130 h40 v50 h-40z M190 130 h70 v30 h-70z" stroke="#cbd0c4" fill="none" />
          <text x="190" y="206" fill="#F6FFA4" fontSize="11" fontWeight="700" textAnchor="middle">01 / BRAND</text>

          {/* Building 02 */}
          <rect x="320" y="80" width="190" height="100" stroke="#cbd0c4" fill="none" />
          <path d="M320 102 h190 M350 120 h50 v60 h-50z M420 120 h70 v60 h-70z" stroke="#cbd0c4" fill="none" />
          <text x="415" y="206" fill="#F6FFA4" fontSize="11" fontWeight="700" textAnchor="middle">02 / WEB</text>

          {/* Building 03 */}
          <rect x="550" y="100" width="170" height="80" stroke="#cbd0c4" fill="none" />
          <path d="M550 118 h170 M580 135 h40 v45 h-40z M640 135 h60 v30 h-60z" stroke="#cbd0c4" fill="none" />
          <text x="635" y="206" fill="#F6FFA4" fontSize="11" fontWeight="700" textAnchor="middle">03 / SOCIAL</text>

          {/* Building 04 */}
          <rect x="760" y="75" width="200" height="105" stroke="#cbd0c4" fill="none" />
          <path d="M760 100 h200 M790 120 h60 v60 h-60z M870 120 h70 v60 h-70z" stroke="#cbd0c4" fill="none" />
          <text x="860" y="206" fill="#F6FFA4" fontSize="11" fontWeight="700" textAnchor="middle">04 / ADS</text>

          {/* Endcap Tower / Studio Headquarters */}
          <rect x="1000" y="60" width="260" height="120" stroke="#cbd0c4" fill="none" strokeWidth="1.6" />
          <rect x="1050" y="30" width="160" height="30" stroke="#cbd0c4" fill="none" />
          <text x="1130" y="52" fill="#F9B2D7" fontSize="14" fontWeight="700" textAnchor="middle" letterSpacing="-0.5">ZENVY MEDIA.</text>
          <path d="M1000 95 h260 M1040 120 h70 v60 h-70z M1150 120 h70 v60 h-70z" stroke="#cbd0c4" fill="none" />
          <text x="1130" y="206" fill="#F9B2D7" fontSize="11" fontWeight="700" textAnchor="middle">05 / STUDIO</text>

          {/* Palm trees at edges */}
          <path d="M60 180 C62 140 70 100 72 70 M72 70 Q45 50 20 80 M72 70 Q85 45 105 75 M72 70 Q55 35 40 50 M72 70 Q90 35 105 50" stroke="#cbd0c4" fill="none" />
          <path d="M1360 180 C1358 140 1350 100 1348 70 M1348 70 Q1325 50 1300 80 M1348 70 Q1365 45 1385 75" stroke="#cbd0c4" fill="none" />
        </svg>
      </div>
    </section>
  );
};
