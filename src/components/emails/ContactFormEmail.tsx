import React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({ name, email, message }) => (
  <div>
    <h1>Contact Form Submission</h1>
    <p>You have received a new message from your website contact form.</p>
    <h2>Message Details</h2>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> {email}</li>
    </ul>
    <h2>Message</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
