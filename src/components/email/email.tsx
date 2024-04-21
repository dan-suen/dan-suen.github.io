import "./email.scss";
import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

export default function Email() {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const sendEmail = (formData: FormData): void => {
    const { name, email, message } = Object.fromEntries(formData);
    emailjs
      .send(
        "service_ogmpcx9",
        "template_tamc4qh",
        {
          from_name: name,
          message: message,
          reply_to: email
        },
        "VVPJxWc4NaNP5MZQH"
      )
      .then((response: EmailJSResponseStatus) => {
        console.log("Email sent:", response);
      })
      .catch((error: Error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    sendEmail(formData);
    setShowConfirmation(true);
    event.currentTarget.reset();
  };

  const handleConfirmationClose = (): void => {
    setShowConfirmation(false);
  };
  const divStyle: React.CSSProperties = {
    width: "18rem",
  };
  return (
    <div className="card" style={divStyle}>
      <div className="card-body">
        <h5 className="card-title">Send a Message:</h5>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message" rows={4} required />
          <br />
          <input className="btn btn-primary" type="submit" value="Send" />
        </form>
        {showConfirmation && (
          <div className="confirmation-popup">
            <p>Thank you for your message! I'll get back to you soon.</p>
            <button
              className="btn btn-success"
              onClick={handleConfirmationClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
