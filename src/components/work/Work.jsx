import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import Project from "../utils/project/Project";
import uuid from "react-uuid";
// import Locum from "../../assets/img/locum-dashboard.png";
import Buddy from "../../assets/img/buddy.jpg";
// import Myxalary from "../../assets/img/myxalary-payroll.png";
import Hackathon from "../../assets/img/get-linked-hackathon.png";
import Cloud from "../../assets/img/cloud.jpg";
// import Credence from "../../assets/img/credence.png";
import Share from "../../assets/img/sharecoin.png";

export class Work extends Component {
  state = {
    projects: [

      // {
      //   id: uuid(),
      //   title: "Locum Space",
      //   description: "Booking appointment with doctors in real time.",
      //   github: "https://github.com/LocumSpace/LocumSpaceWeb",
      //   live: "https://locum-ba5f5.firebaseapp.com/",
      //   stack: "React + Styled Components + NestJs",
      //   isPrivate: false,
      //   backgroundImage: Locum,
      // },

      // {
      //   id: uuid(),
      //   title: "MyXalary",
      //   description: "An all-in-one HRM software.",
      //   github: "https://myxalary.com/",
      //   live: "https://www.linkedin.com/company/myxalary/",
      //   stack: "Angular + Socket.io + Express",
      //   isPrivate: false,
      //   backgroundImage: Myxalary,
      // },

      // {
      //   id: uuid(),
      //   title: "Credence",
      //   description: "Fueling Agribusiness",
      //   bitbucket: "https://bitbucket.org/credence-app1/credence-frontend/",
      //   live: "https://credenceapp.co/",
      //   stack: "React + Redux + NodeJs",
      //   isPrivate: false,
      //   backgroundImage: Credence,
      // },

      {
        id: uuid(),
        title: "TellTheClouds",
        description: "Flight Booking App",
        github: "https://github.com/Wineshuga/tell_the_clouds",
        live: "https://telltheclouds.onrender.com/",
        stack: "React + SASS",
        isPrivate: false,
        backgroundImage: Cloud,
      },

      {
        id: uuid(),
        title: "Hackathon",
        description: "Front-end coding challenge.",
        github: "https://github.com/Simpleshaikh1/hackathon",
        live: "https://65858d46bd2a38ccc2df10fe--toyyib-hackathon.netlify.app/",
        stack: "React",
        isPrivate: false,
        backgroundImage: Hackathon,
      },

      {
        id: uuid(),
        title: "Budget Buddy",
        description: "BuddyBudget is a mobile design web application where you can manage your budget",
        github: "https://github.com/Simpleshaikh1/BudgetBuddy",
        live: "https://smartbudget-mhwp.onrender.com/",
        stack: "React + Redux + NodeJs",
        isPrivate: false,
        backgroundImage: Buddy,
      }, 

      {
        id: uuid(),
        title: "Share Coin",
        description: "Numeric Value of Stock Data",
        github: "https://github.com/Simpleshaikh1/Metric-App",
        live: "https://metric-app-v1.netlify.app/",
        stack: "React + Redux",
        isPrivate: false,
        backgroundImage: Share,
      }, 
    ],
  };

  componentDidMount() {
    this.props.activeMenu(0);
  }

  render() {
    return (
      <div className='work'>
        <div className='portfolio_showcase'>
          {this.state.projects.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </div>

        <div className='go_button_container'>
          <Link to='/'>
            <button>
              <span class='material-icons'>arrow_left</span> Home
            </button>
          </Link>
          <Link to='/contact'>
            <button>
              Contact <span class='material-icons'>arrow_right</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work;
