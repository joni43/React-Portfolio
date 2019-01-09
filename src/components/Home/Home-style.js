import styled from 'styled-components'

export const Image = styled.img`
width:100%
`

export const ContainerImage = styled.div`
height:80vh;
background-image: url('${require('../../assets/Flat-Mountains.svg')}');
background-repeat:no-repeat;
background-size:cover;
background-position:center;

display:flex;
flex-direction: column;
align-content:center;

justify-content:center;
color:#fff
font-size:2em;


`