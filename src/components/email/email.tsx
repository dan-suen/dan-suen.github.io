import "./email.scss";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";

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
          reply_to: email,
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
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      //await loadSlim(engine);
      await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };
  const options: ISourceOptions = {
    key: "collisionsBounce",
    name: "Collisions Bounce",
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },
      collisions: {
        enable: true,
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: {
          min: 10,
          max: 15,
        },
      },
      links: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 10,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: "repulse",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
      },
    },
    background: {
      color: "#0d47a1",
    },
  };
  if (init) {
    return (
      <div className="email">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className="card email-form">
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
      </div>
    );
  }
  return <></>;
}
