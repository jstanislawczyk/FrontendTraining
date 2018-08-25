import React, { Component } from 'react';
import "../css/content.css";

class Content extends Component {
  constructor() {
    super();

    this.state = {name: "Kuba"};
  }

  render() {
    setTimeout(() => {
      this.setState({name: "Changed Kuba"});
    }, 1500);

    return (
      <section>
        {this.state.name}
      </section> 
    );
  }
}

export default Content;