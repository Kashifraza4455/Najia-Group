import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

function Contact() {
  return (
    <>
      <Navbar />

      {/* CONTACT HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="container">
          <div className="contact-hero-content">
            <span>NAJIA GROUP</span>

            <h1>Contact Us</h1>

            <div className="contact-gold-line"></div>

            <p>
              We'd love to hear from you. Get in touch with
              Najia Group for any questions, inquiries or
              business opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-main">
        <div className="container">

          <div className="contact-heading">
            <span>GET IN TOUCH</span>

            <h2>
              Let's Start a
              <strong> Conversation</strong>
            </h2>

            <p>
              Whether you have a question about our businesses,
              services or partnerships, our team is here to help.
            </p>
          </div>

          <div className="row g-4">

            {/* CONTACT INFO */}
            <div className="col-lg-5">

              <div className="contact-info-card">

                <h3>Contact Information</h3>

                <p className="contact-info-intro">
                  Reach out to us through any of the following
                  channels. We will be happy to assist you.
                </p>

                {/* PHONE */}
                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>

                  <div>
                    <span>PHONE</span>
                    <h4>+92 300 1234567</h4>
                  </div>

                </div>

                {/* EMAIL */}
                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>

                  <div>
                    <span>EMAIL</span>
                    <h4>info@najiagroup.com</h4>
                  </div>

                </div>

                {/* LOCATION */}
                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                  <div>
                    <span>LOCATION</span>
                    <h4>Karachi, Pakistan</h4>
                  </div>

                </div>

                {/* BUSINESS HOURS */}
                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>

                  <div>
                    <span>BUSINESS HOURS</span>
                    <h4>Monday - Saturday</h4>
                    <small>9:00 AM - 6:00 PM</small>
                  </div>

                </div>

                <div className="contact-social">

                  <span>FOLLOW US</span>

                  <div>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>

                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>

                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>

                    <a href="#">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </div>

                </div>

              </div>

            </div>

            {/* CONTACT FORM */}
            <div className="col-lg-7">

              <div className="contact-form-card">

                <div className="form-top">
                  <span>SEND US A MESSAGE</span>

                  <h3>
                    How Can We
                    <strong> Help You?</strong>
                  </h3>
                </div>

                <form>

                  <div className="row">

                    <div className="col-md-6">
                      <div className="contact-field">

                        <label>Your Name</label>

                        <input
                          type="text"
                          placeholder="Enter your name"
                        />

                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="contact-field">

                        <label>Email Address</label>

                        <input
                          type="email"
                          placeholder="Enter your email"
                        />

                      </div>
                    </div>

                  </div>

                  <div className="row">

                    <div className="col-md-6">
                      <div className="contact-field">

                        <label>Phone Number</label>

                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                        />

                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="contact-field">

                        <label>Subject</label>

                        <select>
                          <option value="">
                            Select a subject
                          </option>

                          <option>
                            Wedding Hall
                          </option>

                          <option>
                            Flour Mill
                          </option>

                          <option>
                            Livestock
                          </option>

                          <option>
                            Water Plant
                          </option>

                          <option>
                            Farms
                          </option>

                          <option>
                            General Inquiry
                          </option>
                        </select>

                      </div>
                    </div>

                  </div>

                  <div className="contact-field">

                    <label>Message</label>

                    <textarea
                      rows="6"
                      placeholder="Write your message here..."
                    ></textarea>

                  </div>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send Message

                    <i className="bi bi-arrow-right"></i>
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS INQUIRY */}
      <section className="contact-business-section">

        <div className="container">

          <div className="contact-business-content">

            <div>
              <span>BUSINESS WITH US</span>

              <h2>
                Have a Business
                <br />
                Opportunity?
              </h2>

              <p>
                We are always open to exploring new
                opportunities, partnerships and ideas.
              </p>
            </div>

            <a
              href="https://wa.me/03266719872"
              target="_blank"
              rel="noreferrer"
              className="contact-whatsapp-btn"
            >
              <i className="bi bi-whatsapp"></i>

              Chat With Us
            </a>

          </div>

        </div>

      </section>



      <WhatsAppButton />
    </>
  );
}

export default Contact;