import React, { Component } from "react";
import {NavigationContainer, NavItem} from './Navigation.style'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link, animateScroll as scroll } from "react-scroll"

class NavigationMenu extends Component {
    render() {
        return (


            <div className="responsive-menu">
            <section className="burger-menu">
<Layout>

    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
        <Navigation>
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
        </Navigation>
    </Drawer>
    <Content>
        <div className="page-content" />

    </Content>
    </Layout>
</section>


<section className="plain-menu">



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
        </section>
        </div>
        )
    }
}




export default NavigationMenu
