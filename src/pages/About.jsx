import React from "react";
import { Link } from "react-router-dom";

// This is the About page - a static page with information about the store.
function About() {
  return (
    <section className="container">
      <h1>About Us</h1>
      <p>
        My Bookstore is a small online shop where we sell books we love.
        We started this project as a school assignment, but we tried to make
        it feel like a real bookstore website.
      </p>

      <div className="about-item">
        <h2>Our Story</h2>
        <p>
          We believe everyone should be able to find a book that speaks to
          them. That's why we keep our collection small and carefully
          chosen, instead of trying to sell everything.
        </p>
      </div>

      <div className="about-item">
        <h2>Our Mission</h2>
        <p>
          To make it simple and enjoyable to discover new books, whether
          you're into fiction, poetry, or learning something new.
        </p>
      </div>

      <div className="about-item">
        <h2>Contact</h2>
        <p>
          Have a question? Visit our <Link to="/contact">Contact page</Link> and
          send us a message.
        </p>
      </div>
    </section>
  );
}

export default About;
