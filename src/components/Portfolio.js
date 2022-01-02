import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Portolio = () => {
const [repos, setRepos] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {

  axios.get(`https://api.github.com/users/michael-fares/repos?sort=created&direction=desc&per_page=100`)
  .then((res) => {
    const filteredRepos = res.data.filter(repo => repo.homepage && repo.description)
    setRepos(filteredRepos)
    setLoading(false)
  })

},[])

return (
<main>
{loading ? 
  <div className="home-main">
   <div className="rotating-star loading">
      <div className="star-square"></div>
      <div className="star-square transform"></div>
    </div>
   </div> 
    :
  <ul className="project-list slide-in" style={{listStyle: "none", marginTop: "1rem"}}>
    {repos.map(repo => {
      return (
        <li key={repo.id} className="repo-card">
          <div className="repo-image-cropper">
           <img className="repo-image" src={`${process.env.PUBLIC_URL}/${repo.name}.png`} alt={repo.name}/>
          </div>
          <div>
           
              <div className="repo-card-top-row">
                <a href={repo.html_url} target="blank">SEE CODE</a>
                <a href={repo.homepage} target="blank">VISIT SITE</a>
              </div>
              
            
              <p className="repo-description">{repo.description}</p>
              <div className="repo-chip-container">
                {repo.topics.map(topic => {
                  return (<span className="repo-chip">{topic}</span>)
                })}
              </div>
           
          </div>
        </li>
      )
    })}
  </ul>
}
  </main>
  )
}

export default Portolio;