import ProductCard from './ProductCard';

const productLabels = [
  { label: 'Handguns', image: '/handgun.jpg' },
  { label: 'Shotguns', image: '/Shotgun.jpg' },
  { label: 'Rifles', image: '/rifle.jpeg' },
  { label: 'Bullets', image: '/bullets.jpg' },
  { label: 'Collectibles', image: '/collectibles.jpeg' },
];

const ProductsSection = () => (
  <div style={{padding: '3rem 0', textAlign: 'center'}}>
    <h2>Products</h2>
    <div className="products-grid">
      {productLabels.map(({label, image}) => (
        <ProductCard key={label} label={label} image={image} />
      ))}
    </div>
  </div>
);

export default ProductsSection; 