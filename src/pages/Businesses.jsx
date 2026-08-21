import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import businesses from "../data/businesses";


function Businesses() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="businesses-page-hero">
        <div className="businesses-hero-overlay"></div>

        <div className="container">
          <div className="businesses-hero-content">

            <span>NAJIA GROUP</span>

            <h1>Our Businesses</h1>

            <div className="businesses-gold-line"></div>

            <p>
              Diversified businesses built on quality,
              trust and a commitment to growth.
            </p>

          </div>
        </div>
      </section>

      {/* BUSINESSES */}
      <section className="all-businesses-section">

        <div className="container">

          <div className="all-businesses-heading">

            <div className="small-heading">
              <span></span>
              OUR BUSINESS SECTORS
              <span></span>
            </div>

            <h2>
              Diversified. Trusted. Growing.
            </h2>

            <div className="heading-leaf">
              <i className="bi bi-flower1"></i>
            </div>

            <p>
              Explore the businesses and ventures operating
              under the Najia Group.
            </p>

          </div>


          <div className="all-businesses-grid">

            {businesses.map((business) => (

              <div
                className="all-business-card"
                key={business.id}
              >

                {/* IMAGE */}
                <div className="all-business-image">

                  <img
                    src={business.image}
                    alt={business.title}
                  />

                  <div className="all-business-image-overlay"></div>

                  <div className="all-business-icon">
                    <i
                      className={`bi ${business.icon}`}
                    ></i>
                  </div>

                </div>


                {/* CONTENT */}
                <div className="all-business-content">

                  <span className="business-number">
                    {String(
                      businesses.indexOf(business) + 1
                    ).padStart(2, "0")}
                  </span>

                  <h3>
                    {business.title}
                  </h3>

                  <p>
                    {business.shortDescription}
                  </p>

                  <div className="business-card-line"></div>

                  <Link
                    to={`/business/${business.id}`}
                    className="business-view-btn"
                  >
                    Explore Business

                    <i className="bi bi-arrow-right"></i>
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="businesses-cta">

        <div className="container">

          <div className="businesses-cta-content">

            <div>

              <span>NAJIA GROUP</span>

              <h2>
                Growing Through
                <br />
                Diverse Opportunities
              </h2>

              <p>
                Our businesses reflect our commitment to
                building a stronger and sustainable future.
              </p>

            </div>

            <Link
              to="/contact"
              className="businesses-cta-button"
            >
              Contact Us

              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>



      <WhatsAppButton />
    </>
  );
}

export default Businesses;