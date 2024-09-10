import React from "react";

function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Contact Me</h2>
        <p className="text-center">
          Feel free to reach out to me through any of the channels below or use
          the contact form to get in touch directly.
        </p>
        <div className="text-center">
          <a
            href="mailto:janjvadiyagaurav344@example.com"
            className="btn btn-primary"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
