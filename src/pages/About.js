import React from 'react';
import WorkBox from './../Components/WorkBox';
import uiIcon from './../assets/img/ui.svg';
import appIcon from './../assets/img/app.svg';
import apiIcon from './../assets/img/api.svg';
import webIcon from './../assets/img/web.svg';


const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>Web developer, passionate about technology and development, former music producer and open source contributor. I work mainly on mobile and web, but there are areas that catch my attention where I develop over time, willing to face new challenges.</p>

      <p>
        I spend time coding and creating new things, especially when they can help me or another human being in some way (see my portfolio for a list of my projects), but increasing knowledge about the entire system process and product delivery of quality at the right time, reaching the foundations of the knowledge obtained.

        In my spare time I start producing music, both for games and for electronic and techno music beats, in the meantime I research Music Computing and its audio processing. Emphasizing, I like to travel and get to know different places and cultures, live life intensely, always listening to good music and working with what I love.
      </p>


      <div className="work">
        <WorkBox icon={uiIcon} title="UI/UX Designer" description="The prototyping tools used  for  the creation process are miro, Balsamiq and Adobe XD." />
        <WorkBox icon={appIcon} title="App Development" description="Loves developing in a framework, from start to finish of the development process." />
        <WorkBox icon={apiIcon} title="API Development" description="built APIs in JavaScript using Node.js, Express.js and Postman for testing." />
        
        <WorkBox icon={webIcon} title="Web Development" description="oversees the entire process of building and maintaining websites and web applications." />
      </div>

      <div className="education-history">
        <h2>🎓 Education</h2>
        <ul>
          <li>
            <h3>Bachelor's degree in Computer Science</h3>
            <p>Universidade Federal da Fronteira Sul, 2018-2023.</p>
          </li>
          <li>
            <h3>Computer Technician</h3>
            <p>Escola Estadual José Aparecido Ribeiro, 2014-2016.</p>
          </li>
        </ul>
      </div>

      <div className="about-me-history">
        <h2>✨ Cool stuff about me</h2>
        <p><span style={{fontSize: '18px'}}>&#129395;</span> Co-founder of Atlética Navegadores Campus Chapecó in 2022, and was the first president of AAACCNavegadores.</p>
        <p><span style={{fontSize: '20px'}}>&#128187;</span> I do a lot of research and studies in Music Computing and audio processing.</p>
        <p><span style={{fontSize: '18px'}}>&#127911;</span> Fun fact: I'm a DJ in my spare time and I support music creation.</p>
      </div>
    </div>
  );
};

export default About;
