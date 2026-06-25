import React from "react";
import Header from "../component/header/Header";

function contact() {
  return (
    <>
    <Header/>
       <div className="container py-5">
      <div className="row contact-box shadow rounded">
        {/* Contact Info */}
        <div className="col-md-4 icon-box">
          <div className="info-item mb-4">
            <i className="bi bi-geo-alt fs-4 text-success me-2"></i>
            <p className="mb-0">2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
          <div className="info-item mb-4">
            <i className="bi bi-envelope fs-4 text-success me-2"></i>
            <p className="mb-0">
              Proxy@gmail.com
              <br />
              Help.proxy@gmail.com
            </p>
          </div>
          <div className="info-item">
            <i className="bi bi-telephone fs-4 text-success me-2"></i>
            <p className="mb-0">
              (219) 555-0114
              <br />
              (164) 333-0487
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-8 contact-form">
          <h5 className="fw-bold">Just Say Hello!</h5>
          <p className="text-muted">
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>
          <form>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@gmail.com"
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-success"
                defaultValue="Hello!"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Subject"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className=" w-full my-10">
    {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4078667405265!2d72.50516137509247!3d23.0455038791577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ac539ac151%3A0x6acae7cc1aec8366!2sExcelsior%20Technologies%C2%AE!5e0!3m2!1sen!2sin!4v1742534243068!5m2!1sen!2sin"
        className="w-full h-[450px]"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe> */}
</div>

      
    </>
  );
}

export default contact;
