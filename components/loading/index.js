import React, { Component } from "react";
import { withTheme } from "styled-components";
import { _ReactLoading } from "./_styled";

class Loading extends Component {
  render() {
    const { theme } = this.props;
    const { colors } = theme;
    const { highlighted } = colors;

    return (
      <_ReactLoading type="spin" color={highlighted} />
    );
  }
}

export default withTheme(Loading);
