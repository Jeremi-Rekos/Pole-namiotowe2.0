import React, { useState } from "react";
import "./Galeria.css";
import FsLightbox from "fslightbox-react";

import img1 from "../assets/galeria/img1.jpg";
import img2 from "../assets/galeria/img2.jpg";
import img3 from "../assets/galeria/img3.jpg";
import img4 from "../assets/galeria/img4.jpg";
import img5 from "../assets/galeria/img5.jpg";
import img6 from "../assets/galeria/img6.jpg";
import img7 from "../assets/galeria/img7.jpg";
import img8 from "../assets/galeria/img8.jpg";
import img9 from "../assets/galeria/img9.jpg";
import img10 from "../assets/galeria/img10.jpg";
import img11 from "../assets/galeria/img11.jpg";
import img12 from "../assets/galeria/img12.jpg";
import img13 from "../assets/galeria/img13.jpg";
import img14 from "../assets/galeria/img14.jpg";
import img15 from "../assets/galeria/img15.jpg";
import img16 from "../assets/galeria/img16.jpg";
import img17 from "../assets/galeria/img17.jpg";
import img18 from "../assets/galeria/img18.jpg";
import img19 from "../assets/galeria/img19.jpg";

function Galeria() {
  const [lightboxToggler, setLightboxToggler] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img13,
    img10,
    img11,
    img12,
    img9,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
  ];

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setLightboxToggler(!lightboxToggler);
  };

  return (
    <main className="galeria">
      <h1>Galeria</h1>
      <p>
        Nasze pole namiotowe w obiektywie – zobacz, jak wygląda wypoczynek z
        bliska!
      </p>

      <div className="galeria-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className="galeria-item"
            onClick={() => handleImageClick(index)}
          >
            <img data-aos="fade-up" src={src} alt={`Zdjęcie ${index + 1}`} />
          </div>
        ))}
      </div>

      <FsLightbox
        toggler={lightboxToggler}
        sources={images}
        slide={photoIndex + 1}
      />
    </main>
  );
}

export default Galeria;
