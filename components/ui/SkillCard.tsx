import React from "react";
import { Skill } from "@/data/skills";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <div className="bg-dark-blue-2 p-6 rounded-lg text-center transition-transform duration-300 ease-in-out hover:translate-y-[-10px] shadow-lg hover:shadow-gold/20">
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <IconComponent className="w-full h-full text-gold" />
      </div>
      <p className="font-semibold text-light-gold text-lg">{skill.name}</p>
    </div>
  );
};

export default SkillCard;
