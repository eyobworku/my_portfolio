"use client";
import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import Button from "./Button";
import PlayIcon from "@/components/icons/PlayIcon"; // You'll create this

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="bg-dark-blue-2 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-gold/20 flex flex-col">
      <div className="relative h-52 sm:h-60 bg-dark-blue-1 group">
        <Image
          src={project.coverImage}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 group-hover:opacity-50"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-gold text-xl sm:text-2xl font-semibold p-4 text-center">
            {project.cardTitle}
          </span>
        </div>
        {(project.videoSrc || project.images) && (
          <button
            onClick={() => onOpenModal(project)}
            className="absolute bottom-3 right-3 bg-dark-blue-3 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-gold transition-colors shadow-md"
            aria-label={`Play video for ${project.title}`}
          >
            <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold text-light-gold mb-2">
          {project.title}
        </h3>
        <p className="text-brand-gray text-sm sm:text-base mb-6 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.githubLink && (
            <Button
              href={project.githubLink}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 sm:text-sm sm:px-4 sm:py-2"
            >
              GitHub
            </Button>
          )}
          {project.liveDemoLink && (
            <Button
              href={project.liveDemoLink}
              variant="primary"
              target="_blank"
              // rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 sm:text-sm sm:px-4 sm:py-2"
            >
              Live Demo
            </Button>
          )}
          {project.apiDocsLink && (
            <Button
              href={project.apiDocsLink}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 sm:text-sm sm:px-4 sm:py-2"
            >
              API Docs
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
