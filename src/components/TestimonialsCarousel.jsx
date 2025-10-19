import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./TestimonialsCarousel.css";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Abhishek",
      image: "https://globenutrients.com/wp-content/uploads/2024/04/team_image2.jpg",
      text: "Globe Nutrients is my go-to for top-notch supplements! Their products really made a difference in my workouts. Highly recommend!",
      rating: 5,
    },
    {
      id: 2,
      name: "Mark Davis",
      image: "https://globenutrients.com/wp-content/uploads/2024/04/trainer-3-2-300x300-1.jpg",
      text: "Exceptional service! Fast shipping, authentic products, and great customer support.",
      rating: 5,
    },
    {
      id: 3,
      name: "Vikram",
      image: "https://globenutrients.com/wp-content/uploads/2024/04/team_image2.jpg",
      text: "The best fitness supplement website! Everything from protein to recovery is available at fair prices.",
      rating: 5,
    },
    {
      id: 4,
      name: "Jasmine",
      image: "https://globenutrients.com/wp-content/uploads/2024/04/home-testimonial-1-1.webp",
      text: "I love shopping here! Excellent quality and noticeable results in my energy and strength.",
      rating: 5,
    },
  ];

  // current slide index
  const [index, setIndex] = useState(0);

  // auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="testimonials-section">
      <h2 className="section-heading">What Customers Say</h2>

      <div className="carousel-container">
        <button className="arrow left" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * (100 / 3)}%)`,
            }}
          >
            {/* clone items for infinite effect */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <img src={t.image} alt={t.name} className="testimonial-image" />
                <h3 className="testimonial-name">{t.name}</h3>
                <p className="testimonial-text">"{t.text}"</p>
                <p className="testimonial-rating">{"⭐".repeat(t.rating)}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

