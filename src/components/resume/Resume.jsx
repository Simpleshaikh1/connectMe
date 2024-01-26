import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

export class Resume extends Component {
  componentDidMount() {
    this.props.activeMenu(1);
  }

  render() {
    const experience = [
      {
        company: "Credence, Remote",
        position: "Backend Developer",
        started: "August 2023",
        ended: "Present.",
        description:
          "I Joined the Credence engineering team in building an Escrow Service, Market Place and Lending Service for agricultural produce.",
        achievements: [
          "I was part of the development and successful delivery of a Minimum Viable Product (MVP) for the Credence app, ensuring alignment with project goals and timelines.",
          "Continuously optimizes and refines the backend infrastructure to improve system responsiveness and meet evolving business requirements",
          "Worked closely with a senior dev to integrate graphQL and typescript.",
        ],
      },

      {
        company: "ATBtech",
        position: "Frontend Developer",
        started: "October 2022",
        ended: "October 2023",
        description:
          "I worked with the ATBtech product team to build a web application for a fintech company",
        achievements: [
          "Transformed figma prototypes to functional UIs using Angular  and sass",
          "Made use of tools like Jira for task management and feedback",
          "Played a pivotal role in the successful delivery of comprehensive implementations aligned with client specifications.",
          "Collaborated seamlessly with cross-functional teams encompassing engineers, DevOps specialists, and Testers, utilizing platforms like BitBucket and Azure"
        ],
      },

      {
        company: "Cogieni",
        position: "Backend Developer",
        started: "August 2022",
        ended: "December 2022",
        description:
          "I Contributed as an integral member of a dynamic team at Cogieni, participating in the development of a robust waste management system.",
        achievements: [
          "Demonstrated proficiency in both backend and frontend domains, exhibiting versatility and a holistic understanding of system architecture.",
          "Pioneered the construction of a waste management system API with the goal of securing recognition from the federal government of Nigeria, showcasing innovation and technical prowess.",
        ],
      },

      {
        company: "Skillup Africa. Intership",
        position: "Backend Developer",
        started: "November 2021",
        ended: "October 2022",
        description:
          "Worked with a team of skilled backend developers, exhibiting strong leadership in planning, organization, and architectural design.",
        achievements: [
          "Guided through the development of a sophisticated blog site, collaborating seamlessly with front-end developers within an Agile framework.",
          "Contributed significantly to the creation of a blood bank project, engaging JIRA as a collaborative tool to enhance efficiency.",
        ],
      },
    ];

    return (
      <div className="resume">
        <div className="resume_container">
          <div className="top_row">
            <h2>Toyyib Abayomi</h2>
            <div className="buttons">
              <a
                href="https://www.linkedin.com/in/toyyib-abayomi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fab fa-linkedin"></i> <span>Linked In</span>
                </small>
              </a>
              <a
                href="https://docs.google.com/document/d/1B0lHdwbyLFcbMGGzcCqOd4Xh0N3Fa99QFD9iKjWw_aE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fas fa-download"></i> <span>Download </span>
                </small>
              </a>
            </div>
          </div>

          <p className="subheading">Software Developer</p>

          <div className="summary">
            <p>
              I’m a software developer, passionate about transforming
              ideas from pixels to scalable products. I create functional
              applications with user experience as top priority.
            </p>
          </div>

          <div className="divider">
            <p>Core Technologies</p>
            <span></span>
          </div>

          <div className="skills">
            <p>
              HTML/CSS, SASS, Javascript [ES6], React Js, Angular, Node Js, Express, Ruby on Rails,
              CSS-in-JS, PostgreSQL, Redux, Firebase.
            </p>
          </div>

          <div className="divider">
            <p>Familiar With</p>
            <span></span>
          </div>

          <div className="skills">
            <p>
              Typescript, Flux, Next Js, Emotion CSS, Web Sockets, PWAs, Wordpress,
              SEO.
            </p>
          </div>

          <div className="divider">
            <p>On The Job</p>
            <span></span>
          </div>

          <div className="skills">
            <p>Scrum, CI/CD, Version Control, Best Practices</p>
          </div>

          <div className="divider">
            <p>Experience</p>
            <span></span>
          </div>

          <div className="exp_container">
            {experience.map((exp, index) => (
              <section className="experience" key={index}>
                <p className="title">
                  {exp.company} - <i>{exp.position}</i>
                  <span>
                    <br /> {exp.started.toUpperCase()} -{" "}
                    {exp.ended === null ? "PRESENT" : exp.ended.toUpperCase()}
                  </span>
                </p>

                <article className="description">
                  <p> {exp.description} </p>
                  {exp.achievements.map((achievement, index) => (
                    <p key={index}>
                      <span>■</span> {achievement}
                    </p>
                  ))}
                </article>
              </section>
            ))}
          </div>

          <div className="divider">
            <p>Education</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <p className="title">
                National Open University of Nigeria — B.Sc,
                Computer Science
                <span>
                  <br /> 2019-2024
                </span>
              </p>
            </section>
          </div>

          <div className="divider">
            <p>Projects</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <article className="description">
                <p>
                  Links to my works can be found on <span> </span>{" "}
                  <Link to="/work">toyyib.dev/work</Link>{" "}
                </p>
              </article>
            </section>
          </div>
        </div>

        <div className="go_button_container">
          <Link to="/contact">
            <button>
              <span class="material-icons">arrow_left</span> Contact
            </button>
          </Link>
          <Link to="/">
            <button>
              Home <span class="material-icons">arrow_right</span>{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Resume;
