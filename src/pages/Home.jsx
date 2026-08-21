import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

function VisionMission() {
  return (
    <>
      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}

      <section className="premium-hero">
        <div className="hero-dark-overlay"></div>

        <div className="container hero-inner">
          <div className="hero-content-center">

            {/* WELCOME */}
            <div className="welcome-text">
              <span></span>
              WELCOME TO
              <span></span>
            </div>

            {/* NAJIA GROUP */}
            <h1 className="main-hero-title">
              <span className="najia">Najia</span>{" "}
              <span className="group">Group</span>
            </h1>

            {/* TAGLINE */}
            <h3 className="hero-tagline">
              Growing Together, Building A Better Tomorrow
            </h3>

            {/* DESCRIPTION */}
            <p>
              Najia Group is a diversified business group operating
              in various sectors with commitment to quality, trust
              and customer satisfaction.
            </p>

            {/* BUTTONS */}
            <div className="hero-actions">

              <Link
                to="/businesses"
                className="hero-primary"
              >
                Explore Our Businesses

                <i className="bi bi-arrow-right"></i>
              </Link>

              <Link
                to="/about"
                className="hero-secondary"
              >
                Learn More About Us
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          VISION / MISSION / VALUES INTRO
      ========================================= */}

      <section className="vm-intro">

        <div className="container">

          <div className="vm-heading">

            <div className="small-heading">
              <span></span>
              WHAT DRIVES US
              <span></span>
            </div>

            <h2>
              Our Vision, Mission
              <br />
              <strong>& Values</strong>
            </h2>

            <div className="heading-leaf">
              <i className="bi bi-flower1"></i>
            </div>

            <p>
              Our vision and values provide the foundation
              for everything we do at Najia Group.
            </p>

          </div>


          {/* =====================================
              VISION
          ===================================== */}

          <div className="vm-feature vision-feature">

            <div className="vm-feature-icon">
              <i className="bi bi-eye"></i>
            </div>

            <div className="vm-feature-content">

              <span>01</span>

              <h3>Our Vision</h3>

              <div className="vm-line"></div>

              <p>
                Building a strong, trusted and sustainable
                business group that creates lasting value
                for our customers, partners and community.
              </p>

            </div>

          </div>


          {/* =====================================
              MISSION
          ===================================== */}

          <div className="vm-feature mission-feature">

            <div className="vm-feature-icon">
              <i className="bi bi-bullseye"></i>
            </div>

            <div className="vm-feature-content">

              <span>02</span>

              <h3>Our Mission</h3>

              <div className="vm-line"></div>

              <p>
                Delivering quality, creating opportunities
                and building trust through responsible
                business practices and continuous improvement.
              </p>

            </div>

          </div>


          {/* =====================================
              VALUES
          ===================================== */}

          <div className="vm-values-wrapper">

            <div className="vm-values-title">

              <span>03</span>

              <h3>Our Values</h3>

              <p>
                The principles that shape our decisions
                and define the way we work.
              </p>

            </div>


            <div className="vm-values-grid">

              {/* INTEGRITY */}
              <div className="vm-value-card">

                <div className="vm-value-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <h4>Integrity</h4>

                <p>
                  We believe in honesty, transparency
                  and doing business with integrity.
                </p>

              </div>


              {/* QUALITY */}
              <div className="vm-value-card">

                <div className="vm-value-icon">
                  <i className="bi bi-gem"></i>
                </div>

                <h4>Quality</h4>

                <p>
                  We strive to maintain high standards
                  across all our businesses.
                </p>

              </div>


              {/* COMMITMENT */}
              <div className="vm-value-card">

                <div className="vm-value-icon">
                  <i className="bi bi-hand-thumbs-up"></i>
                </div>

                <h4>Commitment</h4>

                <p>
                  We remain committed to our customers,
                  partners and long-term goals.
                </p>

              </div>


              {/* GROWTH */}
              <div className="vm-value-card">

                <div className="vm-value-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>

                <h4>Growth</h4>

                <p>
                  We continuously seek new opportunities
                  for development and sustainable growth.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="vm-cta">

        <div className="container">

          <div className="vm-cta-content">

            <div>

              <span>NAJIA GROUP</span>

              <h2>
                Growing Together,
                <br />
                Building A Better Tomorrow
              </h2>

              <p>
                Discover the businesses that are part
                of our growing journey.
              </p>

            </div>

            <Link
              to="/businesses"
              className="vm-cta-button"
            >
              Explore Businesses

              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>

      {/* WHATSAPP */}

      <WhatsAppButton />

    </>
  );
}

export default VisionMission;