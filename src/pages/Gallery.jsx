import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";


const galleryImages = [
  {
    image:
      "/images/hall.jpg",
    title: "Wedding Hall",
    category: "Wedding Hall",
  },
  {
    image:
      "/images/flour-mill.avif",
    title: "Flour Mill",
    category: "Flour Mill",
  },
  {
    image:
      "/images/fram.jpg",
    title: "Livestock",
    category: "Livestock",
  },
  {
    image:
      "/images/water-plant.avif",
    title: "Water Plant",
    category: "Water Plant",
  },
  {
    image:
      "/images/fram39.jpg",
    title: "Najia Group Farms",
    category: "Farms",
  },
  {
    image:
      "/images/Agriculture.avif",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram1.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram2.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram3.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram4.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram5.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram6.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram7.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram8.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram9.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram10.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram11.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram12.jpg",
    title: "Livestock",
    category: "Livestock",
  },
  {
    image:
      "/images/fram13.jpg",
    title: "Livestock",
    category: "Livestock",
  },
  {
    image:
      "/images/fram14.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram15.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram16.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram17.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram18.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram19.jpg",
    title: "Livestock",
    category: "Livestock",
  },
  {
    image:
      "/images/fram20.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram21.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram22.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram23.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram24.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram25.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram26.jpg",
    title: "Livestock",
    category: "Livestock",
  },
  {
    image:
      "/images/fram27.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram28.jpg",
    title: "Livestock",
    category: "Livestock",
  },
  {
    image:
      "/images/fram29.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram30.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram31.jpg",
    title: "Livestock",
    category: "Livestock",
  },
  {
    image:
      "/images/fram32.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram33.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram34.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram35.jpg",
    title: "Livestock",
    category: "Livestock",
  },
  {
    image:
      "/images/fram36.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/fram37.jpg",
    title: "Agriculture",
    category: "Farms",
  },
  {
    image:
      "/images/hall.jpg",
    title: "Wedding Hall",
    category: "Wedding Hall",
  },
  {
    image:
      "/images/hall2.jpg",
    title: "Wedding Hall",
    category: "Wedding Hall",
  },
  {
    image:
      "/images/hall3.jpg",
    title: "Wedding Hall",
    category: "Wedding Hall",
  },
  {
    image:
      "/images/hall4.jpg",
    title: "Wedding Hall",
    category: "Wedding Hall",
  },
  {
    image:
      "/images/hall5.jpg",
    title: "Wedding Hall",
    category: "Wedding Hall",
  },
  {
    image:
      "/images/hall6.jpg",
    title: "Wedding Hall",
    category: "Wedding Hall",
  },
  {
    image:
      "/images/hall7.jpg",
    title: "Wedding Hall",
    category: "Wedding Hall",
  },
];


function Gallery() {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

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

            <button
              className={activeCategory === "All" ? "active" : ""}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>

            <button
              className={
                activeCategory === "Wedding Hall"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory("Wedding Hall")
              }
            >
              Wedding Hall
            </button>

            <button
              className={
                activeCategory === "Flour Mill"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory("Flour Mill")
              }
            >
              Flour Mill
            </button>

            <button
              className={
                activeCategory === "Livestock"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory("Livestock")
              }
            >
              Livestock
            </button>

            <button
              className={
                activeCategory === "Water Plant"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory("Water Plant")
              }
            >
              Water Plant
            </button>

            <button
              className={
                activeCategory === "Farms"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory("Farms")
              }
            >
              Farms
            </button>

          </div>


          {/* IMAGES */}
          <div className="gallery-grid">

            {filteredImages.map((item, index) => (

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