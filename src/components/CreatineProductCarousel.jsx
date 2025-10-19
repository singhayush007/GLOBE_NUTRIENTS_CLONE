import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const creatineData = [
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/woocommerce-placeholder.png?resize=300%2C300&ssl=1",
    title: "Muscle Tech Alpha Test",
    price: "₹30.00",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/woocommerce-placeholder.png?resize=300%2C300&ssl=1",
    title: "Muscle Tech Test HD Elite",
    price: "₹60.00",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/woocommerce-placeholder.png?resize=300%2C300&ssl=1",
    title: "Muscle Tech Creatine Monohydrate Powder",
    price: "₹30.00",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/woocommerce-placeholder.png?resize=300%2C300&ssl=1",
    title: "Muscle Tech Platinum Creatine 90ct (Capsule)",
    price: "₹30.00",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/woocommerce-placeholder.png?resize=300%2C300&ssl=1",
    title: "Cell Tech Fruit Creatine - Muscle Tech",
    price: "₹100.00",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/woocommerce-placeholder.png?resize=300%2C300&ssl=1",
    title: "Muscle Tech Creatine Fusion",
    price: "₹50.00",
  },
];

export default function CreatineProductCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const total = creatineData.length;

  const visibleCards = 5; // 5 cards per view

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  // Infinite loop effect
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "transform 0.6s ease-in-out";
    track.style.transform = `translateX(-${(index * 100) / visibleCards}%)`;

    if (index >= total) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(0);
        track.style.transform = `translateX(-0%)`;
      }, 600);
    }

    if (index < 0) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(total - 1);
        track.style.transform = `translateX(-${
          ((total - 1) * 100) / visibleCards
        }%)`;
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
          {[...creatineData, ...creatineData].map((item, i) => (
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
