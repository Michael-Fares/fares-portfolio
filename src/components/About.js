import aboutme from '../aboutme.jpeg'
import aboutme2 from '../aboutme2.jpeg'

const About = () => {
  
  return (
  <main className="about-main slide-in">
    <div className="flex-row-wrap">
      <img className="aboutme-img-desktop" src={aboutme} alt="Michael Fares" />
      <img className="aboutme-img-mobile" src={aboutme2} alt="Michael Fares" />
    </div>
    <div className="about-content">
    <h1 className="myname">Hi, I'm Michael Fares.</h1>
    <p>
      I am an educator turned programmer based in Houston, TX. I'm half Lebanese, half American, but fully a citizen of the world. I grew up in the Middle East for most of my childhood, and have been lucky enough to travel to many places in between here and there. 
      
      <br /> <br /> 
      
      What stimulates me most is the opportunity to engage with different people, cultures, and ideas, preferably over a strong cup of coffee. Aside from cooking good food, enjoying the outdoors, and spending quality time with family and friends, music is my number one hobby and passion. I play guitar, keyboards, and the Arabic oud. 
      
      <br /> <br />  
      
      With over 10 years' previous experience as a professor and having also worked on a variety of administrative teams in higher education, I pride myself on my ability to both learn new information quickly and to share it clearly with others. 
      
      <br /> <br /> 
      
      No matter the work I happen to be doing, my goal is always to bring a creative spirit and an eye for detail to everything I do. If you like what you see here, drop me a line and I would love to be a part of your next project!
    </p>
    </div>
  </main>
    )
  }
  
  export default About;