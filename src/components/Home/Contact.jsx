import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [showButton, setShowButton] = useState(false);
  const [showFinalLoad, setShowFinalLoad] = useState(false);
  const form = useRef();
  let clicks = 0;

  const sendEmail = (e) => {
    e.preventDefault();
    const nameCheck = document.getElementById("fromName").value.length;
    const emailCheck = document.getElementById("email").value.length;
    const messageCheck = document.getElementById("message").value.length;

    if (clicks < 2) {
      if (nameCheck !== 0 && emailCheck > 12 && messageCheck !== 0) {
        setShowButton(true);

        emailjs
          .sendForm(
            "gmail",
            "template_dyvlfqm",
            form.current,
            "user_UCVQB9AIUbJaobUtpSXnz"
          )
          .then((result) => {
            if (result.text === "OK") {
              e.target.reset();
              clicks++;
              setShowFinalLoad(true);
              setTimeout(() => {
                setShowButton(false);
                setShowFinalLoad(false);
              }, 5000);
            }
          });
      } else {
        return;
      }
    } else {
      return;
    }
  };

  return (
    <section id="contact">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="contact-wrapper"
      ></div>

      <div className="container">
        <div className="section__header--content">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Get in <span className="orange-color">Touch!</span>
          </h2>
        </div>
        <h4 className="text-uppercase">Send it through!</h4>

        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <input
            required
            type="text"
            name="from_name"
            id="fromName"
            placeholder="Name"
          />
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <textarea
            required
            placeholder="Message"
            name="message"
            id="message"
          ></textarea>

          {!showFinalLoad &&
            (showButton ? (
              <div className="loading__animation"></div>
            ) : (
              <button className="header__button contact__button" type="submit">
                Send
              </button>
            ))}

          {showFinalLoad && (
            <div className="contact__message-sent--success">
              Message is sent successfuly!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
