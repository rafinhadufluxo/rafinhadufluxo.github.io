import React from 'react';
import SocialLink from './SocialLink';
import avatar from './../assets/img/avatar.webp';

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
            <SocialLink href="https://x.com/rafinhadufluxo" iconClass="fab fa-twitter" color="var(--skyblue)" />
            {/* <SocialLink href="#" iconClass="fab fa-dribbble" color="var(--dark-pink)" /> */}
            <SocialLink href="https://www.linkedin.com/in/rafalup/" iconClass="fab fa-linkedin" color="var(--light-blue)" />
          </div>
        </div>
        <nav className="profile-nav">
          <ul>
            <li><a href="#section1">About</a></li>
            <li><a href="#section2">Blog</a></li>
            <li><a href="#section3">Portfolio</a></li>
            <li><a href="#section4">Academic</a></li>
          </ul>
        </nav>
        <button className="download-btn">
          <i className="fa fa-download"></i> Download CV
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
