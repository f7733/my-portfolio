// src/components/About.js

import React from "react";
import './About.css';
import git from '../../assets/git.png'
import html5 from '../../assets/html5.svg'
import php from '../../assets/php.svg'
import node from '../../assets/node-white.svg'
import sql from '../../assets/mysql.svg'
import react from '../../assets/1280px-React-icon.svg.png'
import mongo from '../../assets/mongodb2.svg'
import express from '../../assets/expresssvg-logo-white.svg'
import aws from '../../assets/512px-Amazon_Web_Services_Logo.svg.png'
import dogmaze from '../../assets/dogmaze.png'

export default function About() {
  return (
    <section className="aboutSection">
      <div className="content">
        <h1>asfdsa</h1>
        <div id="about" className="aboutContainer">
          <h1 className="title">About me.</h1>
          <p className="paragraph">
            Matthew is a developer based in Somerset
          <br></br>
          <br></br>He enjoys creating things that live on the internet
          </p>
        </div>
        <div className="techContainer">
        <div className="skills" id="skills" role="skills content">
          <div className="max-width-limit">
            <h2 className="skills-title">Skills</h2>
            <div className="skill-icon-container">
              <img src={git} alt="git"></img>
              <img src={html5} alt="HTML5"></img>
              <img src={php} alt="php"></img>
              <img src={node} alt="node"></img>
              <img src={sql} alt="php"></img>
              <img src={mongo} alt="node"></img>
              <img src={react} alt="node"></img>
              <img src={express} alt="php"></img>
              <img src={aws} alt="node"></img>
            </div>
          </div>
        </div> 
        </div>
      <div class="portfolio" id="projects" role="project content">
		    <div class="max-width-limit">
            <h2 class="project-heading">A Few Personal Projects</h2>
          <div class="container projects">
            <div class="project-card">
              <h3>Aptitude tests</h3>
              <div class="project-image crypto">
                <div class="card-overlay">
                  <div class="overlay-text">

                    <h4>Aptitude tests</h4>

                    <p>
                      <span>An aptitude test that asks a series of questions and marks academy applications on their answers</span>
                    </p>


                    <div class="project-icons">
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="project-card">
              <h3>Cat Api</h3>
              <div class="project-image darkcrusade">
                <div class="card-overlay">
                  <div class="overlay-text">

                    <h4>Cat Api</h4>

                    <p>
                      <span>A cat Api, where users can select different breeds of cats and retrive information about them.</span>
                    </p>


                    <div class="project-icons">
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="project-card">
              <h3>Long dog maze game</h3>
              <div class="project-image dogmaze">
                <div class="card-overlay">
                  <div class="overlay-text">

                    <h4>Long dog maze game</h4>

                    <p>
                      <span>A dog themed maze game which must be navigated with a cursor, avoiding the brushes</span>
                    </p>


                    <div class="project-icons">

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="contact">
            <h1 className="contact-title">
              contact
            </h1>
            <p className="contact-paragraph">
              If you have questions please contact me at:
            </p>
            <p className="contact-email">
              matthew.ian.hammond@gmail.com
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}