import React, { useState } from "react";

function ProjectForm({ onAddProject }) {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (projectName && projectDescription) {
            onAddProject({ title: projectName, description: projectDescription });
            setProjectName("");
            setProjectDescription("");
        }
    }
    if (!onAddProject) {
        return null; // Return null if onAddProject is not provided
    }

    return (
        <form className="project-form" onSubmit={handleSubmit}>
            <input className="project-name-input"
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />
            <textarea className="project-description"
                placeholder="Project Description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
            />
            <button type="submit">Add Project</button>
        </form>
    );
}

export default ProjectForm;