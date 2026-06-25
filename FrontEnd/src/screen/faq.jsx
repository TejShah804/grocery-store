import React from "react";
import Header from "../component/header/Header";

function Faq() {
  return (
    <>
      <Header />
     <div className="container px-4 text-center">
  <div className="row gx-5">
    <div className="col">
      <div className="p-3">
        <div className="ftitle">
          <h1 style={{ textAlign: "justify" }}>
            Welcome, Let’s Talk <br /> About Our Ecobazar
          </h1>
        </div>

        <div className="fcomment">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{ color: "#0f701e", backgroundColor: "#F2F2F2" }}
                >
                  In elementum est a ante sodales iaculis.
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p style={{ textAlign: "justify" }}>
                    Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                    laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                    Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
                    Donec a eros non massa vulputate ornare. Vivamus ornare commodo
                    ante, at commodo felis congue vitae.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ backgroundColor: "#F2F2F2" }}
                >
                  Etiam lobortis massa eu nibh tempor elementum.
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                    laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                    Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
                    Donec a eros non massa vulputate ornare. Vivamus ornare commodo
                    ante, at commodo felis congue vitae.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ backgroundColor: "#F2F2F2" }}
                >
                  In elementum est a ante sodales iaculis.
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                    laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                    Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
                    Donec a eros non massa vulputate ornare. Vivamus ornare commodo
                    ante, at commodo felis congue vitae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="p-3">
        <div className="fimage">
          <img
            src="Img/Image (26).png"
            alt="FAQ Image"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Faq;