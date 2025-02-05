import React from "react";
import { useState } from "react";


import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";
import photo7 from "../assets/images/photo7.jpg";
import photo8 from "../assets/images/photo8.jpg";

const images = [photo1, photo2, photo3 , photo4, photo5, photo6, photo7, photo8];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div>
    <div className="gallery-heading"> <h1>My Photo Gallery</h1> </div>
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`photo ${index + 1}`} className="photo-image" onClick={() => setSelectedImage(image)} />
      ))}
    </div>
    {selectedImage && (
      <div className="lightbox" onClick={() => setSelectedImage(null)}>
        <button className="close-button" onClick={() => setSelectedImage(null)}>&times;</button>
        <img src={selectedImage} alt="full size" className="lightbox-image" />

      </div>
    )}
    </div>
  );
};

export default ProductGallery;
