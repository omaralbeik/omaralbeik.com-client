// React
import React, {Component} from "react";

// Bootstrap
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

// Styled Components
import styled, {withTheme} from 'styled-components';
import {sm} from '../breakpoints';

// Components
import NavLink from '../components/NavLink';
import Separator from '../components/Separator';
import ThemeSwitch from '../components/ThemeSwitch';

// Links
import {navbarLinks} from '../links';


class Bar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  open() {
    this.setState({
      isOpen: true
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {menu} = this.props.theme.icons;

    return (
      <Container>
        <StyledNavbar expand="md">
          <Brand href='/'>Omar Albeik</Brand>
          <Toggler onClick={this.toggle}>
            <img src={menu} alt='Menu' />
          </Toggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-auto">
              {
                navbarLinks.map(l => (
                  <Item key={l.name}>
                    <NavLink activeClassName='active' exact to={l.url} onClick={_ => {this.close()}}>{l.name}</NavLink>
                  </Item>
                ))
              }
              <SwitchItem><ThemeSwitch/></SwitchItem>
            </Nav>
          </Collapse>
        </StyledNavbar>
        <Separator/>
      </Container>
    );
  }
}

const StyledNavbar = styled(Navbar)`
  margin-top: 12px;
  padding-bottom: 0;
  @media (${sm}) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Brand = styled(NavbarBrand)`
  font-size: 140%;
  color: ${props => props.theme.colors.selected};
  font-family: ${props => props.theme.fonts.title};
  font-weight: bolder;
  &:hover {
    color: ${props => props.theme.colors.highlighted};
  }
  @media (${sm}) {
    font-size: 160%;
  }
`;

const Item = styled(NavItem)`
  padding: 8px 10px 0 10px;
  font-weight: lighter;
  text-transform: uppercase;
  a {
    color: ${props => props.theme.colors.primary};
  }
  &:hover {
    font-weight: bolder;
  }
  .active {
    font-weight: bold;
    color: ${props => props.theme.colors.selected};
  }
  @media (${sm}) {
    text-align: center;
    font-size: 120%;
    margin: 12px 0 0 0;
    padding: 10px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.inner_background};
  }
`

const SwitchItem = styled(Item)`
  padding-top: 2px;
  background-color: ${props => props.theme.colors.background};
  @media (${sm}) {
    margin: 12px 0 0 0;
    padding: 4px 26px 10px 6px;
  }
`

const Toggler = styled(NavbarToggler)`
  padding-right: 4px;
  padding-left: 4px;
  &:focus {
    background-color: ${props => props.theme.colors.inner_background};
    outline: none;
  }
`

export default withTheme(Bar);
