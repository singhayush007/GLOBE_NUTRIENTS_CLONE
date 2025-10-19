import CategoryCard from "./CategoryCard";
import "./CategorySection.css";

const categoryData = [
  { image: "https://i0.wp.com/globenutrients.com/wp-content/uploads/2024/05/glutamine.png?resize=480%2C480&ssl=1", title: "Glutamine" },
  { image: "https://i0.wp.com/globenutrients.com/wp-content/uploads/2024/05/l-Argininr.png?resize=480%2C480&ssl=1", title: "L-Arginine" },
  { image: "https://i0.wp.com/globenutrients.com/wp-content/uploads/2024/05/isolate.png?resize=480%2C480&ssl=1", title: "Isolate" },
  { image: "https://i0.wp.com/globenutrients.com/wp-content/uploads/2024/05/l-carnitine-1.png?w=400&ssl=1", title: "L-Carnitine" },
];

export default function CategorySection() {
  return (
    <div className="category-section">
      <h2 className="section-heading">Categories</h2>
      <div className="category-grid">
        {categoryData.map((item, index) => (
          <CategoryCard key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
}
