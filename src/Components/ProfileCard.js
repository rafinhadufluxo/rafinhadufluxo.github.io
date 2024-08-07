import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialLink from './SocialLink';
import avatar from './../assets/img/img_rafa2.jpg';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-pic">
        <img src={avatar} alt="user avatar" />
      </div>
      <div className="profile-details">
        <div className="intro">
          <h2>Rafinha Arruda</h2>
          <h4>Software Engineer</h4>
          <div className="social">
            <SocialLink href="https://www.instagram.com/rafinhadufluxo/" iconClass="fab fa-instagram" color="var(--blue)" />
            <SocialLink href="https://github.com/rafinhadufluxo" iconClass="fab fa-github" color="var(--dark-pink)" />
            <SocialLink href="https://www.linkedin.com/in/rafalup/" iconClass="fab fa-linkedin" color="var(--light-blue)" />
            <SocialLink href="https://www.lattes.cnpq.br/yourprofile" iconClass="fas fa-id-card" color="var(--light-purple)" title="cnpq lattes cv" />
            <SocialLink href="https://medium.com/@rafinhadufluxo" iconClass="fab fa-medium" color="var(--light-purple)" title="medium blog" />
          </div>
        </div>
        <nav className="profile-nav">
          <ul>
            <li><NavLink to="/about">&#x1F4C4; About</NavLink></li>
            <li><NavLink to="/blog">&#x1F30D; Blog</NavLink></li>
            <li><NavLink to="/portfolio">&#x1F4C1; Portfolio</NavLink></li>
            <li><NavLink to="/academic">&#x1F393; Academic</NavLink></li>
          </ul>
        </nav>
       {/*  <button className="download-btn">
          <i className="fa fa-download"></i> Download CV
        </button> */}
      </div>
    </div>
  );
};

export default ProfileCard;
