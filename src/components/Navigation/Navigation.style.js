import styled from 'styled-components'
import  {Flex, Div} from '../Styled-comp/grid'
import {Link} from 'react-router'

export const NavigationContainer = styled(Flex)`
position:fixed;
right: 0;
right:6rem;
top:2.5em;
color:white;
`

export const NavItem = styled(Link)`
margin-right:30px
list-style-type: none;
float: right;
font-family: 'Roboto Mono', monospace;
font-size:1.5em;
cursor:pointer;

&:hover {
    color:white;
    background-color:#804614;;
    z-index:-1;
    transform:scale(1.2)
}

`
