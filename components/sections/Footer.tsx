import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark-blue-1 py-8 text-center">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-brand-gray-light text-sm">
          &copy; {currentYear} Your Name - Software Engineer & Telegram Bot
          Developer {/* TODO: Replace Your Name */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
