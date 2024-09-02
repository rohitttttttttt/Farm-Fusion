import React from 'react';
import './MarketplaceView.css';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import wheat from '../assets/wheat.png'
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: wheat,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
];

export default function MarketplaceView() {
  return (
    <>
      <Categories />
      <div>
        <h1 className='heading'>Shop here</h1>
      </div>

      <div className="product-grid-container">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
