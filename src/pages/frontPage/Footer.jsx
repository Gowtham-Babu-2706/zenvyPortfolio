import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-borderPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* LOGO */}
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-textPrimary">
              ZENVY.
            </span>
          </div>

          {/* LINKS */}
          <div className="flex space-x-12">
            <a
              href="https://www.youtube.com/@zenvy-i4f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 hover:text-textPrimary transition-colors"
            >
              YouTube
            </a>

            <a
              href="https://www.instagram.com/zenvymedia_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 hover:text-textPrimary transition-colors"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/share/1AWwFW4wyJ/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 hover:text-textPrimary transition-colors"
            >
              Facebook
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            © 2026 Zenvy Media Studio. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};
