
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  
  return (
  <main className="resume-main slide-in">
   <section className="resume-section resume-image-align">
      <div className="resume-img" role="img" aria-label="Michael Fares"></div>
   </section> 
   <section className="resume-section contact">
   <h2 className="resume-heading">Contact</h2>
    <div className="contact-info">
      <div>
        <FontAwesomeIcon className="contact-icon" icon={faEnvelope} size="3x"/>
        <h4>mjfares@gmail.com</h4>
      </div>
      <div>
        <FontAwesomeIcon className="contact-icon" icon={faPhone} size="3x"/>
        <h4>703-244-0370</h4>
      </div>
    </div>
   </section>
   <section className="resume-section">
    <h2 className="resume-heading">Skills</h2>
    <ul className="flex-row-wrap">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Git and GitHub</li>
      <li>React</li>
      <li>Redux</li>
      <li>UX/UI</li>
      <li>Material UI</li>
      <li>Bootstrap</li>
      <li>Node</li>
      <li>Express</li>
      <li>SQL</li>
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
   <section className="resume-section experience">
    <h2 className="resume-heading">Experience</h2>
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
    <div className="degrees">
      <div>
          <h3> Austin Coding Academy Bootcamp</h3>
          <h4>Full Stack Web Development | <i>Dec 2021</i></h4>
        </div>
        <div>
          <h3>University of Texas at Austin</h3>
          <h4>MA, Arabic Language | <i>May 2012</i></h4>
        </div>
      </div>
   </section>
  </main>
    )
  }
  
  export default Resume;
 