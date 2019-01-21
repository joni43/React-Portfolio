import React, { Component } from 'react'

import {Footer, Name} from './Contact-style'
import SocialLinks from '../Socialicons/SocialLinks'

class About extends Component {
    render() {
        return(
            <Footer>

            <Name>
                <h3>©2019 Jonathan Nilsson</h3>

                <SocialLinks></SocialLinks>
            </Name>
            </Footer>
        )
    }


}
export default About