import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    const skills = `let skillsChecklist = {

frontEnd: ['HTML5', 'JavaScript ES6', 'CSS3', 'jQuery', 'React.js', 'Bootstrap4'],

backEnd: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Firebase'],

tools: ['Github', 'Heroku', 'Git', 'Some Photoshop']

}`;
    return (
      <section className='skills'>
        <pre>{skills}</pre>
        <footer>© 2019 Ben deLong. All rights reserved.</footer>
      </section>
    );
  }
}
