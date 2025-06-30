"use client";
import React from "react";
import Button from "@/components/ui/Button";

const Header: React.FC = () => {
  const handleDownloadResume = () => {
    const link = process.env.NEXT_PUBLIC_RESUME || "";
    if (!link) {
      console.error("Resume link is not defined in environment variables.");
      return;
    }
    window.open(link, "_blank");
  };

  return (
    <header
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-dark-blue-1 via-dark-blue-2 to-dark-blue-1 relative overflow-hidden pt-20 md:pt-0"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Software Engineer &{" "}
            <span className="text-light-gold">Full-Stack</span> Developer
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gold mb-8 font-medium">
            Specializing in Backend Development
          </h2>
          <p className="max-w-xl mx-auto md:mx-0 text-brand-gray text-base sm:text-lg mb-10">
            I build robust backend systems, RESTful APIs, and automated Telegram
            bots that solve real-world problems. With a strong foundation in
            software engineering principles, I create efficient and scalable
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={handleDownloadResume}
              variant="primary"
              className="w-full sm:w-auto"
            >
              Download Resume
            </Button>
            <Button
              href="#contact"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative blur element */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-dark-blue-3 rounded-full right-[-50px] bottom-[-50px] md:right-[-100px] md:bottom-[-100px] filter blur-[100px] opacity-70 z-0"></div>
    </header>
  );
};

export default Header;
