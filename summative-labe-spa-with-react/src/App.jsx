import { useState } from 'react'

import React from 'react'
import ProjectList from './Components/ProjectList'
import Filter from './Components/Filter'
import projects from './projects'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const handleSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <div className="App">
      <h1>My Projects</h1>
      <p>Search for a project by name</p>
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ProjectList projects={projects} />
    </div>



  )
}

export default App
