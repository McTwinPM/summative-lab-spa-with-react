import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <ProjectCard key={index} projects={project} />
            ))}
        </div>
    );
}

export default ProjectList;