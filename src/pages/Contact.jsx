import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values) => {
    const errs = {};
    if (!values.name.trim()) errs.name = "Name is required.";
    if (!values.email.trim()) {
      errs.email = "Email is required.";
    } else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(values.email)) errs.email = "Invalid email address.";
    }
    if (!values.message.trim()) errs.message = "Message is required.";
    else if (values.message.trim().length < 10)
      errs.message = "Message is too short (at least 10 characters).";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      console.log("Contact form submitted:", form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      setSubmitted(false);
    }
  };

  const isValid = Object.keys(validate(form)).length === 0;

  return (
    <div className="contact-page">
      <section className="contact-left contact-form large">
        <h3>Send a message</h3>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="12"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
            />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>

          <button type="submit" disabled={!isValid}>
            Send
          </button>
          {submitted && (
            <div className="success">
              Thanks! Your message has been sent (check console.log).
            </div>
          )}
        </form>
      </section>

      <section className="contact-right contact-info">
        <h2>Contact</h2>
        <p>
          If you have questions or want to collaborate, feel free to reach out
          using one of the options below.
        </p>

        <div>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:Ryan27072008@gmail.com">Ryan27072008@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+31611246100">+31 6 11246100</a>
          </p>
          <p>
            <strong>Location:</strong> Netherlands
          </p>

          <div className="social-links">
            <p>
              <strong>Social:</strong>
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/Ryan2707"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
