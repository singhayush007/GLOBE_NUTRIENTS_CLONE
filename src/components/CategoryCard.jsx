import "./CategoryCard.css";

export default function CategoryCard({ image, title }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-image" />
      <h4 className="category-title">{title}</h4>
    </div>
  );
}
