import React from 'react'

function product_detail() {
  return (
   <>
      <div>
      <div className="container py-5">
        <div className="row mb-5">
          <div className="image-section">
            <img src="Img/p1.png" id="main-img" alt="Chinese Cabbage" style={{height: "250px", width: "250px"}} />
            <div className="thumbnail-images">
              <img src="Img/p2.png" alt="" className="small-img" />
              <img src="Img/p3.png" alt="" className="small-img" />
              <img src="Img/p4.png" alt="" className="small-img" />
              <img src="Img/p5.png" alt="" className="small-img" />
            </div>
          </div>

          <div className="details-section">
            <h1>Chinese Cabbage <span className="status">In Stock</span></h1>
            <div className="stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span style={{color:"#333"}}>4 Review</span>
            </div>
            <div className="price">
              ₹17.28 
              <span className="discount">64% Off</span>
            </div>

            <div className="brand">
              <strong>Brand:</strong> <img src="Img/Group 19.png" alt="brand logo" />

              <div className="brand-name">
                <div className="social-icon">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-pinterest"></i>
                  <i className="bi bi-instagram"></i>
                </div>
              </div>
            </div>

            <p className="description">
              className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultricies et ipsum.
            </p>

            <div className="mb-3">
              <input type="number" value="1" className="form-control d-inline-block w-auto me-2" />
              <button className="btn btn-success">Add to Cart</button>
            </div>
            <div className="meta">
              <span><strong>Category:</strong> Vegetables</span>
              <span><strong>Tags:</strong> Vegetables, Healthy, Chinese, Cabbage, Green Cabbage</span>
            </div>
          </div> 
        </div>

        <div className="hstack">
          <div className="hstack gap-3">
            <a href="./product_detail.html"><div className="p-2" style={{color: "black"}}>Descriptions</div></a>
            <a href="./add.html"> <div className="p-2" style={{color: "black"}}>Additional Information</div></a>
            <a href="./cus.html"> <div className="p-2" style={{color: "black"}}>customer Feedback</div> </a>
          </div>
        </div>

        <div className="container overflow-hidden text-center">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3">
                <div className="description-section" style={{textAlign: "justify"}}>
                  <p> Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.
                    Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. 
                  </p>
                  <div className="feature-item"><i className="bi bi-check-circle-fill icon-check"></i> 100g of fresh leaves provides</div>
                  <div className="feature-item"><i className="bi bi-check-circle-fill icon-check"></i> Aliquam erat asit augue volutpat elementum.</div>
                  <div className="feature-item"><i className="bi bi-check-circle-fill icon-check"></i> Quisque eu enim eget sapien molestie.</div>
                  <div className="feature-item"><i className="bi bi-check-circle-fill icon-check"></i> Proin convallis odio volutpat finibus posuere.</div>
                  <p className="mt-3">Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                <div className="imgvideo">
                  <img src="Img/Video.png" />
                </div>
                <div className="container py-4">
                  <div className="row text-center text-md-start" style={{border: "0px solid #eee", backgroundColor: "#FAFAFA"}}>
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                      <div className="feature-box">
                        <img src="Img/Group.png" alt="Brand Logo" className="feature-icon" />
                        <div>
                          <div className="feature-title">64% Discount</div>
                          <div className="feature-text">Save your 64% money with us</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="feature-box">
                        <img src="Img/leaf 1.png" />
                        <div>
                          <div className="feature-title">100% Organic</div>
                          <div className="feature-text">100% Organic Vegetables</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-4" style={{marginLeft: "504px"}}>Related Product</h2>
          </div>
        </div>
        <div className="row g-3 justify-content-center">
          {/* <!-- Product Cards Row 1 --> */}
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
        </div>
      </div>
    </div>
   </>
  
  )
}
export default product_detail;