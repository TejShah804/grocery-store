import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../component/header/Header";
import "../style/header/header.css"
import { CartContext } from "../context/CartContext";
function Home() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <Header />

      {/* <!-- Bottom navigation --> */}

      <div className="container-fluid px-0">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img src="/Img/grocery-banner.jpg" className="d-block w-100" style={{ height: '600px', objectFit: 'cover' }} alt="Slide 1" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{ top: '0', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="banner-content text-center">
                  <h5 className="text-white text-uppercase mb-3" style={{ letterSpacing: '2px' }}>Fresh & Healthy</h5>
                  <h1 className="display-3 fw-bold text-white mb-4">
                    Your Daily <br />
                    Grocery Essentials
                  </h1>
                  <p className="lead text-white mb-4">Quality products delivered fresh to your door.</p>
                  <button className="btn btn-success btn-lg px-4 rounded-pill shop-btn" style={{ backgroundColor: '#00B207', border: 'none' }}>
                    Shop Now <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img src="/Img/Bannar%20Big.png" className="d-block w-100" style={{ height: '600px', objectFit: 'cover' }} alt="Slide 2" />
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <img src="/Img/Discount%20Bannar.png" className="d-block w-100" style={{ height: '600px', objectFit: 'cover' }} alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev" style={{ zIndex: 15 }}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next" style={{ zIndex: 15 }}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container py-4">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <div className="feature-box">
              <i className="bi bi-truck feature-icon"></i>
              <div>
                <div className="feature-title">Free Shipping</div>
                <div className="feature-text">
                  Free shipping on all your order
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <div className="feature-box">
              <i className="bi bi-headset feature-icon"></i>
              <div>
                <div className="feature-title">Customer Support 24/7</div>
                <div className="feature-text">Instant access to Support</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <div className="feature-box">
              <i className="bi bi-shield-check feature-icon"></i>
              <div>
                <div className="feature-title">100% Secure Payment</div>
                <div className="feature-text">We ensure your money is safe</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="feature-box">
              <i className="bi bi-box-seam feature-icon"></i>
              <div>
                <div className="feature-title">Money-Back Guarantee</div>
                <div className="feature-text">30 Days Money-Back Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 py-md-5">
        <div className="d-flex justify-content-between align-items-center mb-3 mb-md-4">
          <h4 className="mb-0 text-start" style={{ fontSize: "clamp(16px, 4vw, 22px)" }}>Popular Categories</h4>
          <a href="productlist" className="view-all" style={{ fontSize: "14px" }}>
            View All &rarr;
          </a>
        </div>
        {/* Mobile horizontal scroll, desktop grid */}
        <div className="d-md-none" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: "8px" }}>
          <div className="d-flex gap-2" style={{ minWidth: "max-content" }}>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/fresh-fruit")}>
              <img src="Img/image 1 (1).png" alt="Fresh Fruit" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Fresh Fruit</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/fresh-vegetables")}>
              <img src="Img/image 1 (1).png" alt="Fresh Vegetables" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Fresh Vegetables</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/meat-fish")}>
              <img src="Img/image 1 (2).png" alt="Meat &amp; Fish" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Meat &amp; Fish</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/snacks")}>
              <img src="Img/image 1 (3).png" alt="Snacks" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Snacks</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/beverages")}>
              <img src="Img/image 1 (4).png" alt="Beverages" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Beverages</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/dairy-eggs")}>
              <img src="Img/image 1 (5).png" alt="Dairy &amp; Eggs" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Dairy &amp; Eggs</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/bread-bakery")}>
              <img src="Img/image 1 (6).png" alt="Bread &amp; Bakery" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Bread &amp; Bakery</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/grains-pulses")}>
              <img src="Img/image 1 (7).png" alt="Grains &amp; Pulses" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Grains &amp; Pulses</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/spices-masala")}>
              <img src="Img/image 1 (8).png" alt="Spices &amp; Masala" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Spices &amp; Masala</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/diabetic-food")}>
              <img src="Img/image 1 (9).png" alt="Diabetic Food" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Diabetic Food</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/dish-detergents")}>
              <img src="Img/vim.png" alt="Dish Detergents" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Dish Detergents</div>
            </div>
            <div className="category-card" style={{ cursor: "pointer", minWidth: "100px", flexShrink: 0 }} onClick={() => navigate("/oil")}>
              <img src="Img/oil.png" alt="Oil" />
              <div className="category-card-title" style={{ fontSize: "12px" }}>Oil</div>
            </div>
          </div>
        </div>
        {/* Desktop grid view */}
        <div className="d-none d-md-block">
        <div className="row g-3">
          {/* <!-- Category Item --> */}
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/fresh-fruit')}>
              <img src="Img/image 1 (1).png" alt="Fresh Fruit" />
              <div className="category-card-title">Fresh Fruit</div>
            </div>
          </div>
          {/* <!-- Active Category --> */}
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/fresh-vegetables')}>
              <img src="Img/image 1 (1).png" alt="Fresh Vegetables" />
              <div className="category-card-title">Fresh Vegetables</div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/meat-fish')}>
              <img src="Img/image 1 (2).png" alt="Meat & Fish" />
              <div className="category-card-title">Meat & Fish</div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/snacks')}>
              <img src="Img/image 1 (3).png" alt="Snacks" />
              <div className="category-card-title">Snacks</div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/beverages')}>
              <img src="Img/image 1 (4).png" alt="Beverages" />
              <div className="category-card-title">Beverages</div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/dairy-eggs')}>
              <img src="Img/image 1 (5).png" alt="Beauty & Health" />
              <div className="category-card-title">Dairy & Eggs</div>
            </div>
          </div>

          {/* <!-- Second Row --> */}
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/bread-bakery')}>
              <img src="Img/image 1 (6).png" alt="Bread & Bakery" />
              <div className="category-card-title">Bread & Bakery</div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/grains-pulses')}>
              <img src="Img/image 1 (7).png" alt="Baking Needs" />
              <div className="category-card-title">Grains & Pulses</div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/spices-masala')}>
              <img src="Img/image 1 (8).png" alt="Cooking" />
              <div className="category-card-title">Spices & Masala</div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/diabetic-food')}>
              <img src="Img/image 1 (9).png" alt="Diabetic Food" />
              <div className="category-card-title">Diabetic Food</div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/dish-detergents')}>
              <img src="Img/vim.png" alt="Dish Detergents" />
              <div className="category-card-title">Dish Detergents</div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/oil')}>
              <img src="Img/oil.png" alt="Oil" />
              <div className="category-card-title">Oil</div>
            </div>
          </div>
        </div>
        </div>{/* end desktop grid */}
      </div>

      <div className="best-seller py-5 d-none d-md-block">
        <div className="container">
          <section id="product1">
            <h2 className="mb-4 text-start">Popular Products</h2>
            <div className="row g-3 justify-content-center">
              <div className="col-md-4 col-lg-2">
                
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
                  <img src="Img/p1.png" alt="Green Apple" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Green Apple
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹180.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Green Apple', price: 180.00, image: "Img/p1.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p2.png" alt="fresh Indian Malta" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    fresh Indian Malta
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹850.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'fresh Indian Malta', price: 850.00, image: "Img/p2.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p3.png" alt="Chinese cabbage" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Chinese cabbage
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹184.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Chinese cabbage', price: 184.00, image: "Img/p3.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p4.png" alt="Green Lettuce" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Green Lettuce
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹180.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Green Lettuce', price: 180.00, image: "Img/p4.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p5.png" alt="Eggplant" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Eggplant
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹184.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Eggplant', price: 184.00, image: "Img/p5.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p6.png" alt="Big Potatoes" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Big Potatoes
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹180.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Big Potatoes', price: 180.00, image: "Img/p6.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p7.png" alt="Corn" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Corn
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹850.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Corn', price: 850.00, image: "Img/p7.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p8.png" alt="Fresh Cauliflower" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Fresh Cauliflower
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹184.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Fresh Cauliflower', price: 184.00, image: "Img/p8.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p9.png" alt="Green Capsicum" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Green Capsicum
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹180.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Green Capsicum', price: 180.00, image: "Img/p9.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p10.png" alt="Green Chili" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Green Chili
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹184.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Green Chili', price: 184.00, image: "Img/p10.png"}); }}
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
              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p3.png" alt="Big Potatoes" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Green Lettuce
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹180.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Green Lettuce', price: 180.00, image: "Img/p3.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/Image (12).png" alt="Big Potatoes" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Big Potatoes
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹180.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Big Potatoes', price: 180.00, image: "Img/Image (12).png"}); }}
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
            </div>
          </section>
        </div>
      </div>

      

      <div className="container px-0 my-3 d-none d-md-block">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="discount-banner text-center">
              <img
                src="Img/Discount Bannar.png"
                alt="Discount Banner"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="best-seller py-5 d-none d-md-block">
        <div className="container">
          <section id="product1">
            <h2 className="mb-4 text-start">Featured Products</h2>
            <div className="row g-3 justify-content-center">
              <div className="col-md-4 col-lg-2">
                
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
                  <img src="Img/p1.png" alt="Green Apple" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Green Apple
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹180.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Green Apple', price: 180.00, image: "Img/p1.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p2.png" alt="fresh Indian Malta" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    fresh Indian Malta
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹850.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'fresh Indian Malta', price: 850.00, image: "Img/p2.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p3.png" alt="Chinese cabbage" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Chinese cabbage
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹184.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Chinese cabbage', price: 184.00, image: "Img/p3.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p4.png" alt="Green Lettuce" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Green Lettuce
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹180.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Green Lettuce', price: 180.00, image: "Img/p4.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p5.png" alt="Eggplant" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Eggplant
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹184.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Eggplant', price: 184.00, image: "Img/p5.png"}); }}
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

              <div className="col-md-4 col-lg-2">
                
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
                  
                  <img src="Img/p6.png" alt="Big Potatoes" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                    Big Potatoes
                  </h6>

                  {/* Weight / Desc */}
                  <p className="text-muted mb-3" style={{ fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    "1 piece"
                  </p>

                  {/* Price & Add Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#111" }}>
                      ₹180.00
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart({id: Math.random(), name: 'Big Potatoes', price: 180.00, image: "Img/p6.png"}); }}
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
            </div>
          </section>
        </div>
      </div>

     

      <div className="container py-5" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-4 text-start">Client Testimonial</h2>
          <div className="arrow-buttons">
            <button className="arrow-btn">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button className="arrow-btn active">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="row g-4">
          {/* <!-- Testimonial 1 --> */}
          <div className="col-md-4">
            <div className="testimonial-card">
              <div className="quote-icon">
                <img src="Img/Vector.png" alt="Quote Icon" />
              </div>
              <p>
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales.
              </p>
              <div className="user-info">
                <img src="Img/Image (33).png" alt="Robert Fox" />
                <div>
                  <p className="user-name">Robert Fox</p>
                  <p className="user-role">Customer</p>
                </div>
              </div>
              <div className="stars mt-2">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>
          {/*             
                <!-- Testimonial 2 --> */}
          <div className="col-md-4">
            <div className="testimonial-card">
              <div className="quote-icon">
                <img src="Img/Vector.png" alt="Quote Icon" />
              </div>
              <p>
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales.
              </p>
              <div className="user-info">
                <img src="Img/Image (34).png" alt="Dianne Russell" />
                <div>
                  <p className="user-name">Dianne Russell</p>
                  <p className="user-role">Customer</p>
                </div>
              </div>
              <div className="stars mt-2">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div className="col-md-4">
            <div className="testimonial-card">
              <div className="quote-icon">
                <img src="Img/Vector.png" alt="Quote Icon" />
              </div>
              <p>
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales.
              </p>
              <div className="user-info">
                <img src="Img/image (9).png" alt="Eleanor Pena" />
                <div>
                  <p className="user-name">Eleanor Pena</p>
                  <p className="user-role">Customer</p>
                </div>
              </div>
              <div className="stars mt-2">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center" style={{ gap: "20px" }}>
          <div className="col-auto">
            <img src="Img/c6.png" className="img-fluid" alt="Company 6" />
          </div>
          <div className="col-auto">
            <img src="Img/c1.png" className="img-fluid" alt="Company 1" />
          </div>
          <div className="col-auto">
            <img src="Img/c2.png" className="img-fluid" alt="Company 2" />
          </div>
          <div className="col-auto">
            <img src="Img/c3.png" className="img-fluid" alt="Company 3" />
          </div>
          <div className="col-auto">
            <img src="Img/c4.png" className="img-fluid" alt="Company 4" />
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Home;
