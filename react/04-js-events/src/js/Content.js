import React, { Component } from 'react';
import "../css/content.css";

class Content extends Component {
  handleChange(e) {
    const changedTitle = e.target.value;
    this.props.changeContent(changedTitle);
  }

  render() {
    return (
      <section>
        <input value={this.props.content} onChange={this.handleChange.bind(this)} />
        <br/><br/>
        {this.props.content}
      </section> 
    );
  }
}

export default Content;