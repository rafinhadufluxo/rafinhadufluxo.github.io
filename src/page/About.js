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
      <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
      <p>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
      <h2>What I Do !!!</h2>
      <div className="work">
        <WorkBox icon={uiIcon} title="UI/UX Designer" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
        <WorkBox icon={appIcon} title="App Development" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
        <WorkBox icon={apiIcon} title="API Development" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
        <WorkBox icon={webIcon} title="Web Development" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
      </div>
    </div>
  );
};

export default About;
