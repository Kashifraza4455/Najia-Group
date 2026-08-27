import { useState } from "react";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload / navigation rokne ke liye

    setStatus("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/najiafarms66@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            _subject: "New Message from Najia Group Website",
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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

                    <h5>Sher Zaman Dahri</h5>
                    <h4>0307-3257423</h4>

                    <h5>Aziz Ahmed Dahri</h5>
                    <h4>0308-3129311</h4>
                  </div>

                </div>

                {/* EMAIL */}
                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>

                  <div>
                    <span>EMAIL</span>
                    <h4>najiafarms66@gmail.com</h4>
                  </div>

                </div>

                {/* LOCATION */}
                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                  <div>
                    <span>LOCATION</span>
                    <h4>Dahri Petrol Pump Near Shahpur Chakar</h4>
                  </div>

                </div>

                {/* BUSINESS HOURS */}
                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>

                  <div>
                    <span>BUSINESS HOURS</span>
                    <h4>Monday - Sunday</h4>
                    <small>9:00 AM - 6:00 PM</small>
                  </div>

                </div>

                <div className="contact-social">

                  <span>FOLLOW US</span>

                  <div>
                    <a href="https://www.facebook.com/share/1FRjHMoDHQ/" target="blank">
                      <i className="bi bi-facebook"></i>
                    </a>

                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>

                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>

                    <a href="https://whatsapp.com/channel/0029Vb9LqXnJZg4Elk1qvn24" target="blank">
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

                <form onSubmit={handleSubmit}>

                  <div className="row">

                    {/* NAME */}
                    <div className="col-md-6">
                      <div className="contact-field">

                        <label>Your Name</label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />

                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="col-md-6">
                      <div className="contact-field">

                        <label>Email Address</label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />

                      </div>
                    </div>

                  </div>

                  <div className="row">

                    {/* PHONE */}
                    <div className="col-md-6">
                      <div className="contact-field">

                        <label>Phone Number</label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                        />

                      </div>
                    </div>

                    {/* SUBJECT */}
                    <div className="col-md-6">
                      <div className="contact-field">

                        <label>Subject</label>

                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >

                          <option value="">
                            Select a subject
                          </option>

                          <option value="Wedding Hall">
                            Wedding Hall
                          </option>

                          <option value="Flour Mill">
                            Flour Mill
                          </option>

                          <option value="Livestock">
                            Livestock
                          </option>

                          <option value="Water Plant">
                            Water Plant
                          </option>

                          <option value="Farms">
                            Farms
                          </option>

                          <option value="General Inquiry">
                            General Inquiry
                          </option>

                        </select>

                      </div>
                    </div>

                  </div>

                  {/* MESSAGE */}
                  <div className="contact-field">

                    <label>Message</label>

                    <textarea
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required
                    ></textarea>

                  </div>

                  <button
                    type="submit"
                    className="contact-submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}

                    <i className="bi bi-arrow-right"></i>
                  </button>

                  {/* STATUS MESSAGES */}
                  {status === "success" && (
                    <p style={{ color: "green", marginTop: "10px" }}>
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  )}

                  {status === "error" && (
                    <p style={{ color: "red", marginTop: "10px" }}>
                      Something went wrong. Please try again or contact us via WhatsApp.
                    </p>
                  )}

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
              href="https://wa.me/923073257423"
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