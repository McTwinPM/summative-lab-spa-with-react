import React from "react";
import { useState } from "react";
import projects from "../projects";

function ProjectCard({ projects }) {
    return (
        <div className="project-card">
            <h2>{projects.title}</h2>
            <p>{projects.description}</p>
        </div>
    );
}

export default ProjectCard;
