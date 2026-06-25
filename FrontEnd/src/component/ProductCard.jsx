import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: Math.random(),
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="card h-100 shadow-sm product-card-container">
      <div className="product-card-img-wrapper">
        {product.sale && <div className="product-card-sale-badge">Sale</div>}
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-body d-flex flex-column p-2 product-card-body">
        <h6 className="card-title mb-1 mt-1 product-card-title">
          {product.name}
        </h6>
        <p className="text-muted mb-3 product-card-weight">
          "1 piece"
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="product-card-price">
            ₹{product.price.toFixed(2)}
          </div>
          <button onClick={handleAdd} className="btn btn-sm shadow-none product-card-add-btn">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
