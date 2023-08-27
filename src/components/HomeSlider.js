import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import image1 from '../images/slider1.jpg'; // Replace with your image
//import image2 from '../images/slider2.jpg'; // Replace with your image

const HomeSlider = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src="/images/slider1.jpg" alt="Slider Image 1" height="400px" />
        <p className="legend">Welcome to Wahidiya Bookshop</p>
      </div>
      <div>
        <img src="/images/slider2.jpg" alt="Slider Image 2" height="400px"/>
        <p className="legend">Discover a World of Books</p>
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default HomeSlider;
