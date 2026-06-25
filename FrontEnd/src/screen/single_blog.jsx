import React from 'react';

const SingleBlog = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-8">
          <div className="container">
            <img
              src="Img/single_blog.jpg"
              alt="Blog Image"
              className="img-fluid"
              style={{ width: '872px', height: '600px', marginTop: '20px' }}
            />
            <h1 className="post-title">
              Maecenas tempor urna sed quam mollis, a placerat dui fringilla Suspendisse.
            </h1>
            <div className="author-info">
              <img src="Img/Image (10).png" alt="Author" className="author-avatar" />
              <div>
                <p className="author-name">Cameron Williamson</p>
                <p className="post-date">4 April, 2025 - 5 min read</p>
              </div>

              <div className="brand-name">
                <div className="social-icons">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-pinterest"></i>
                  <i className="bi bi-instagram"></i>
                </div>
              </div>
            </div>

            <section className="post-content" style={{ textAlign: 'justify' }}>
              <p className="highlight-text">
                Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.
              </p>

              <p>
                Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus.
                Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.
              </p>
              <p>
                Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus.
                Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.
              </p>

              <div className="post-images">
                <img src="Img/image (35).png" alt="Oranges" />
                <img src="Img/image (36).png" alt="Mango" />
              </div>

              <p>
                Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.
              </p>
            </section>

            <div className="container px-0 my-3">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="discount-banner text-center">
                    <img src="Img/single blog(2).png" alt="Discount Banner" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form" style={{ textAlign: 'justify' }}>
              <h5 className="fw-bold">Leave a comment</h5>

              <form>
                <div className="row mb-3">
                  <div className="col" style={{ textAlign: 'justify' }}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                  <div className="col" style={{ textAlign: 'justify' }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" placeholder="email@gmail.com" />
                  </div>
                </div>

                <div className="mb-3" style={{ textAlign: 'justify' }}>
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="3" placeholder="write your comment here.." />
                </div>
                <button type="submit" className="btn btn-success">
                  post comment
                </button>
              </form>
            </div>

            <div className="description-section" style={{ textAlign: 'justify' }}>
              <h5 className="fw-bold">Comments</h5>
              <div className="review-section">
                <div className="review">
                  <img src="Img/Image (32).png" alt="User" className="avatar" />
                  <div className="content">
                    <div className="header">
                      <span className="name">Kristin Watson</span>
                      <span className="time">26 Apr, 2021</span>
                    </div>
                    <p>
                      In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat,
                      <br />
                      metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus
                      <br />
                      arcu diam non diam.
                    </p>
                  </div>
                </div>

                <div className="review">
                  <img src="Img/Image (33).png" alt="User" className="avatar" />
                  <div className="content">
                    <div className="header">
                      <span className="name">Jane Cooper</span>
                      <span className="time">30 Apr, 2021</span>
                    </div>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                  </div>
                </div>

                <div className="review">
                  <img src="Img/Image (34).png" alt="User" className="avatar" />
                  <div className="content">
                    <div className="header">
                      <span className="name">Jacob Jones</span>
                      <span className="time">24 Apr, 2021</span>
                    </div>
                    <p>
                      Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean dui odio, ullamcorper quis turpis ac, volutpat imperdiet ex.
                    </p>
                  </div>
                </div>

                <div className="review">
                  <img src="Img/Image (11).png" alt="User" className="avatar" />
                  <div className="content">
                    <div className="header">
                      <span className="name">Ralph Edwards</span>
                      <span className="time">18 Apr, 2021</span>
                    </div>
                    <p>Nulla molestie interdum ultricies. </p>
                  </div>
                </div>

                <button type="submit" className="btn btn-learn-more">
                  Learn Button
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="sidebar">
            <button className="filter-btn" style={{ margin: '10px' }}>
              <i className="bi bi-sliders"></i> Filter
            </button>

            <form className="" style={{ maxWidth: '600px', margin: 0 }}>
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>

            <h5 className="category-title mt-3" style={{ textAlign: 'justify' }}>
              Tops Categories
            </h5>

            <ul className="category-list" style={{ textAlign: 'justify' }}>
              <li>
                <label>
                  Fresh Fruit <span>(25)</span>
                </label>
              </li>
              <li>
                <label>
                  Vegetables <span>(150)</span>
                </label>
              </li>
              <li>
                <label>
                  Cooking <span>(54)</span>
                </label>
              </li>
              <li>
                <label>
                  Snacks <span>(47)</span>
                </label>
              </li>
              <li>
                <label>
                  Beverages <span>(43)</span>
                </label>
              </li>
              <li>
                <label>
                  Beauty &amp; Health <span>(38)</span>
                </label>
              </li>
              <li>
                <label>
                  Bread &amp; Bakery <span>(15)</span>
                </label>
              </li>
            </ul>

            <div className="tag-list" style={{ width: '250px' }}>
              <h3>Popular-Tag</h3>
              <div className="li1">
                <ul>
                  <li>Healthy</li>
                  <li>Meat</li>
                  <li>Vegetable</li>
                </ul>
              </div>
              <div className="li2">
                <ul>
                  <li>Kid Foods</li>
                  <li>Bread</li>
                </ul>
              </div>
              <div className="li3">
                <ul>
                  <li>Meat</li>
                  <li>Snacks</li>
                </ul>
              </div>
            </div>

            <div className="img-put" style={{ margin: '10px', textAlign: 'justify' }}>
              <div className="img">
                <h3>Our Gallery</h3>
                <div className="og">
                  <img src="Img/gallery.png" alt="Gallery" />
                </div>
              </div>
            </div>

            <div className="blog-list" style={{ width: '261px', height: '269px' }}>
              <div className="blog-title">Sales Products</div>
              <div className="blog-item">
                <img src="Img/Image (14).png" alt="Blog 1" />
                <div className="blog-info">
                  <h4>Curabitur porttitor orci eget nequ accumsan.</h4>
                  <p>Apr 25, 2021</p>
                </div>
              </div>
              <div className="blog-item">
                <img src="Img/Image (15).png" alt="Blog 2" />
                <div className="blog-info">
                  <h4>Donec mattis arcu faucibus suscipit viverra.</h4>
                  <p>Apr 25, 2021</p>
                </div>
              </div>
              <div className="blog-item">
                <img src="Img/Image (16).png" alt="Blog 3" />
                <div className="blog-info">
                  <h4>Quisque posuere tempus rutrum. Integer velit ex.</h4>
                  <p>Apr 25, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
