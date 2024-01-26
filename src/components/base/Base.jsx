import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Base.css";
import avi from "../../assets/img/kadet_big.png";
import navLine from "../../assets/svgs/menu-line.svg";
import logo from "../../assets/img/smallavi.png";
import arrow from "../../assets/svgs/arrow.svg";

export class Base extends Component {
  render() {
    return (
      <div className='base_container'>
        <div className='hero'>
          <div className='intro_box'>
            <h1>
              Hello, I'm <br /> Toyyib Abayomi.
            </h1>
            <div className='avi'>
              <img src={avi} alt='avatar' />
            </div>
          </div>

          <div className='description'>
            <p>
              {/* <span>
                I'm a self-motivated <span className='highlight'>software developer</span>. I create interactive <span className="highlight two">experiences</span> and business <span className="highlight two">logics</span>  using <span className="highlight">best practices</span>. With over <span className="highlight two">2 years </span> of experience in developing <span className="highlight">industry-standard </span> software products, 
                during my career, I have transformed <span className="highlight two">challenges</span> into <span className="highlight two">opportunities</span> and turned intricate ideas into code that provides value for business.  I have had the opportunity to work for both <span className='highlight'>startups</span> and well-established <span className='highlight'>companies.</span>
              </span> */}
              <span>
              I'm a <span className="highlight two">software engineer</span> focused on solving <span className="highlight two">problems</span> using <span className="highlight two">frontend</span> and <span className="highlight two">backend</span> technologies. I am interested in <span className="highlight two">user experience</span>, business logic, <span className="highlight two">design engineering</span>, gaming, web3, cloud engineering and golang.
              </span>
            </p>
          </div>

          <div className='go_button_container'>
            <Link to='/work' className='explore'>
              <button className='explore'>
                Explore <span class='material-icons'><img src={arrow} alt='arrow' /></span>
              </button>
            </Link>
          </div>
        </div>

        <nav>
          <ul>
            <li className={this.props.menu[0]}>
              <small>
                00
                <Link to='/'>
                  <img src={navLine} alt='menu bullet' /> WORK
                </Link>
              </small>
            </li>

            <li className={this.props.menu[1]}>
              <small>
                01
                <Link to='/resume'>
                  <img src={navLine} alt='menu bullet' /> RESUME
                </Link>
              </small>
            </li>

            {/* <li className={this.props.menu[2]}>
              <small>
                02
                <Link to='/article'>
                  <img src={navLine} alt='menu bullet' /> ARTICLE
                </Link>
              </small>
            </li> */}

            <li className={this.props.menu[3]}>
              <small>
                02{" "}
                <Link to='/contact'>
                  <img src={navLine} alt='menu bullet' /> CONTACT
                </Link>
              </small>
            </li>
          </ul>
        </nav>

        <div className='footer'>
          <img src={logo} alt='' />
          <div className='social'>
            <a
              href='https://github.com/Simpleshaikh1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i> Github
              <img src={arrow} alt='pointer' />
            </a>

            <a
              href='https://twitter.com/simpleshaikh'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i> Twitter{" "}
              <img src={arrow} alt='pointer' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
