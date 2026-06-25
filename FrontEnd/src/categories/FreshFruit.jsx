import React, { useContext, useEffect } from "react";
import Header from "../component/header/Header";

import { CartContext } from "../context/CartContext";
import products from "../data/product";

export default function FreshFruit() {
  const { cart, addToCart } = useContext(CartContext);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const categoryProducts = products.filter(p => p.category === "Fresh Fruit");

  return (
    <>
      <Header />
      <div className="container text-center my-5" style={{ minHeight: '60vh' }}>
        <h2 className="mb-4">Fresh Fruit</h2>
        <div className="row g-3 justify-content-center mt-2">
          {categoryProducts.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3">

              <div 
                className="card h-100 shadow-sm" 
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
                  {/* Optional Discount Tag (You can remove this if not needed) */}
                  <div style={{ position: "absolute", top: "0", left: "0", backgroundColor: "#0066cc", color: "white", padding: "3px 8px", fontSize: "10px", fontWeight: "bold", borderBottomRightRadius: "8px" }}>
                    5% OFF
                  </div>
                  <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>

                {/* Content Section */}
                <div className="card-body d-flex flex-column p-2" style={{ backgroundColor: "#fff" }}>

                  {/* Title */}
                  <h6 
                    className="card-title mb-1" 
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
                      ₹{product.price}
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
      </>
  );
}
