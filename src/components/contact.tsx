import React, { useState } from 'react';
import './contact.scss';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

interface ContactFormProps {
  serviceId: string;
  templateId: string;
  userId: string;
}

export default function Contact({ serviceId, templateId, userId }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const onSubmit = function () {
    setName('');
    setEmail('');
            setMessage('');
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.init(userId);
    emailjs.sendForm(serviceId, templateId, e.currentTarget)
    .then((response: EmailJSResponseStatus) => {
      console.log('Email sent successfully!', response.text);
          onSubmit();
    })
    .catch((error: any) => {
      console.error('Error sending email:', error);
    });
  };

  return (
    <div id="contact" className="contact">
      <h1>Feel Free to Reach Out!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
