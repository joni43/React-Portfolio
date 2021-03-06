import styled from 'styled-components'
import  {Flex} from '../Styled-comp/grid'
import { Link } from "react-scroll"

export const NavigationContainer = styled(Flex)`

display: flex;
flex-direction:row;
justify-content:center;
flex-wrap:wrap;
top:1.5em;
color:white;
position: fixed;
left: 0;
right: 0;
background: #EEDDCF;
padding: 10px;
z-index: 99;
margin-top: -21px;
`

export const NavItem = styled(Link)`
list-style-type: none;
margin: 10px;
color:#D5B192;
font-family: 'Roboto Mono', monospace;
font-size:1.5em;
cursor:pointer;

&:hover {
    color:white;
    background-color:#804614;
    transform:scale(1.2);
}

`

