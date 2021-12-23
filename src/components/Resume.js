import resumePic from '../resume-img.jpeg'

const Resume = () => {
  
  return (
  <main className="resume-main">
   <section className="resume-section">
      <div className="img-container resume-img"></div>
   </section> 
   <section className="resume-section">
    <h2 className="resume-heading">Contact</h2>
    <h4>email: mjfares@gmail.com</h4>
    <h4>phone: 703-244-0370</h4>
   </section>
   <section className="resume-section">
    <h2 className="resume-heading">Skills</h2>
    <ul className="flex-row-wrap">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Git and GitHub</li>
      <li>React</li>
      <li>Material UI</li>
      <li>Bootstrap</li>
      <li>Node</li>
      <li>Express</li>
      <li>Sql</li>
      <li>REST APIs</li>
      <li>Testing</li>
      <li>NPM / Yarn</li>
      <li>Heroku</li>
      <li>Hosting</li>
      <li>Teaching</li>
      <li>Instructional Design</li>
      <li>Research / Data Analysis</li>
      <li>Public Speaking</li>
    </ul>
   </section>
   <section className="resume-section">
    <h2 className="resume-heading experience">Experience</h2>
    <div>
      <h3>Freelance Web Developer</h3>
      <h4><i>2021 - Present</i></h4>
      <ul>
        {/* put items here */}
      </ul>
    </div>
    <div>
      <h3>Professor of Arabic</h3>
      <h4>Univsersity of Houston | <i>2012 - Present</i></h4>
      <ul>
        <li>Designed and implemented Arabic language curriculum for all levels</li>
        <li>Faculty Teaching Excellence Award, 2020</li>
        <li>Outstanding Mentorship Award, 2020</li>
      </ul>
    </div>
   </section>
   <section className="resume-section education">
    <h2 className="resume-heading">Education</h2>
      <div>
          <h3> Austin Coding Academy Bootcamp</h3>
          <h4>Full Stack Web Development | <i>Dec 2021</i></h4>
        </div>
        <div>
          <h3>University of Texas at Austin</h3>
          <h4>M.A. | <i>May 2012</i></h4>
        </div>
   </section>
  </main>
    )
  }
  
  export default Resume;
 