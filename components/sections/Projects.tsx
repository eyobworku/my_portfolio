"use client";
import React, { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Modal from "@/components/ui/Modal";
import Image from "next/image";

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-dark-blue-3">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-light-gold mb-4">
          My Projects
        </h2>
        <p className="text-center text-brand-gray-light mb-12 sm:mb-16 text-lg">
          Some of my recent work
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            {selectedProject.videoSrc && (
              <div className="aspect-video">
                <iframe
                  src={selectedProject.videoSrc.replace("watch?v=", "embed/")} // Basic YouTube URL conversion
                  title={`${selectedProject.title} Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
            )}
            {!selectedProject.videoSrc &&
              selectedProject.images &&
              selectedProject.images.length > 0 && (
                <div className="relative w-full h-96">
                  {" "}
                  {/* Fallback to first image if no video */}
                  <Image
                    src={selectedProject.images[0]}
                    alt={`${selectedProject.title} image`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
              )}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gold mb-2">
                  More Images:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.images.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="relative aspect-[16/9] rounded overflow-hidden shadow-md w-full h-full md:h-56"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${selectedProject.title} - Screenshot ${
                          index + 1
                        }`}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {!selectedProject.videoSrc &&
              (!selectedProject.images ||
                selectedProject.images.length === 0) && (
                <div className="video-placeholder flex items-center justify-center bg-dark-blue-1 text-gold text-lg p-8 rounded-md h-60">
                  Project media (video/images) will be displayed here.
                </div>
              )}
            <p className="text-brand-gray">{selectedProject.description}</p>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
