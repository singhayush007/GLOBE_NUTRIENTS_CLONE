import "./ProductCard.css";

export default function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">
        {title.length > 30 ? title.slice(0, 30) + "..." : title}
      </h3>
      <p className="product-price">{price}</p>
    </div>
  );
}
