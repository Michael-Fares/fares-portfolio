import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Portolio = () => {
const [repos, setRepos] = useState([])

useEffect(() => {

  axios.get(`https://api.github.com/users/michael-fares/repos?per_page=100`)
  .then((res) => {
    const filteredRepos = res.data.filter(repo => repo.homepage && repo.description)
    setRepos(filteredRepos)
  })

},[])

return (
<main>
  <ul className="project-list" style={{listStyle: "none", margin: 0}}>
    {repos.map(repo => {
      return (
        <li key={repo.id} className="repo-card">
          <p>{repo.name}</p>
          <img className="repo-image" src={`${process.env.PUBLIC_URL}/${repo.name}.png`} alt={repo.name}/>
            <p className="repo-description">{repo.description}</p>
          <div className="repo-chip-container">
            {repo.topics.map(topic => {
              return (<span className="repo-chip">{topic}</span>)
            })}
          </div>
        </li>
      )
    })}
  </ul>
  </main>
  )
}

export default Portolio;