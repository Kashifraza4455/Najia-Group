import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";


const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
    title: "Wedding Hall",
    category: "Wedding Hall",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    title: "Flour Mill",
    category: "Flour Mill",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=85",
    title: "Livestock",
    category: "Livestock",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=85",
    title: "Water Plant",
    category: "Water Plant",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    title: "Najia Group Farms",
    category: "Farms",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?auto=format&fit=crop&w=1200&q=85",
    title: "Our Livestock",
    category: "Livestock",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1200&q=85",
    title: "Group Activities",
    category: "Najia Group",
  },
];

function Gallery() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="gallery-page-hero">
        <div className="gallery-hero-overlay"></div>

        <div className="container">
          <div className="gallery-hero-content">

            <span>NAJIA GROUP</span>

            <h1>Our Gallery</h1>

            <div className="gallery-gold-line"></div>

            <p>
              A glimpse into our businesses, operations,
              facilities and journey of growth.
            </p>

          </div>
        </div>
      </section>


      {/* GALLERY */}
      <section className="gallery-section">

        <div className="container">

          <div className="gallery-heading">

            <div className="small-heading">
              <span></span>
              OUR GALLERY
              <span></span>
            </div>

            <h2>
              Moments From
              <strong> Najia Group</strong>
            </h2>

            <div className="heading-leaf">
              <i className="bi bi-flower1"></i>
            </div>

            <p>
              Explore highlights from our different
              business sectors and operations.
            </p>

          </div>


          {/* FILTER BUTTONS */}
          <div className="gallery-filters">

            <button className="active">
              All
            </button>

            <button>
              Wedding Hall
            </button>

            <button>
              Flour Mill
            </button>

            <button>
              Livestock
            </button>

            <button>
              Water Plant
            </button>

            <button>
              Farms
            </button>

          </div>


          {/* IMAGES */}
          <div className="gallery-grid">

            {galleryImages.map((item, index) => (

              <div
                className={`gallery-item gallery-item-${index + 1}`}
                key={index}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-overlay">

                  <div className="gallery-overlay-content">

                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <div className="gallery-view-icon">
                      <i className="bi bi-plus-lg"></i>
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="gallery-cta">

        <div className="container">

          <div className="gallery-cta-content">

            <div>

              <span>EXPLORE NAJIA GROUP</span>

              <h2>
                Discover Our
                <br />
                Businesses
              </h2>

              <p>
                Learn more about the businesses and
                services operating under Najia Group.
              </p>

            </div>

            <Link
              to="/businesses"
              className="gallery-cta-button"
            >
              View Businesses
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>




      <WhatsAppButton />
    </>
  );
}

export default Gallery;