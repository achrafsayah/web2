import React, { useState } from "react";

// This is the Contact page - it has a simple form.
function Contact() {
  // These are "state" variables. React re-renders the page
  // whenever we update them using setName, setEmail, etc.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    // Stop the page from refreshing (the default browser behavior for forms)
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="container">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? Send us a message below.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>

        {submitted && (
          <p className="success">
            Thank you, {name}! Your message has been sent.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
