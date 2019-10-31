import React, { Component } from "react";

export default class ProjectItem extends Component {
  render() {
    const { img, selected } = this.props;

    return (
      <div
        className={"project-item-container" + (selected ? " selected" : "")}
        onClick={this.props.select}
      >
        <div
          className='project-item'
          style={{ backgroundImage: `url('./images/${img}')` }}
        ></div>
      </div>
    );
  }
}
