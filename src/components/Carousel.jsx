import { useState, useEffect } from "react";
import "./Carousel.css";

export default function Carousel() {
  const images = [
    "https://i0.wp.com/globenutrients.com/wp-content/uploads/2025/09/watch-Recovered1-scaled.jpg?resize=1080%2C405&ssl=1",
    "https://i0.wp.com/globenutrients.com/wp-content/uploads/2025/09/sale.png?resize=1080%2C405&ssl=1",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={`carousel-${currentIndex}`}
        className="carousel-image"
      />
    </div>
  );
}
