import styled , {css} from 'styled-components'


export const Div = styled.div`
${({marginBottom}) => marginBottom && css`
margin-bottom: ${marginBottom}
`}
`
export const Container = styled(Div)`
padding-left:68px;
padding-right: 58px;
padding-top: 30px;
`

export const Index = styled.div`
position:absolute;
bottom:0:
z-index:-1;
font-size:3em;
h1{
    margin:0;
    font-weight:bold;
    color:yellow;
    opacity:0.5;
    transform: translateY(20%)
}
`
export const ImageContainer = styled.div`
width:800px;
margin-left:auto;
margin-right:auto;
`
export const Flex = styled(Div)`
position:relative;
`