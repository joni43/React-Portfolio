import React, { Component } from "react";
import {NavigationContainer, NavItem} from './Navigation.style'
import { Link, animateScroll as scroll } from "react-scroll"

class Navigation extends Component {
    render() {
        return (
        <NavigationContainer>

          <NavItem
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                Home

          </NavItem>

            <NavItem
            activeClass="active"

            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >


             About
            </NavItem>

          <NavItem
                activeClass="active"
                className="projects"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Projects

          </NavItem>

            <NavItem to="/contact"> Contact
            </NavItem>

        </NavigationContainer>
        )
    }
}

export default Navigation
