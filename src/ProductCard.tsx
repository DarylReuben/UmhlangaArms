import './ProductCard.css';

type ProductCardProps = {
  label: string;
  image?: string;
};

const ProductCard = ({ label, image }: ProductCardProps) => (
  <div className={`product-card full-bg`}>
    {image && (
      <img
        src={image}
        alt={label}
        className="product-card-full-bg-img"
      />
    )}
    <div className="product-card-label">{label}</div>
  </div>
);

export default ProductCard; 