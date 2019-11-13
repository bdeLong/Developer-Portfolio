import React, { Component } from "react";

export default class About extends Component {
  handleScroll(e) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    window.addEventListener("touchstart", function mobileTouch(e) {
      window.removeEventListener("touchstart", mobileTouch);
    });
  }

  render() {
    return (
      <section className='about'>
        <h1>About me</h1>
        <p>
          I am a full stack web developer based in Chicago, IL looking to bring
          creativity and innovation to your team. I enjoy building everything
          from simple, static websites to rich, interactive web applications.
          When I'm not using my free time to code I can be found binging my
          favorite T.V. shows and kicking back with a cold beer.
        </p>
        <p>
          My experiences are wide-ranging and have helped me develop a unique
          sense of creativity and problem solving. I hold a Bachelor of Science
          degree from the University of Wisconsin-Madison as well as a Full
          Stack Web Development certificate from Northwestern University, and I
          am continuously learning and/or refining new techniques and
          frameworks.
        </p>
        <p>
          My projects include web applications with dynamic web content, live
          content update, and server side rendering all utilizing the MERN
          stack.
        </p>
        <p>
          Want to get in touch with me? Be it to work together, request more
          info about myself or my experience, to chat aimlessly about the
          universe and the meaning of life, or even to just tell me a funny
          joke... feel free to drop me a line anytime, I promise to reply
          A.S.A.P.
        </p>
        <div className='about-email'>
          <a
            href='mailto:bendelong45@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='about-social-link'
          >
            bendelong45@gmail.com
          </a>
        </div>
        <div className='about-links'>
          <a
            href='./images/Benjamin_deLong_Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='about-social-link'
          >
            Resume
          </a>
          <span>|</span>
          <a
            href='https://github.com/bdelong'
            target='_blank'
            rel='noopener noreferrer'
            className='about-social-link'
          >
            GitHub
          </a>
          <span>|</span>
          <a
            href='https://www.linkedin.com/in/benjaminmdelong/'
            target='_blank'
            rel='noopener noreferrer'
            className='about-social-link'
          >
            LinkedIn
          </a>
          <span>|</span>
          <a
            href='https://instagram.com/frost_beard'
            target='_blank'
            rel='noopener noreferrer'
            className='about-social-link'
          >
            Instagram
          </a>
        </div>

        <img
          className='scroll-up'
          src='./images/scroll-grey.png'
          alt='scroll'
          onClick={e => this.handleScroll(e)}
        />
        <h5>Back to Top</h5>
      </section>
    );
  }
}
