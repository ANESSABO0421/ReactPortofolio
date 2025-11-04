import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../App";
import emailjs from "emailjs-com";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const sentEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ujloms",
        "template_vw9xwq5",
        formRef.current,
        "dtWkdo4Xe4hk2mNM4"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
        }
      );
  };

  return (
    <div className="h-[500px]  flex justify-center items-center flex-col ">
      <h1 className="text-5xl md:text-6xl font-bold text-center  m-2 md:m-4 lg:m-5">
        Contact Me
      </h1>
      <form ref={formRef} onSubmit={sentEmail}>
        <fieldset
          className={`fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md lg:w-xl border p-4 ${darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
        >
          <label
            className={darkMode ? "text-black" : "text-white"}
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={`input w-full ${darkMode ? "text-white" : "text-white"}`}
            placeholder="Your name"
            required
          />

          <label
            className={darkMode ? "text-black" : "text-white"}
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`input w-full ${darkMode ? "text-white" : "text-white"}`}
            placeholder="you@example.com"
            required
          />

          <label
            className={darkMode ? "text-black" : "text-white"}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className={`input w-full h-[100px] px-3 py-2 ${darkMode ? "text-white" : "text-white"
              }`}
            placeholder="Write your message..."
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 mt-5"
          >
            Submit
          </button>
          {success && (
            <p className="text-green-500 mt-3 font-medium">
              ✔ Message sent successfully!
            </p>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
