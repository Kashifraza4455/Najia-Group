import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

function About() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="about-page-hero">
        <div className="about-hero-overlay"></div>

        <div className="container">
          <div className="about-hero-content">

            <span>NAJIA GROUP</span>

            <h1>About Us</h1>

            <div className="about-gold-line"></div>

            <p>
              Building businesses, creating opportunities
              and growing together.
            </p>

          </div>
        </div>
      </section>


      {/* ABOUT INTRO */}
      <section className="about-intro-section">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="about-intro-content">

                <span className="about-section-label">
                  ABOUT NAJIA GROUP
                </span>

                <h2>
                  Building Businesses,
                  <br />
                  <strong>Creating Opportunities</strong>
                </h2>

                <div className="about-gold-small-line"></div>

                <p>
                  Najia Group brings together multiple
                  businesses under one strong and trusted
                  name. Our commitment is to build quality
                  businesses, create opportunities and grow
                  together with our community.
                </p>

                <p>
                  From hospitality and food production to
                  livestock, water solutions and agriculture,
                  our diverse business sectors reflect our
                  vision for sustainable growth and long-term
                  value.
                </p>

                <Link
                  to="/businesses"
                  className="about-business-btn"
                >
                  Explore Our Businesses
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>

            </div>


            <div className="col-lg-6">

              <div className="about-main-image">

                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90"
                  alt="Najia Group"
                />

                <div className="about-main-image-overlay"></div>

                <div className="about-image-badge">

                  <strong>NAJIA GROUP</strong>

                  <span>
                    Growing Together
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="about-stats-section">

        <div className="container">

          <div className="about-stats-grid">

            <div className="about-stat">

              <i className="bi bi-buildings"></i>

              <strong>5+</strong>

              <span>
                Business Sectors
              </span>

            </div>


            <div className="about-stat">

              <i className="bi bi-people"></i>

              <strong>100%</strong>

              <span>
                Commitment
              </span>

            </div>


            <div className="about-stat">

              <i className="bi bi-graph-up-arrow"></i>

              <strong>Growing</strong>

              <span>
                With Purpose
              </span>

            </div>


            <div className="about-stat">

              <i className="bi bi-hand-thumbs-up"></i>

              <strong>Trusted</strong>

              <span>
                Business Group
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* OUR APPROACH */}
      <section className="about-approach-section">

        <div className="container">

          <div className="about-heading">

            <div className="small-heading">
              <span></span>
              OUR APPROACH
              <span></span>
            </div>

            <h2>
              What Drives
              <strong> Najia Group</strong>
            </h2>

            <div className="heading-leaf">
              <i className="bi bi-flower1"></i>
            </div>

            <p>
              Our values guide the way we build,
              operate and grow our businesses.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="about-value-card">

                <div className="about-value-icon">
                  <i className="bi bi-gem"></i>
                </div>

                <h3>Quality</h3>

                <p>
                  We believe quality is the foundation
                  of every successful and trusted business.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="about-value-card">

                <div className="about-value-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <h3>Trust</h3>

                <p>
                  We build lasting relationships through
                  transparency, reliability and commitment.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="about-value-card">

                <div className="about-value-icon">
                  <i className="bi bi-bar-chart-line"></i>
                </div>

                <h3>Growth</h3>

                <p>
                  We continuously look for opportunities
                  to improve, expand and create value.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <div className="container">

          <div className="about-cta-content">

            <div>

              <span>NAJIA GROUP</span>

              <h2>
                Let's Build
                <br />
                Something Better Together
              </h2>

              <p>
                Discover our businesses and learn more
                about what we do.
              </p>

            </div>

            <Link
              to="/contact"
              className="about-cta-button"
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

export default About;