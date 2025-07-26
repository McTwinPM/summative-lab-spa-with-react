import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectForm from "../Components/ProjectForm";
import { vi } from "vitest";
import ProjectList from "../Components/ProjectList";
import '@testing-library/jest-dom';


test("renders ProjectForm component", () => {
  render(<ProjectForm onAddProject={() => {}} />);
  
  const nameInput = screen.getByPlaceholderText("Project Name");
  const descriptionInput = screen.getByPlaceholderText("Project Description");
  const submitButton = screen.getByText("Add Project");

  expect(nameInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
test("adds a new project on form submission", () => {
  const mockAddProject = vi.fn();
  render(<ProjectForm onAddProject={mockAddProject} />);

  const nameInput = screen.getByPlaceholderText("Project Name");
  const descriptionInput = screen.getByPlaceholderText("Project Description");
  const submitButton = screen.getByText("Add Project");

  fireEvent.change(nameInput, { target: { value: "New Project" } });
  fireEvent.change(descriptionInput, { target: { value: "Project Description" } });
  fireEvent.click(submitButton);

  expect(mockAddProject).toHaveBeenCalledWith({
    title: "New Project",
    description: "Project Description"
  });
});
test("correctly filters projects based on search term", () => {
  const allProjects = [
    { title: "Project One", description: "Description One" },
    { title: "Project Two", description: "Description Two" },
    { title: "Another Project", description: "Another Description" }
  ];
  
  // Simulate the filtering logic that happens in App.jsx
  const search = "Project";
  const filteredProjects = allProjects.filter(project =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );
  
  const { container } = render(
    <ProjectList projects={filteredProjects} />
  );

  const projectCards = container.querySelectorAll(".project-card");
  expect(projectCards.length).toBe(3); 
});
