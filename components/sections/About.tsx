import React from "react";
import Button from "@/components/ui/Button";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-dark-blue-2">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-light-gold mb-4">
          About Me
        </h2>
        <p className="text-center text-brand-gray-light mb-12 sm:mb-16 text-lg">
          Get to know me and my journey
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden h-96 bg-dark-blue-3 p-6 shadow-xl">
            <div className="absolute inset-0 bg-dark-blue-2/70 z-0"></div>
            <pre className="relative z-10 font-mono text-sm text-light-gold overflow-auto h-full">
              {`const developer = {
  name: "Eyob Worku",
  role: "Software Engineer",
  focus: "Backend & Bots",
  loves: [
    "Clean Code",
    "Problem Solving",
    "Coffee"
  ]
};

while(developer.isAwake()) {
  developer.code();
  developer.drinkCoffee();
  if (developer.needsBreak()) {
    developer.learnNewTech();
  }
}`}
            </pre>
          </div>

          <div className="text-brand-gray">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gold mb-6">
              Who I Am
            </h3>
            <p className="mb-4 text-base sm:text-lg">
              I&apos;m a passionate software engineer with expertise in backend
              development and Telegram bot creation. With several years of
              experience, I specialize in building scalable, maintainable, and
              efficient full-stack applications.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              My journey began with a deep curiosity about how systems work
              behind the scenes. This led me to focus on backend technologies,
              database design, and API development.
            </p>
            <p className="mb-6 text-base sm:text-lg">
              When I&apos;m not coding, I&apos;m constantly learning new
              technologies and exploring new ways to solve complex problems.
            </p>
            <Button href="#projects" variant="primary">
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
