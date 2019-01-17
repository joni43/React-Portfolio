import React, { Component } from "react";
import {APIContainer} from './FetchAPI-style'
import { Carousel } from 'react-responsive-carousel';

import './FetchAPI-style.css'

class MarsAPI extends Component {
    constructor() {

        super()
        this.state = {
            images:[],
        }

    }

    componentDidMount () {

        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
        .then(results => {
            console.log('results',results)
            return results.json()
        }).then(data => {
            console.log('data',data)
            let image = data.filter((pic, index) => {
                return index
            }).map((pic) => {
                console.log('image', pic.hdurl)
                return({
                    id: pic.id,
                    src: pic.hdurl,
                    title: pic.title
                })
            })
            this.setState({images: image});


        })
    }
    render() {
        return (
        <Carousel showThumbs={false} showArrows={false} showStatus={false}>

            {this.state.images.map((pic) => (
                <APIContainer>
                <div className="Nasa-img" key={pic.id} id={pic.id} >
                <img src={pic.src} />
                <p className="legend">{pic.title}</p>
                </div>


            </APIContainer>
            ))}
            </Carousel>
        )
    }
}

export default MarsAPI
