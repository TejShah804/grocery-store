import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col brand">
          <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(20px, 4vw, 28px)",
                  fontWeight: "700",
                  color: "#00B207",
                 
                }}
              >
                FreshMart
              </h1>
            <p>
              Morbi cursus porttitor enim lobortis molestie. Duis gravida
              turpis dui, eget bibendum magna congue nec.
            </p>

            <div className="strong">
              <h4>
                <FontAwesomeIcon icon={faPhone} /> (219) 665-0114 <br/>
                <FontAwesomeIcon icon={faEnvelope} /> Proxy@gmail.com
              </h4>
            </div>
          </div>

          <div className="footer-col">
            <h4>My Account</h4>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Order History</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Helps</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Faqs</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Proxy</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Fruit & Vegetables</a></li>
              <li><a href="#">Meat & Fish</a></li>
              <li><a href="#">Bread & Bakery</a></li>
              <li><a href="#">Beauty & Health</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="payment-methods">
            <img src="Img/Method=ApplePay.png" alt="Apple Pay" />
            <img src="Img/Method=Discover.png" alt="Discover" />
            <img src="Img/Method=Mastercard.png" alt="MasterCard" />
            <img src="Img/Method=Visa.png" alt="Visa" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
