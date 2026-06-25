import React from 'react';
import Header from '../component/header/Header';

const AccountSettings = () => {
  const handleFileClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (e) => {
    // Handle file upload logic
    console.log(e.target.files[0]);
  };

  return (
  <>
  <Header/>
     <div className="row g-0 text-center">
      <div className="col-6 col-md-4">
        <div className="card p-3" style={{ width: '220px', margin: '120px' }}>
          <h6 className="mb-3 fw-bold">Navigation</h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-muted d-flex align-items-center" href="/src/screen/dashboard.jsx">
                <i className="bi bi-speedometer2 me-2" /> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted d-flex align-items-center" href="#">
                <i className="bi bi-clock-history me-2" /> Order History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted d-flex align-items-center" href="#">
                <i className="bi bi-heart me-2" /> Wishlist
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted d-flex align-items-center" href="#">
                <i className="bi bi-bag me-2" /> Shopping Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted d-flex align-items-center" href="/src/screen/setting.jsx">
                <i className="bi bi-gear me-2" /> Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted d-flex align-items-center" href="#">
                <i className="bi bi-box-arrow-right me-2" /> Log-out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-sm-6 col-md-8">
        <div className="container mt-5">
          <div className="row mb-4" style={{ border: '1px solid', borderRadius: '20px' }}>
            <div className="col-md-6" style={{ padding: '20px', borderRadius: '5px', textAlign: 'justify' }}>
              <h3 className="mb-3">Account Settings</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label">Firstname</label>
                  <input type="text" className="form-control" placeholder="Enter your first name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Lastname</label>
                  <input type="text" className="form-control" placeholder="Enter your last name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control" placeholder="Enter your phone number" />
                </div>
                <button type="submit" className="btn btn-success">Save Changes</button>
              </form>
            </div>

            <div className="col-md-6">
              <div className="img-card" style={{ margin: '90px' }}>
                <img
                  src="./Img/Ellipse 5.png"
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  style={{ width: '150px', height: '150px' }}
                />
                <div className="d-flex justify-content-center p-3">
                  <form>
                    <input
                      type="file"
                      id="fileInput"
                      name="myfile"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <button type="button" className="btn btn-success" onClick={handleFileClick}>
                      Choose Image
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="bill-ad" style={{ border: '1px solid', borderRadius: '20px', padding: '20px', textAlign: 'justify' }}>
            <h5>Customer Information</h5>
            <form className="row g-3">
              <div className="col-md-4">
                <label className="form-label">First name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Last name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Street address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Country/Region</label>
                <select className="form-select" required>
                  <option value="">Select</option>
                  <option>USA</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>France</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">State</label>
                <select className="form-select" required>
                  <option value="">Select</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Zip Code</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-success">Save Changes</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </>
  

  );
};

export default AccountSettings;
