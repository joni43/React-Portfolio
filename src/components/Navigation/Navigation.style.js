import styled from 'styled-components'
import  {Flex, Div} from '../Styled-comp/grid'
import { Link } from "react-scroll"

export const NavigationContainer = styled(Flex)`

display: flex;
flex-direction:row;
justify-content:center;
flex-wrap:wrap;
top:4.5em;
color:white;
`

export const NavItem = styled(Link)`

list-style-type: none;
margin: 10px;
font-family: 'Roboto Mono', monospace;
font-size:1.5em;
cursor:pointer;

&:hover {
    color:white;
    background-color:#804614;;
    // z-index:-1;
    transform:scale(1.2)
}

`
