import { useState } from "react";

import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const date = formData.get("date");
    const guests = formData.get("guests");

    const message = `
Hello Najia Group,

I want to book the Wedding Hall.

Name: ${name}
Phone: ${phone}
Event Date: ${date}
Guests: ${guests}
`;

    window.open(
      `https://wa.me/923001234567?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );

    setSubmitted(true);

    e.target.reset();
  };

  return (
    <>
      <Navbar />

      <section className="booking-page">

        <div className="container">

          <div className="booking-wrapper">

            <div className="booking-info">

              <span className="section-tag">
                NAJIA GROUP
              </span>

              <h1>
                Book Your
                <br />

                <span>
                  Special Event
                </span>
              </h1>

              <p>
                Send us your event details and our team
                will contact you regarding availability
                and booking.
              </p>

              <div className="booking-info-item">

                <i className="bi bi-calendar-event"></i>

                <span>
                  Choose your preferred event date
                </span>

              </div>

              <div className="booking-info-item">

                <i className="bi bi-people"></i>

                <span>
                  Tell us your expected number of guests
                </span>

              </div>

              <div className="booking-info-item">

                <i className="bi bi-whatsapp"></i>

                <span>
                  Booking request will open on WhatsApp
                </span>

              </div>

            </div>

            <form
              className="booking-form"
              onSubmit={handleSubmit}
            >

              <h2>
                Wedding Hall Booking
              </h2>

              <div className="mb-3">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                />

              </div>

              <div className="mb-3">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  required
                />

              </div>

              <div className="mb-3">

                <label>
                  Event Date
                </label>

                <input
                  type="date"
                  name="date"
                  className="form-control"
                  required
                />

              </div>

              <div className="mb-4">

                <label>
                  Expected Guests
                </label>

                <select
                  name="guests"
                  className="form-select"
                  required
                >

                  <option value="">
                    Select Guests
                  </option>

                  <option>
                    Under 100
                  </option>

                  <option>
                    100 - 300
                  </option>

                  <option>
                    300 - 500
                  </option>

                  <option>
                    500+
                  </option>

                </select>

              </div>

              <button
                type="submit"
                className="submit-btn"
              >

                Send Booking Request

                <i className="bi bi-whatsapp"></i>

              </button>

              {submitted && (

                <p className="booking-success">

                  Your booking request is ready.
                  WhatsApp should open automatically.

                </p>

              )}

            </form>

          </div>

        </div>

      </section>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Booking;