// React
import React, {Component} from "react";

// Styled Components
import styled, {withTheme} from 'styled-components';

// Redux
import {connect} from 'react-redux';
import {loadTheme} from '../actions';

// Bootstrap
import Switch from "react-switch";

// Themes
import { Light, Dark } from '../thems';

// Media
import lightIcon from '../images/icon-light-mode.svg';
import darkIcon from '../images/icon-dark-mode.svg';

class ThemeSwitch extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  loadTheme(theme) {
    this.props.loadTheme(theme);
  }

  handleChange(checked) {
    var theme = checked ? Dark : Light;
    this.loadTheme(theme)
  }

  render() {
    const {theme} = this.props;
    const {selected} = theme.colors;
    const checked = theme.id === 2

    return (
      <StyledSwitch
          onChange={this.handleChange}
          checked={checked}
          width={80}
          height={34}
          onColor={selected}
          activeBoxShadow={'0 0 1px 1px' + selected}
          uncheckedIcon={<img src={lightIcon} alt='Light Mode'/>}
          checkedIcon={<img src={darkIcon} alt='Dark Mode'/>}
      />
    );
  }

}

const StyledSwitch = styled(Switch)`
  margin-top: -5px;
  margin-left: 12px;
  margin-right: -10px;
`;

function mapStateToProps(theme) {
  return theme;
}

function mapDispatchToProps(dispatch) {
  return {
    loadTheme: theme => dispatch(loadTheme(theme))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ThemeSwitch));
