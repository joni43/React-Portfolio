import React, { Component } from "react";
import { CarouselContainer } from "./FetchAPI-style";

class NasaAPI extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5")
      .then(results => {
        console.log("results", results);
        return results.json();
      })
      .then(data => {
        console.log("data", data);
        let image = data
          .filter((pic, index) => {
            return index;
          })
          .map(pic => {
            console.log("image", pic.hdurl);
            return {
              id: pic.id,
              src: pic.hdurl,
              title: pic.title
            };
          });
        this.setState({ images: image });
      });
  }
  render() {
    return (
      <CarouselContainer
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        {this.state.images.map(pic => (
          <div className="Nasa-img" key={pic.id} id={pic.id}>
            <img src={pic.src} />
            <p className="legend">{pic.title}</p>
          </div>
        ))}
      </CarouselContainer>
    );
  }
}

export default NasaAPI;
