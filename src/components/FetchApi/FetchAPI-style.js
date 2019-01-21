import styled from 'styled-components'
import  {Flex, Grid} from '../Styled-comp/grid'
import {Carousel} from 'react-responsive-carousel';



export const CarouselContainer = styled(Carousel)`
.carousel.carousel-slider {
    margin: 0;
    margin-left: 400px;
      max-width: 400px;
      width: 100%;
      overflow: hidden;
  }
  .carousel .slider {
  margin: 0;
      padding: 0;
      position: relative;
      list-style: none;
      width: 100%;
  }
  .Nasa-img {
    width: auto;
    height: 200px;
    size: 100px;
    vertical-align: top;

    /* border: 0; */
  }

  .ftvVKG {
    display: none;
  }
`








