import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    const skills = `let skillsChecklist = {

frontEnd: ['Javascript','ES6','React','HTML 5',
'CSS 3','JQuery','Bootstrap 4'],

backEnd: ['Node.js','MongoDB','Express','MySQL'],

tools: ['Github','Heroku','Git', 'Some Photoshop']

}`;
    return (
      <section className='skills'>
        <pre>{skills}</pre>
      </section>
    );
  }
}
