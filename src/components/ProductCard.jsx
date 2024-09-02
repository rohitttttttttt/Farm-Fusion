import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate(`/ProductOverview`);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105">
      <div className="relative w-full pt-[100%] bg-gray-100">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        <div className="mt-4 flex justify-between">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md transition-colors duration-200 hover:bg-gray-900"
            onClick={handleBuyNowClick}
          >
            Buy Now
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md transition-colors duration-200 hover:bg-gray-900">
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
