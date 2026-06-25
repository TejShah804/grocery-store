import React from 'react';
import Header from "../component/header/Header";

const products = [
  { id: 1, name: 'Green Apple', price: 180.0, image: 'Img/p1.png' },
  { id: 2, name: 'Fresh Indian Malta', price: 850.0, image: 'Img/p2.png' },
  { id: 3, name: 'Chinese Cabbage', price: 184.0, image: 'Img/p3.png' },
  { id: 4, name: 'Green Lettuce', price: 180.0, image: 'Img/p4.png' },
  { id: 5, name: 'Eggplant', price: 184.0, image: 'Img/p5.png' },
  { id: 6, name: 'Fresh Cauliflower', price: 14.99, image: 'Img/p6.png' },
  { id: 7, name: 'Green Apple', price: 14.0, image: 'Img/p7.png', sale: true },
  { id: 8, name: 'Green Lettuce', price: 14.0, image: 'Img/p8.png' },
  { id: 9, name: 'Ladies Ginger', price: 14.0, image: 'Img/p9.png' },
  { id: 10, name: 'Green Capsicum', price: 184.0, image: 'Img/p10.png' },
  { id: 11, name: 'Red Chilli', price: 184.0, image: 'Img/p3.png' },
  { id: 12, name: 'Red Tomato', price: 180.0, image: 'Img/p4.png' },
];

const ProductList = () => {
  return (
    <div className="container px-0 my-3">
      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <img
            src="Img/Discount Bannar (2).png"
            alt="Discount Banner"
            className="img-fluid w-100"
          />
        </div>
      </div>

      <div className="d-flex flex-wrap gap-2 filter-bar mb-4">
        <select className="form-select w-auto">
          <option>Select Category</option>
          <option>Vegetables</option>
          <option>Fruits</option>
        </select>
        <select className="form-select w-auto">
          <option>Select Price</option>
          <option>$0 - $10</option>
          <option>$10 - $20</option>
        </select>
      </div>

      <div className="row g-3 justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
            
              <div 
                className="card h-100 shadow-sm position-relative" 
                style={{ 
                  borderRadius: "12px", 
                  border: "1px solid #f0f0f0", 
                  overflow: "hidden", 
                  transition: "all 0.2s ease-in-out",
                  cursor: "pointer",
                  textAlign: "left"
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)"}
              >
                {/* Image Section */}
                <div style={{ position: "relative", width: "100%", height: "150px", backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                  
                  <div style={{ position: "absolute", top: "0", left: "0", backgroundColor: "#0066cc", color: "white", padding: "3px 8px", fontSize: "10px", fontWeight: "bold", borderBottomRightRadius: "8px", zIndex: 2 }}>
                    Sale
                  </div>
                  <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>

                {/* Content Section */}
                <div className="card-body d-flex flex-column p-2" style={{ backgroundColor: "#fff" }}>
                  {/* Title */}
                  <h6 
                    className="card-title mb-1 mt-1" 
                    style={{ 
                      fontSize: "14px", 
                      fontWeight: "600", 
                      color: "#222", 
                      display: "-webkit-box", 
                      WebkitLineClamp: 2, 
                      WebkitBoxOrient: "vertical", 
                      overflow: "hidden", 
                      textOverflow: "ellipsis", 
                      lineHeight: "1.4", 
                      minHeight: "40px" 
                    }}
                  >
                    {product.name}
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {product.description || "1 piece"}
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹{product.price.toFixed(2)}
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
                      className="btn btn-sm shadow-none"
                      style={{ 
                        color: "#318616", 
                        backgroundColor: "#f3fbf4", 
                        border: "1px solid #318616", 
                        borderRadius: "6px", 
                        padding: "4px 18px", 
                        fontWeight: "700", 
                        fontSize: "13px",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#318616"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#f3fbf4"; e.currentTarget.style.color = "#318616"; }}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
