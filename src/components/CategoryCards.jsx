import Card from "./Card";
import "./Card.css";

const cardData = [
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/2025/09/ruleonefooter.png?w=600&ssl=1",
    title: "Proteins",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/2025/09/Pre_workout.png?w=400&ssl=1",
    title: "Pre-Workouts",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/2024/05/omega-3-fish_oil-1.png?w=400&ssl=1",
    title: "Omega-3",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/2024/05/multivitamines-1.png?w=400&ssl=1",
    title: "Multivitamins",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/2024/05/l-carnitine-2.png?w=400&ssl=1",
    title: "L-Carnitine",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/2025/09/Bcaa.png?w=400&ssl=1",
    title: "BCAA",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/2024/05/Protine-bar-1.png?w=400&ssl=1",
    title: "Protein Bars",
  },
  {
    image:
      "https://i0.wp.com/globenutrients.com/wp-content/uploads/2024/05/gym_accessery-1.png?w=400&ssl=1",
    title: "Accessories",
  },
];

export default function CategoryCards() {
  return (
    <div className="category-cards-container">
      {cardData.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} />
      ))}
    </div>
  );
}
