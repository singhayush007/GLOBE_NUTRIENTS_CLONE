import { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProductCarousel() {
  const products = [
    {
      image:
        "https://globenutrients.com/wp-content/uploads/2024/06/chocolate_chip_cookie.png",
      title: "GHOST (GH) WHEY PROTEIN 2LB",
      price: "₹83.94 – ₹83.95",
    },
    {
      image: "https://globenutrients.com/wp-content/uploads/2024/05/on-1.png",
      title: "Optimum Nutrition(ON) Gold Standard 100% Whey Protein, 5lbs",
      price: "₹170.00",
    },
    {
      image:
        "https://globenutrients.com/wp-content/uploads/2024/10/61Nn3buZO1L.jpg",
      title: "International Protein Superior Whey 2.27kg",
      price: "₹97.80 – ₹180.00",
    },
    {
      image:
        "https://i0.wp.com/globenutrients.com/wp-content/uploads/woocommerce-placeholder.png?fit=600%2C600&ssl=1",
      title: "Muscle Pharma Combat Whey",
      price: "₹70.00",
    },
    {
      image:
        "https://globenutrients.com/wp-content/uploads/2024/06/Untitled-1-8.png",
      title: "Optimum Nutrition Gold Standard 100% Whey Protein",
      price: "₹311.00",
    },
    {
      image:
        "https://globenutrients.com/wp-content/uploads/2024/06/PANCAKE.png",
      title: "GHOST VEGAN PROTEIN POWDER 2.2LB",
      price: "₹84.95",
    },
  ];

  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const total = products.length;

  // Auto slide
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
