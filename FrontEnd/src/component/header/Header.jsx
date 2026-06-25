import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../LoginModal";
import { CartContext } from "../../context/CartContext";

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { cartCount, refreshCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const user = localStorage.getItem("user");
      if (user) {
        const parsed = JSON.parse(user);
        if (parsed?.name || parsed?.email) {
          setLoggedInUser(parsed);
        } else {
          localStorage.removeItem("user");
        }
      }
    } catch {
      localStorage.removeItem("user");
    }
  }, []);

  const getUserDisplayName = (user) => {
    if (user?.name) return user.name.split(" ")[0];
    if (user?.email) return user.email.split("@")[0];
    return "User";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLoggedInUser(null);
    navigate("/");
  };

  return (
    <>
      <div className="bg-white border-bottom">
        {/* <!-- Main navbar --> */}
        <nav className="navbar navbar-expand-lg py-3 border-0">
          <div className="container flex-nowrap align-items-center">
            {/* <!-- Logo --> */}
            <Link className="navbar-brand text-decoration-none me-2 me-lg-3" to="/">
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(20px, 4vw, 28px)",
                  fontWeight: "700",
                  color: "#00B207",
                  whiteSpace: "nowrap"
                }}
              >
                FreshMart
              </h1>
            </Link>

            {/* <!-- Mobile Search Bar (Between Logo & Toggle) --> */}
            <form className="d-flex d-lg-none flex-grow-1 me-2" style={{ minWidth: "100px" }}>
              <input
                className="form-control shadow-none"
                type="search"
                placeholder="Search"
                style={{ padding: "0.4rem 0.6rem", fontSize: "14px" }}
              />
            </form>

            {/* <!-- Mobile Toggle Button (Triggers Offcanvas from right) --> */}
            <button
              className="navbar-toggler shadow-none border-0 px-1 px-sm-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Collapsible Content --> */}
            <div className="collapse navbar-collapse" id="navbarContent">
              {/* <!-- Desktop Search Bar --> */}
              <form
                className="d-none d-lg-flex flex-grow-1 mx-lg-4 my-3 my-lg-0 gap-2"
                style={{ maxWidth: "100%", flexBasis: "auto" }}
              >
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                />
                <button className="btn btn-success px-4" type="submit">
                  Search
                </button>
              </form>

              {/* <!-- Wishlist & Cart --> */}
              <div className="d-flex align-items-center gap-4 ms-auto mt-2 mt-lg-0">
                {/* Heart */}
                <a href="#" className="text-dark fs-4">
                  <i className="bi bi-heart"></i>
                </a>

                {/* Shopping Cart */}
                <Link
                  to="/shoping_cart"
                  className="text-dark text-decoration-none d-flex align-items-center gap-2 position-relative"
                >
                  <div className="position-relative d-inline-block">
                    <i className="bi bi-cart fs-4"></i>
                    {cartCount > 0 && (
                      <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                        style={{ fontSize: "10px" }}
                      >
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <div
                    className="icon-text d-none d-sm-block"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      whiteSpace: "nowrap"
                    }}
                  >
                    Shopping Cart
                  </div>
                </Link>

                {/* Login/User Button */}
                {loggedInUser ? (
                  <div className="dropdown ms-lg-4 mt-4 mt-lg-0 w-100 w-lg-auto text-center text-lg-start">
                    <button 
                      className="btn btn-success px-4 dropdown-toggle" 
                      type="button" 
                      data-bs-toggle="dropdown" 
                      style={{ backgroundColor: "#4CAF50", border: "none", fontWeight: "500" }}
                    >
                      Hi, {getUserDisplayName(loggedInUser)}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                      <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                      <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                    </ul>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-success px-4 ms-lg-4 mt-4 mt-lg-0 w-100 w-lg-auto"
                    onClick={() => setIsLoginOpen(true)}
                    style={{
                      backgroundColor: "#4CAF50",
                      border: "none",
                      fontWeight: "500"
                    }}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* <!-- Bottom navigation --> */}
      <nav className="bottom-nav py-2 d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <Link to="/" className="nav-link text-white text-decoration-none"> Home </Link>
            <Link to="/shop" className="nav-link text-white text-decoration-none"> Shop </Link>
            <Link to="/blog" className="nav-link text-white text-decoration-none">Blog </Link>
            <Link to="/about" className="nav-link text-white text-decoration-none"> About Us</Link>
            <Link to="/contact" className="nav-link text-white text-decoration-none">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu (Right side) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ width: "280px" }}
      >
        <div className="offcanvas-header border-bottom">
          <h5 id="offcanvasRightLabel" style={{ color: "#00B207", fontWeight: "700", margin: 0 }}>FreshMart Menu</h5>
          <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-3">
          <Link to="/" className="text-dark text-decoration-none fs-5 fw-medium" data-bs-dismiss="offcanvas">Home</Link>
          <Link to="/shop" className="text-dark text-decoration-none fs-5 fw-medium" data-bs-dismiss="offcanvas">Shop</Link>
          <Link to="/blog" className="text-dark text-decoration-none fs-5 fw-medium" data-bs-dismiss="offcanvas">Blog</Link>
          <Link to="/about" className="text-dark text-decoration-none fs-5 fw-medium" data-bs-dismiss="offcanvas">About Us</Link>
          <Link to="/contact" className="text-dark text-decoration-none fs-5 fw-medium" data-bs-dismiss="offcanvas">Contact Us</Link>

          <hr className="my-2" />

          {/* Login/User Button for Mobile */}
          {loggedInUser ? (
            <div className="d-flex flex-column gap-2 mt-2">
              <div className="fs-5 fw-bold text-success mb-2">Hi, {getUserDisplayName(loggedInUser)}</div>
              <Link to="/dashboard" className="btn btn-outline-success w-100 py-2" data-bs-dismiss="offcanvas">Dashboard</Link>
              <button onClick={handleLogout} className="btn btn-danger w-100 py-2">Logout</button>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-success w-100 py-2 mt-2"
              onClick={() => setIsLoginOpen(true)}
              style={{ backgroundColor: "#4CAF50", border: "none", fontWeight: "500", fontSize: "18px" }}
            >
              Login
            </button>
          )}
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSuccess={(user) => {
          setLoggedInUser(user);
          refreshCart();
          setIsLoginOpen(false);
        }}
      />
    </>
  );
}

export default Header;
