import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="container">
      <div className="section-head">
        <span className="call-number">Get in touch</span>
        <h1>Contact us</h1>
        <p>
          Ask about a special order, a book you can't find, or whether
          there's room at Thursday's poetry night. We usually reply within a
          day.
        </p>
      </div>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit" className="btn">Send message</button>
        </div>

        {submitted && (
          <p className="success-msg">
            Thanks, {form.name.split(" ")[0] || "friend"} — your message has
            been noted. We'll write back soon.
          </p>
        )}
      </form>
    </section>
  );
}
