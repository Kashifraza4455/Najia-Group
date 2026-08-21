import { Link, useParams } from "react-router-dom";
import businesses from "../data/businesses";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

function BusinessDetail() {
  const { id } = useParams();

  const business = businesses.find(
    (item) => item.id === id
  );

  if (!business) {
    return (
      <>
        <Navbar />

        <div className="business-not-found">
          <h1>Business Not Found</h1>

          <Link to="/">
            Back to Home
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="business-detail-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(5, 27, 19, 0.82),
              rgba(5, 27, 19, 0.88)
            ),
            url(${business.image})
          `,
        }}
      >
        <div className="container">
          <div className="business-detail-hero-content">

            <div className="business-detail-icon">
              <i className={`bi ${business.icon}`}></i>
            </div>

            <span className="business-breadcrumb">
              NAJIA GROUP BUSINESS
            </span>

            <h1>{business.title}</h1>

            <div className="gold-line"></div>

            <p>{business.shortDescription}</p>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="business-detail-content">
        <div className="container">

          <div className="row g-5 align-items-center">

            {/* ABOUT */}
            <div className="col-lg-7">

              <span className="section-tag">
                ABOUT NAJIA GROUP
              </span>

              <h2>
                About Our{" "}
                <span>{business.title}</span>
              </h2>

              <div className="title-decoration">
                <span></span>
                <i className="bi bi-flower1"></i>
                <span></span>
              </div>

              <p className="business-main-description">
                {business.description}
              </p>

              <div className="business-highlight-box">

                <div className="highlight-icon">
                  <i className="bi bi-patch-check-fill"></i>
                </div>

                <div>
                  <h4>Quality You Can Trust</h4>

                  <p>
                    Najia Group is committed to maintaining
                    high standards, quality service and
                    customer satisfaction.
                  </p>
                </div>

              </div>

            </div>

            {/* SERVICES */}
            <div className="col-lg-5">

              <div className="services-premium-card">

                <div className="services-card-header">

                  <div className="services-icon">
                    <i className={`bi ${business.icon}`}></i>
                  </div>

                  <div>
                    <span>WHAT WE OFFER</span>

                    <h3>Our Services</h3>
                  </div>

                </div>

                <div className="premium-service-list">

                  {business.features.map(
  (feature, index) => (
                      <div
                        className="premium-service-item"
                        key={index}
                      >
                        <div className="service-check">
                          <i className="bi bi-check-lg"></i>
                        </div>

                        <span>{feature}</span>
                      </div>
                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* IMAGE + EXTRA SECTION */}
      <section className="business-showcase-section">

        <div className="container">

          <div className="row g-5 align-items-center">

            <div className="col-lg-6">

              <div className="showcase-image">

                <img
                  src={business.image}
                  alt={business.title}
                />

                <div className="showcase-image-overlay">
                  <div>
                    <i className={`bi ${business.icon}`}></i>

                    <span>NAJIA GROUP</span>

                    <strong>{business.title}</strong>
                  </div>
                </div>

              </div>

            </div>

            <div className="col-lg-6">

              <div className="showcase-text">

                <span className="section-tag">
                  OUR COMMITMENT
                </span>

                <h2>
                  Built On Quality.
                  <br />
                  Driven By Trust.
                </h2>

                <p>
                  We believe in building strong and sustainable
                  businesses by maintaining quality, reliability
                  and a commitment to excellence.
                </p>

                <div className="commitment-points">

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Professional Management</span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>High Quality Standards</span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Customer Focused Service</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="business-contact-cta">

        <div className="container">

          <div className="business-cta-content">

            <div>
              <span>GET IN TOUCH</span>

              <h2>
                Interested in Our{" "}
                {business.title}?
              </h2>

              <p>
                Contact Najia Group for more information,
                inquiries and business opportunities.
              </p>
            </div>

            <div className="cta-buttons">

              <a
                href="https://wa.me/03266719872"
                target="_blank"
                rel="noreferrer"
                className="cta-whatsapp"
              >
                <i className="bi bi-whatsapp"></i>
                WhatsApp Us
              </a>

              <a
                href="#contact"
                className="cta-contact"
              >
                Contact Us
                <i className="bi bi-arrow-right"></i>
              </a>

            </div>

          </div>

        </div>

      </section>

      <WhatsAppButton />
    </>
  );
}

export default BusinessDetail;