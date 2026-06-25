import React from 'react';

const CustomerInfoForm = ({ formData, handleChange }) => {
  return (
    <div className="col-md-6">
      <h5>Customer Information</h5>
      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label checkout-form-label">First name</label>
          <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label checkout-form-label">Last name</label>
          <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label checkout-form-label">Company Name</label>
          <input type="text" className="form-control" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label checkout-form-label">Street address *</label>
          <input type="text" className="form-control" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label checkout-form-label">Country/Region</label>
          <select className="form-select" name="country" value={formData.country} onChange={handleChange}>
            <option>India</option>
            <option>USA</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Germany</option>
            <option>France</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label checkout-form-label">State *</label>
          <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <label className="form-label checkout-form-label">Zip Code *</label>
          <input type="text" className="form-control" name="zip" value={formData.zip} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label checkout-form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label checkout-form-label">Phone Number</label>
          <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label checkout-form-label">Order Info (Optional)</label>
          <textarea className="form-control" name="orderInfo" rows="3" value={formData.orderInfo} onChange={handleChange}></textarea>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoForm;
