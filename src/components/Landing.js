import React, { Component } from "react";
import TextLoop from "react-text-loop";

export default class Landing extends Component {
  handleScroll(e) {
    console.log("sup");
    let animate = setInterval(function() {
      if (window.scrollY >= window.innerHeight) {
        clearInterval(animate);
        return;
      }
      window.scroll({
        top: window.scrollY + (window.innerHeight + 64 - window.scrollY) / 24,
        left: 0
        // scrollbehavior: "smooth"
      });
      window.addEventListener("touchstart", function mobileTouch(e) {
        clearInterval(animate);
        window.removeEventListener("touchstart", mobileTouch);
      });
    }, 25);
  }

  render() {
    return (
      <header className='landing'>
        <h1 className='name'>Benjamin deLong</h1>
        <h2 className='title'>
          <TextLoop
            interval={2000}
            mask={true}
            children={[
              "Web Developer",
              "Analyst",
              "Outdoorsman",
              "Softball Player",
              "Netflix Binger",
              "SciFi & Fantasy Fan",
              "Metal Head",
              "Beer Drinker",
              "Continuous Learner",
              "Video Gamer",
              "Book Worm"
            ]}
          ></TextLoop>{" "}
          | Chicago, IL
        </h2>
        <img
          className='landing-img'
          src='.././images/beer2.png'
          alt='Cheers!'
        />
        <div className='email'>
          <a
            href='mailto:bendelong45@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='social-link'
          >
            bendelong45@gmail.com
          </a>
        </div>
        <div className='links'>
          <a
            href='https://github.com/bdelong'
            target='_blank'
            rel='noopener noreferrer'
            className='social-link'
          >
            GitHub
          </a>
          <span>|</span>
          <a
            href='https://www.linkedin.com/in/benjaminmdelong/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-link'
          >
            LinkedIn
          </a>
          <span>|</span>
          <a
            href='https://instagram.com/frost_beard'
            target='_blank'
            rel='noopener noreferrer'
            className='social-link'
          >
            Instagram
          </a>
        </div>
        <img
          className='scroll-down'
          src='../../images/scroll2.png'
          alt='scroll'
          onClick={e => this.handleScroll(e)}
        />
      </header>
    );
  }
}
