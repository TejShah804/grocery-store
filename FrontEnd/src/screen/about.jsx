import React from "react";
import Header from "../component/header/Header";

function About() {
  return (
    <>
      <Header />

      {/* ── Section 1: Hero ── */}
      <div className="container px-3 px-md-4" style={{ marginTop: "30px" }}>
        <div className="row align-items-center gy-4">
          <div className="col-12 col-md-6">
            <h1 style={{ fontWeight: "700", lineHeight: "1.3" }}>
              <span>100% Trusted</span>
              <br />
              <span style={{ color: "#00B207" }}>Organic Food Store</span>
            </h1>
            <p className="mt-3" style={{ color: "#555", lineHeight: "1.8" }}>
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
              elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
              accumsan. Donec a eros non massa vulputate ornare. Vivamus
              ornare commodo ante, at commodo felis congue vitae.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="Img/Image (25).png"
              alt="Organic Food"
              className="img-fluid w-100"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>

      {/* ── Section 2: Stats + Image ── */}
      <div className="container px-3 px-md-4 mt-5">
        <div className="row align-items-center gy-4">
          {/* Left: Background image (hidden on mobile, shown on md+) */}
          <div className="col-12 col-md-6">
            <img
              src="Img/BG.png"
              alt="Background"
              className="img-fluid w-100"
              style={{ borderRadius: "12px", maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Right: Content */}
          <div className="col-12 col-md-6">
            <h1 style={{ fontWeight: "700", lineHeight: "1.3" }}>
              <span>100% Trusted</span>
              <br />
              <span style={{ color: "#00B207" }}>Organic Food Store</span>
            </h1>
            <p className="mt-3" style={{ color: "#555", lineHeight: "1.8" }}>
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>

            {/* Feature Grid */}
            <div className="row g-3 mt-2">
              <div className="col-12 col-sm-6">
                <div className="feature-box">
                  <img src="Img/Icon (1).png" alt="Discount" className="feature-icon" />
                  <div>
                    <div className="feature-title">64% Discount</div>
                    <div className="feature-text">Save your 64% money with us</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="feature-box">
                  <img src="Img/Icon (2).png" alt="Organic" />
                  <div>
                    <div className="feature-title">100% Organic</div>
                    <div className="feature-text">100% Organic Vegetables</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="feature-box">
                  <img src="Img/Icon (3).png" alt="Feedback" className="feature-icon" />
                  <div>
                    <div className="feature-title">Customer Feedback</div>
                    <div className="feature-text">Our happy customer</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="feature-box">
                  <img src="Img/Icon (4).png" alt="Payment" />
                  <div>
                    <div className="feature-title">100% Secure Payment</div>
                    <div className="feature-text">We ensure your money is safe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 3: Delivery Section ── */}
      <div className="container px-3 px-md-4 mt-5">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-md-6">
            <h1 style={{ fontWeight: "700", lineHeight: "1.3" }}>
              We Delivered, You <br /> Enjoy Your Order.
            </h1>
            <p className="mt-3" style={{ color: "#555", lineHeight: "1.8" }}>
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            <div className="mt-3">
              <div className="feature-item mb-2">
                <i className="bi bi-check-circle-fill icon-check me-2"></i>
                Sed in metus pellentesque.
              </div>
              <div className="feature-item mb-2">
                <i className="bi bi-check-circle-fill icon-check me-2"></i>
                Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
              </div>
              <div className="feature-item mb-3">
                <i className="bi bi-check-circle-fill icon-check me-2"></i>
                Maecenas ut nunc fringilla erat varius.
              </div>
              <button type="button" className="btn btn-success px-4" style={{ backgroundColor: "#00B207", border: "none" }}>
                Shop Now
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="Img/Image (27).png"
              alt="Delivery"
              className="img-fluid w-100"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>

      {/* ── Team Section ── */}
      <div className="awesome-team mt-5 pb-4">
        <div className="text-center mb-4 px-3">
          <h1 style={{ fontWeight: "700" }}>Our Awesome Team</h1>
          <p style={{ color: "#555", maxWidth: "600px", margin: "0 auto" }}>
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="text-center">
                <img
                  src="Img/Image (28).png"
                  alt="Jenny Wilson"
                  className="img-fluid"
                  style={{ borderRadius: "50%", width: "140px", height: "140px", objectFit: "cover" }}
                />
                <div className="caption mt-2 fw-semibold">Jenny Wilson</div>
                <p style={{ color: "#777", fontSize: "14px" }}>Ceo &amp; Founder</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="text-center">
                <img
                  src="Img/Image (31).png"
                  alt="Robert Fox"
                  className="img-fluid"
                  style={{ borderRadius: "50%", width: "140px", height: "140px", objectFit: "cover" }}
                />
                <div className="caption mt-2 fw-semibold">Robert Fox</div>
                <p style={{ color: "#777", fontSize: "14px" }}>Senior Farmer Manager</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="text-center">
                <img
                  src="Img/Image (29).png"
                  alt="Jane Cooper"
                  className="img-fluid"
                  style={{ borderRadius: "50%", width: "140px", height: "140px", objectFit: "cover" }}
                />
                <div className="caption mt-2 fw-semibold">Jane Cooper</div>
                <p style={{ color: "#777", fontSize: "14px" }}>Worker</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="container py-5 px-3 px-md-4" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <h2 className="mb-0 text-start">Client Testimonial</h2>
          <div className="arrow-buttons">
            <button className="arrow-btn" id="prevBtn">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button className="arrow-btn active" id="nextBtn">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-4">
                {/* Testimonial 1 */}
                <div className="col-12 col-md-4">
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
                {/* Testimonial 2 */}
                <div className="col-12 col-md-4 d-none d-md-block">
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
                {/* Testimonial 3 */}
                <div className="col-12 col-md-4 d-none d-md-block">
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
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* ── Partner Logos ── */}
      <div className="container my-5 px-3">
        <div className="row justify-content-center align-items-center g-3">
          <div className="col-4 col-sm-2 text-center">
            <img src="Img/c6.png" className="img-fluid" alt="Company 6" style={{ maxHeight: "40px", objectFit: "contain" }} />
          </div>
          <div className="col-4 col-sm-2 text-center">
            <img src="Img/c1.png" className="img-fluid" alt="Company 1" style={{ maxHeight: "40px", objectFit: "contain" }} />
          </div>
          <div className="col-4 col-sm-2 text-center">
            <img src="Img/c2.png" className="img-fluid" alt="Company 2" style={{ maxHeight: "40px", objectFit: "contain" }} />
          </div>
          <div className="col-4 col-sm-2 text-center">
            <img src="Img/c3.png" className="img-fluid" alt="Company 3" style={{ maxHeight: "40px", objectFit: "contain" }} />
          </div>
          <div className="col-4 col-sm-2 text-center">
            <img src="Img/c4.png" className="img-fluid" alt="Company 4" style={{ maxHeight: "40px", objectFit: "contain" }} />
          </div>
          <div className="col-4 col-sm-2 text-center">
            <img src="Img/c5.png" className="img-fluid" alt="Company 5" style={{ maxHeight: "40px", objectFit: "contain" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
