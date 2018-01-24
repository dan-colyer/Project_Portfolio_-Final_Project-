import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { projects: [] }

  componentDidMount() {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(projects => this.setState({ projects }))
  }

  render() {
    return (
      <div className="App">
        <h1>Projects</h1>
        <ul>
          {this.state.projects.map(project =>
            <li key={project.id}>{project.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
