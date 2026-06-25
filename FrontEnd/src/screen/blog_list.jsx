import React from 'react';
import Header from '../component/header/Header';

const BlogList = () => {
  return (
    <>
    <Header/>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-4">
            <div className="sidebar">
              <button className="filter-btn" style={{ margin: '10px' }}>
                <i className="bi bi-sliders"></i> Filter
              </button>

              <form className="" style={{ maxWidth: '600px', margin: 0 }}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
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

          <div className="col-sm-8">
            <div className="container">
              <div className="row">
                <div className="blog-grids">
                  <div className="blog-items">
                    <img src="Img/blog1.png" alt="Blog 1" />
                    <p className="text-muted" style={{ margin: '10px' }}>
                      Food | By Admin | 65 Comments
                    </p>
                    <div className="caption">
                      Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                      fermentum.
                    </div>
                    <a
                      href="/single_blog"
                      className="read-more"
                      style={{ color: '#00B207', display: 'flex', margin: '15px' }}
                    >
                      Read More
                    </a>
                  </div>
                  <div className="blog-items">
                    <img src="Img/blog2.png" alt="Blog 2" />
                    <p className="text-muted" style={{ margin: '10px' }}>
                      Food | By Admin | 65 Comments
                    </p>
                    <div className="caption">
                      Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                      fermentum.
                    </div>
                    <a
                      href="#"
                      className="read-more"
                      style={{ color: '#00B207', display: 'flex', margin: '15px' }}
                    >
                      Read More
                    </a>
                  </div>
                  <div className="blog-items">
                    <img src="Img/blog3.png" alt="Blog 3" />
                    <p className="text-muted" style={{ margin: '10px' }}>
                      Food | By Admin | 65 Comments
                    </p>
                    <div className="caption">
                      Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                      fermentum.
                    </div>
                    <a
                      href="#"
                      className="read-more"
                      style={{ color: '#00B207', display: 'flex', margin: '15px' }}
                    >
                      Read More
                    </a>
                  </div>
                  <div className="blog-items">
                    <img src="Img/blog4.png" alt="Blog 4" />
                    <p className="text-muted" style={{ margin: '10px' }}>
                      Food | By Admin | 65 Comments
                    </p>
                    <div className="caption">
                      Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                      fermentum.
                    </div>
                    <a
                      href="#"
                      className="read-more"
                      style={{ color: '#00B207', display: 'flex', margin: '15px' }}
                    >
                      Read More
                    </a>
                  </div>
                  <div className="blog-items">
                    <img src="Img/blog5.png" alt="Blog 5" />
                    <p className="text-muted" style={{ margin: '10px' }}>
                      Food | By Admin | 65 Comments
                    </p>
                    <div className="caption">
                      Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                      fermentum.
                    </div>
                    <a
                      href="#"
                      className="read-more"
                      style={{ color: '#00B207', display: 'flex', margin: '15px' }}
                    >
                      Read More
                    </a>
                  </div>
                  <div className="blog-items">
                    <img src="Img/blog6.png" alt="Blog 6" />
                    <p className="text-muted" style={{ margin: '10px' }}>
                      Food | By Admin | 65 Comments
                    </p>
                    <div className="caption">
                      Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                      fermentum.
                    </div>
                    <a
                      href="#"
                      className="read-more"
                      style={{ color: '#00B207', display: 'flex', margin: '15px' }}
                    >
                      Read More
                    </a>
                  </div>
                  <div className="blog-items">
                    <img src="Img/blog7.png" alt="Blog 7" />
                    <p className="text-muted" style={{ margin: '10px' }}>
                      Food | By Admin | 65 Comments
                    </p>
                    <div className="caption">
                      Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                      fermentum.
                    </div>
                    <a
                      href="#"
                      className="read-more"
                      style={{ color: '#00B207', display: 'flex', margin: '15px' }}
                    >
                      Read More
                    </a>
                  </div>
                  <div className="blog-items">
                    <img src="Img/blog8.png" alt="Blog 8" />
                    <p className="text-muted" style={{ margin: '10px' }}>
                      Food | By Admin | 65 Comments
                    </p>
                    <div className="caption">
                      Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                      fermentum.
                    </div>
                    <a
                      href="#"
                      className="read-more"
                      style={{ color: '#00B207', display: 'flex', margin: '15px' }}
                    >
                      Read More
                    </a>
                  </div>
                  <div className="blog-items">
                    <img src="Img/blog9.png" alt="Blog 9" />
                    <p className="text-muted" style={{ margin: '10px' }}>
                      Food | By Admin | 65 Comments
                    </p>
                    <div className="caption">
                      Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                      fermentum.
                    </div>
                    <a
                      href="#"
                      className="read-more"
                      style={{ color: '#00B207', display: 'flex', margin: '15px' }}
                    >
                      Read More
                    </a>
                  </div>
                  <div className="blog-items">
                    <img src="Img/blog10.png" alt="Blog 10" />
                    <p className="text-muted" style={{ margin: '10px' }}>
                      Food | By Admin | 65 Comments
                    </p>
                    <div className="caption">
                      Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                      fermentum.
                    </div>
                    <a
                      href="#"
                      className="read-more"
                      style={{ color: '#00B207', display: 'flex', margin: '15px' }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
