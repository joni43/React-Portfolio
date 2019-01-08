import React, { Component, PropTypes} from 'react'
import styled from 'styled-components'
import {Container} from '../Styled-comp/grid'
import {Image, ContainerImage} from './Home-style'
import SocialLinks from '../../components/SocialLinks'

export default class Home  extends Component {
    static propTypes = {}

    render() {
        return (
            <Container>

                <ContainerImage>
                    <h1>Jonathan Nilsson</h1>
                    <h2>Front-end Developer</h2>
             <SocialLinks></SocialLinks>
                </ContainerImage>

                </Container>
        )
    }
}