import React, { Component } from "react";
import {NavigationContainer, NavItem} from './Navigation.style'
import { Link, animateScroll as scroll } from "react-scroll"
class Navigation extends Component {
    render() {
        return (
        <NavigationContainer>

            <NavItem >
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>

             </NavItem>
            <NavItem to="/about"> About </NavItem>

            <NavItem>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </NavItem>

            <NavItem to="/contact"> Contact </NavItem>
        </NavigationContainer>
        )
    }
}

export default Navigation
