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


      {/* <h2>⚒️ Work</h2> */}

      <p>
        I spend time coding and creating new things, especially when they can help me or another human being in some way (see my portfolio for a list of my projects), but increasing knowledge about the entire system process and product delivery of quality at the right time, reaching the foundations of the knowledge obtained.

        In my spare time I start producing music, both for games and for electronic and techno music beats, in the meantime I research Music Computing and its audio processing. Emphasizing, I like to travel and get to know different places and cultures, live life intensely, always listening to good music and working with what I love.
      </p>


      <div className="work">
        <WorkBox icon={uiIcon} title="UI/UX Designer" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
        <WorkBox icon={appIcon} title="App Development" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
        <WorkBox icon={apiIcon} title="API Development" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
        <WorkBox icon={webIcon} title="Web Development" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
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

     {/*  <div className="profissional-history">
        <h2> &#128187; Professional Experience</h2>
        <ul>
          <li>
            <h3>Analista em Desenvolvimento de Sistema jr</h3>
            <p> Excelência Carnes Suinas</p>
            <p> Janeiro de 2023 - atualmente</p>
          </li>
          <li>
            <h3>Analista em Desenvolvimento de Sistema jr</h3>
            <p> MaxiSicoob</p>
            <p> Novembro de 2022 - Novembro de 2023</p>
          </li>
          <li>
            <h3>Desenvolvedora Web jr</h3>
            <p> Fronteira Tec</p>
            <p> Julho 2019 - Março 2020</p>
          </li>
          <li>
            <h3>Analista em Logística jr</h3>
            <p> Terra Santa Agro</p>
            <p> Agosto 2016 - Agosto 2017</p>
          </li>
          <li>
            <h3>Tecnico à Informática</h3>
            <p> Amazon Info </p>
            <p> Janeiro 2015 - Janeiro 2016</p>
          </li>
        </ul>
      </div> */}

      <div className="about-me-history">
        <h2>✨ Cool stuff about me</h2>
        <p><span style={{fontSize: '18px'}}>&#129395;</span> Co-founder of Atlética Navegadores Campus Chapecó in 2022, and was the first president of AAACCNavegadores.</p>
        <p><span style={{fontSize: '20px'}}>&#128187;</span> I do a lot of research and studies in Music Computing and audio processing.</p>
        <p><span style={{fontSize: '18px'}}>&#127911;</span> Fun fact: I'm a DJ in my spare time and I support music creation.</p>
        {/* <p></p> */}
      </div>
    </div>
  );
};

export default About;
