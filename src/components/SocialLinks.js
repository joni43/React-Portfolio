import React, { Component } from 'react'
import {SocialLinksStyle} from './SocialLinks.style'
class SocialLinks extends Component {
    render() {
        return(
            <SocialLinksStyle>
            {/* LinkedIn */}
            <a href ="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
            >
            < i className="fab fa-linkedin" aria-hidden="true" />
            </a>

             {/** Github */}
             <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>

            </SocialLinksStyle>
        )
    }

}

export default SocialLinks