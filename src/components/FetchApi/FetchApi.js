import React, { Component } from "react";
import './FetchAPI-style.css'

class MarsAPI extends Component {
    constructor() {
        super()
        this.state = {
            images:[],
        }
    }

    componentDidMount () {

        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15')
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
                    src: pic.hdurl
                })
            })
            this.setState({images: image});
           console.log('TEST',data.results)
        })
    }
    render() {
        return (
            this.state.images.map((pic) => (
                <div className="Nasa-img" key={pic.id} id={pic.id} >
                <img src={pic.src} />
            </div>
            ))

        )
    }
}

export default MarsAPI
