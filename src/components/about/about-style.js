import styled from 'styled-components'
import  {Flex, Grid} from '../Styled-comp/grid'


export const AboutSection = styled(Flex)`
box-sizing: border-box
max-width: 950px;
margin: 0 auto;
color:#d6b190;
padding: 40px;
border-radius:40px
padding-top:90px;
background-color:brown;
align-self: center;
padding-bottom:70px

h1,h2,h3,h4,h5 {
    font-weight:800;
}

.flex-grid{

    {


        display: flex;
        flex-basis:0
      }
      .col {


  box-sizing: border-box;
        flex: 1;

      }

      .large_icon {

    }
    .icon-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        // color: #9b9b9b;
    }
    li {
        display: list-item;
        text-align: -webkit-match-parent;
        margin:20px;

    }
    .icon-list i p {
        margin-right:14px;
      }
}
`


export const InfoSection = styled(Grid)`


.fas {
    margin-right:12px;
}
p {

    color:black;

    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
h4{
    color:#EFDFD1;
    font-size:16;
`
export const TextContent = styled(Grid)`
width:80%;


`







// import React, { Component } from 'react'
// import {AboutSection,InfoSection,TextContent} from './about-style.js'
// class About extends Component {
//     render () {
//         return (
//             <AboutSection>

//                 <InfoSection>
//                 <TextContent>
//                     <h4>
//                     <i class="fas fa-user-circle"></i>
//                         About

//                        <p>
//                        I am a student  at KYH  where i study to become a Front-End Developer. In two years i hopefully will be a full-featured
//                        webbdeveloper, specialization in frontend
//                        </p>

//                     </h4>



//                     <h4>
//                     <i class="fas fa-graduation-cap"></i>
//                     Education

//                         <h5>Front End

//                         </h5>
//                         <i class="fas fa-book"></i>

//                     </h4>

//                     <h4>
//                     <i class="fas fa-graduation-cap"></i>
//                     Knowledge

//                         <h5>Javascript

//                         </h5>
//                         <i class="fas fa-book"></i>

//                     </h4>
//                     </TextContent>
//                 </InfoSection>


//             </AboutSection>
//         )

//         <div className="flex-grid">
//   <div className="col"></div>
//   <div className="col"></div>
//   <div className="col"></div>
// </div>
//     }
// }

// export default About