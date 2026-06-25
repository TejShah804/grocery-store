import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import products from "../data/product";
import { CartContext } from "../context/CartContext";

const categoriesList = [
  "Fresh Fruit",
  "Fresh Vegetables",
  "Meat & Fish",
  "Snacks",
  "Beverages",
  "Dairy & Eggs",
  "Bread & Bakery",
  "Grains & Pulses",
  "Spices & Masala",
  "Diabetic Food",
  "Dish Detergents",
  "Oil"
];

function Shop() {
  const { cart, addToCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const categoryFilter = query.get("category");

  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortOrder, setSortOrder] = useState("Latest");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtering
  let displayProducts = products.filter(p => {
    if (categoryFilter && p.category !== categoryFilter) return false;
    if (p.price > maxPrice) return false;
    return true;
  });

  // Sorting
  if (sortOrder === "Low to High") {
    displayProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "High to Low") {
    displayProducts.sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCategoryChange = (cat) => {
    navigate(`?category=${encodeURIComponent(cat)}`);
    setMobileFilterOpen(false);
  };

  const getCategoryCount = (cat) => {
    return products.filter(p => p.category === cat).length;
  };

  const selectedCategoryLabel = categoryFilter || "All Categories";

  return (
    <>
      <Header />

      <div className="container-fluid px-2 px-md-4 py-3">
        <div className="row g-3">

          {/* ── DESKTOP SIDEBAR (hidden on mobile) ── */}
          <div className="col-md-3 col-lg-3 d-none d-md-block">
            <div className="sidebar pe-2">
              <h5 className="category-title mt-3" style={{ textAlign: "justify" }}>
                All Categories
              </h5>
              <ul className="category-list" style={{ textAlign: "justify", listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <label style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                    <input
                      type="radio"
                      name="category"
                      checked={!categoryFilter}
                      onChange={() => navigate(location.pathname)}
                    />
                    All <span>({products.length})</span>
                  </label>
                </li>
                {categoriesList.map((cat, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    <label style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                      <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === cat}
                        onChange={() => handleCategoryChange(cat)}
                      />
                      {cat} <span>({getCategoryCount(cat)})</span>
                    </label>
                  </li>
                ))}
              </ul>

              <div className="filter-section mt-4">
                <h5 style={{ textAlign: "justify" }}>Prices</h5>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="2000"
                  step="50"
                  id="customRange2"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <label htmlFor="customRange2" className="form-label" style={{ display: "block", textAlign: "left" }}>
                  Price: ₹0 – ₹{maxPrice}
                </label>
              </div>
            </div>
          </div>

          {/* ── MOBILE FILTER DROPDOWN (visible only on mobile) ── */}
          <div className="col-12 d-md-none">
            <div className="mobile-filter-wrapper mb-2">
              {/* Trigger button */}
              <button
                className="btn w-100 d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #dee2e6",
                  borderRadius: "8px",
                  fontWeight: "600",
                  padding: "10px 16px"
                }}
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                aria-expanded={mobileFilterOpen}
              >
                <span>
                  <i className="bi bi-funnel me-2" style={{ color: "#00B207" }}></i>
                  {selectedCategoryLabel}
                  {categoryFilter && (
                    <span
                      className="ms-2 badge"
                      style={{ backgroundColor: "#00B207", fontSize: "11px" }}
                    >
                      ₹0–₹{maxPrice}
                    </span>
                  )}
                </span>
                <i className={`bi bi-chevron-${mobileFilterOpen ? "up" : "down"}`}></i>
              </button>

              {/* Dropdown panel */}
              {mobileFilterOpen && (
                <div
                  style={{
                    border: "1px solid #dee2e6",
                    borderTop: "none",
                    borderRadius: "0 0 8px 8px",
                    backgroundColor: "#fff",
                    padding: "16px",
                    zIndex: 100,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <p className="fw-semibold mb-2" style={{ color: "#333" }}>All Categories</p>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <label
                        className={`d-flex align-items-center gap-2 px-2 py-1 rounded ${!categoryFilter ? "bg-success bg-opacity-10" : ""}`}
                        style={{ cursor: "pointer", fontSize: "14px" }}
                      >
                        <input
                          type="radio"
                          name="cat-mobile"
                          checked={!categoryFilter}
                          onChange={() => { navigate(location.pathname); setMobileFilterOpen(false); }}
                          style={{ accentColor: "#00B207" }}
                        />
                        All ({products.length})
                      </label>
                    </div>
                    {categoriesList.map((cat, i) => (
                      <div className="col-6" key={i}>
                        <label
                          className={`d-flex align-items-center gap-2 px-2 py-1 rounded ${categoryFilter === cat ? "bg-success bg-opacity-10" : ""}`}
                          style={{ cursor: "pointer", fontSize: "13px" }}
                        >
                          <input
                            type="radio"
                            name="cat-mobile"
                            checked={categoryFilter === cat}
                            onChange={() => handleCategoryChange(cat)}
                            style={{ accentColor: "#00B207" }}
                          />
                          {cat} ({getCategoryCount(cat)})
                        </label>
                      </div>
                    ))}
                  </div>

                  <hr className="my-2" />

                  <p className="fw-semibold mb-2" style={{ color: "#333" }}>Price Filter</p>
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="2000"
                    step="50"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    style={{ accentColor: "#00B207" }}
                  />
                  <div className="d-flex justify-content-between" style={{ fontSize: "13px", color: "#555" }}>
                    <span>₹0</span>
                    <span style={{ fontWeight: "600", color: "#00B207" }}>Max: ₹{maxPrice}</span>
                    <span>₹2000</span>
                  </div>

                  <button
                    className="btn btn-success w-100 mt-3"
                    style={{ backgroundColor: "#00B207", border: "none", borderRadius: "8px" }}
                    onClick={() => setMobileFilterOpen(false)}
                  >
                    Apply Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ── PRODUCT SECTION ── */}
          <div className="col-12 col-md-9 col-lg-9">
            {/* Top bar: results count + sort */}
            <div className="d-flex justify-content-between align-items-center mt-2 mb-3 flex-wrap gap-2">
              <span style={{ fontSize: "14px", color: "#555" }}>
                <strong>{displayProducts.length}</strong> Results Found
              </span>
              <select
                className="form-select form-select-sm w-auto"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                style={{ borderRadius: "8px", fontSize: "14px" }}
              >
                <option value="Latest">Latest</option>
                <option value="Low to High">Price: Low to High</option>
                <option value="High to Low">Price: High to Low</option>
              </select>
            </div>

            <div className="row g-3">
              {displayProducts.length > 0 ? (
                displayProducts.map((product) => (
                  <div key={product.id} className="col-6 col-sm-4 col-md-4 col-lg-3">
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
                      <div style={{
                        position: "relative",
                        width: "100%",
                        height: "130px",
                        backgroundColor: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "8px"
                      }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      </div>

                      {/* Content Section */}
                      <div className="card-body d-flex flex-column p-2" style={{ backgroundColor: "#fff" }}>
                        <h6
                          className="card-title mb-1 mt-1"
                          style={{
                            fontSize: "13px",
                            fontWeight: "600",
                            color: "#222",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            lineHeight: "1.4",
                            minHeight: "38px"
                          }}
                        >
                          {product.name}
                        </h6>

                        <p className="text-muted mb-2" style={{ fontSize: "11px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {product.description || "1 piece"}
                        </p>

                        {/* Price & Add Button */}
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                          <div style={{ fontSize: "14px", fontWeight: "700", color: "#111" }}>
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
                              padding: "3px 12px",
                              fontWeight: "700",
                              fontSize: "12px",
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
                ))
              ) : (
                <div className="col-12 text-center mt-5">
                  <h4 className="text-muted">No products found in this category.</h4>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Shop;
