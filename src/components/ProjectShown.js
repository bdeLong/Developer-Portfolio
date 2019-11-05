import React, { Component, Fragment } from "react";

export default class ProjectShown extends Component {
  render() {
    const { link, github, img, title, description, category } = this.props;
    return (
      <div className={"project-shown " + category}>
        <div
          className='container'
          style={{ backgroundImage: `url('./images/${img}')` }}
        ></div>
        <div className='project-details'>
          <div>
            <h3 className='title'>
              <span>{title}</span>
            </h3>
            <p className='description'>{description}</p>
          </div>
          <div>
            {link ? (
              <Fragment>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  website
                </a>
                <span>|</span>
              </Fragment>
            ) : null}
            {github ? (
              <Fragment>
                <a href={github} target='_blank' rel='noopener noreferrer'>
                  github
                </a>
              </Fragment>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
