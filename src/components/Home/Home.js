import React, { Component, PropTypes} from 'react'
import styled from 'styled-components'
import {Container} from '../Styled-comp/grid'
import {Image, ContainerImage} from './Home-style'
import SocialLinks from '../Socialicons/SocialLinks'

export default function Home({ title, subtitle, dark, id }) {
    return (
            <Container id={id}>

                <ContainerImage>
                    <h1>Jonathan Nilsson</h1>
                    <h2>Front-end Developer</h2>
             <SocialLinks></SocialLinks>
                </ContainerImage>

                </Container>
        )
    }
