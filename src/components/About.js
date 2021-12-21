import react from 'react';
import aboutme from '../aboutme.jpeg'

const About = () => {
  
  return (
  <main className="about-main">
      <img className="aboutme-img" src={aboutme} alt="A picture of Michael Fares" />
    <div className="about-content">
    <h1 className="myname">Hi, I'm Michael Fares.</h1>
    <p>
      I am an educator turned programmer based in Houston, TX. I'm half Lebanese, half American, but fully a citizen of the world. I grew up in the Middle East for most of my childhood, and have been lucky enough to to travel to many places in between here and there.  What stimulates me most is the opportunity to engage with different people, cultures, and ideas, preferably over a strong cup of coffee. Aside from cooking good food, enjoying the outdoors, and spending quality time with family and friends, music is my number one hobby and passion. I play guitar, keyboards, and the Arabic oud. No matter the nature of the work I happen to be doing at a particular time, my goal is always to bring a creative spirit to everything I do. If you like what you see here, drop me a line and I would love to be a part of your next project!
    </p>
    </div>
  </main>
    )
  }
  
  export default About;