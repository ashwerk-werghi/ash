import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import hi from './images/hi.jpg'
import Ahla from './images/Ahla.jpg'
import hola from './images/hola.jpg'
import seeu from './images/seeu.jpg'

import './Carousel.css';




export default function CArousel()
{
    return(
     <div className="just" >
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={hi}
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="style">
      <h3 >Welcome to our world</h3> 
      <p className="txxt">where love is our main belief.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={seeu}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="style">
      <h3>here we made our principales </h3>
      <p className="txxt">honesty,loyalty,trust,happiness and FOREVER</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={hola}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="style">
      <h3>and we shared our dreams</h3>
      <p className="txxt">FINLAND and THE MOON .</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

    );
}