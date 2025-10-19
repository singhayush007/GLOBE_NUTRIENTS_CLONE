import { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function BCAAProductCarousel() {
  const products = [
    {
      image:
        "https://globenutrients.com/wp-content/uploads/2024/06/Untitled-1-34.png",
      title: "Rule 1 Train BCAAs Orange Burst 30 Servings",
      price: "₹49.99",
    },
    {
      image:
        "https://globenutrients.com/wp-content/uploads/2024/06/Untitled-1-22.png",
      title: "RULE 1 ESSENTIAL AMINO 9, 30 Serv, 345G",
      price: "₹54.99",
    },
    {
      image:
        "https://globenutrients.com/wp-content/uploads/2024/06/Untitled-1-16.png",
      title: "Rule 1 BCAA 60 Servings, 432G",
      price: "₹65.99",
    },
    {
      image:
        "https://globenutrients.com/wp-content/uploads/2024/06/xtentWatermellon.png",
      title: "Scivation Xtend Ripped BCAA (30 Servings)",
      price: "₹69.95",
    },
    {
      image:
        "https://globenutrients.com/wp-content/uploads/2024/06/Untitled-1-35.png",
      title: "Xtend Original BCAA Powder (30 Servings)",
      price: "₹52.99",
    },
    {
      image:
        "https://i0.wp.com/globenutrients.com/wp-content/uploads/woocommerce-placeholder.png?resize=300%2C300&ssl=1",
      title: "International protein complete aminos",
      price: "₹75.00",
    },
  ];

  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const total = products.length;

  // Auto slide every 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  // Infinite loop effect
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "transform 0.6s ease-in-out";
    track.style.transform = `translateX(-${(index * 100) / 5}%)`;

    // When reaching the duplicate end, reset instantly
    if (index >= total) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(0);
        track.style.transform = `translateX(-0%)`;
      }, 600); // matches transition duration
    }

    // When going backward from first to last
    if (index < 0) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(total - 1);
        track.style.transform = `translateX(-${((total - 1) * 100) / 5}%)`;
      }, 600);
    }
  }, [index, total]);

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>
        <FaArrowLeft />
      </button>

      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {[...products, ...products].map((item, i) => (
            <ProductCard
              key={i}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
}
