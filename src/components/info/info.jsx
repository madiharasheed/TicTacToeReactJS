import React, { Component } from "react";

import "./info.css";

class Info extends Component {
  render() {
    return <header>{this.props.info}</header>;
  }
}

export default Info;
