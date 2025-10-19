import "./SectionHeader.css";

export default function SectionHeader({ title, buttonText }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <button className="section-button">
        {buttonText} <span className="arrow">→</span>
      </button>
    </div>
  );
}
