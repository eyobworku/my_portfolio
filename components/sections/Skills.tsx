import React from "react";
import { skillsData } from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-dark-blue-1">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-light-gold mb-4">
          My Skills
        </h2>
        <p className="text-center text-brand-gray-light mb-12 sm:mb-16 text-lg">
          Technologies I work with
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
