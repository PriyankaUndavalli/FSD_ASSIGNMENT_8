// components/Gallery.js
import React from 'react';
import image1 from '../PHOTOS/beautifulg2.jpeg'
import image2 from '../PHOTOS/rings on handg1.jpeg'
import image3 from '../PHOTOS/maing3.jpeg'
import image4 from '../PHOTOS/potg4.jpeg'
import image5 from '../PHOTOS/holding handsg5.jpeg'
import image6 from '../PHOTOS/123g6.jpeg'
import image7 from '../PHOTOS/puppyg7.jpeg'
import image8 from '../PHOTOS/legsg8.jpeg'
import image9 from '../PHOTOS/a brideg9.jpeg'
import image10 from '../PHOTOS/couple.jpeg'
import image11 from '../PHOTOS/Memorable.jpeg'
import image12 from '../PHOTOS/moon.jpeg'
import image13 from '../PHOTOS/christ.jpg'
import image14 from '../PHOTOS/mehandi hands4.jpeg'
import image15 from '../PHOTOS/mumbai.jpg'
import image16 from '../PHOTOS/muslim.jpg'
function Gallery() {
  const images =  [
    {src: image1},
    {src:image2},
    {src:image3},
    {src:image4},
    {src:image5},
    {src:image6},
    {src:image7},
    {src:image8},
    {src:image9},
    {src:image10},
    {src:image11},
    {src:image12},
    {src:image13},
    {src:image14},
    {src:image15},
    {src:image16}

  ];

  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">our <span>gallery</span></h1>
      <div className="box-container">
        {images.map((image, index) => (
          <div className="box" key={index}>
            <img src={image.src} alt="not found" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
