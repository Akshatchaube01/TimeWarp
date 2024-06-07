import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from "axios";
// import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motions";
import FireFliesBackground from "./FireFlies";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const service_id = process.env.REACT_APP_SERVICE_ID;
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "TimeWarp",
      message: message,
    };

    emailjs
      .send(
        "service_qfep0u4",
        "template_te2r09e",
        templateParams,
        "2L1ir1kGrUHNlXEjH"
      )
      .then((response) => {
        console.log("email sent", response);
        alert(
          "Your message has been sent successfully! Will get back to you as soon as possible."
        );
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        setLoading(false);
        console.log("error", err);
        alert(
          "Sorry, something went wrong while sending your message. Please try again later."
        );
      });
  };

  let savedTheme = localStorage.getItem("theme") || "light";
  const styles = {
    // ... other styles
    sectionHeadText: {
      color: "black", // or any other color you want
    },
    sectionHeadTextWhite: {
      color: "white", // or any other color you want
    },
  };
  const s = {
    fontSize: 40,
    fontWeight: 800,
  };

  // const handleChange = (e) => {
  //   const { target } = e;
  //   const { name, value } = target;

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };
  // const handleEmailSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     await emailjs.send(
  //       'service_qfep0u4',//write service id here
  //       'template_te2r09e',//write templet id here
  //       {
  //         from_name: form.name,
  //         to_name: "TimeWarp",
  //         from_email: form.email,
  //         to_email: "info@timewarp.com",
  //         message: form.message,
  //       },
  //       '2L1ir1kGrUHNlXEjH'  //write public_id here
  //     );

  //     setLoading(false);
  //     alert("Thank you. I will get back to you as soon as possible.");

  //     setForm({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     setLoading(false);
  //     console.error(error);

  //     alert("Sorry, something went wrong while sending your message. Please try again later.");
  //   }
  // };
  const handleSaveToDB = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to MongoDB
      await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        message,
      });

      setLoading(false);
      alert("Your message has been saved to the database.");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert(
        "Sorry, something went wrong while saving your message to the database. Please try again later."
      );
    }
  };

  return (
    <>
      <div className={` flex xl:flex-row flex-col-reverse  overflow-hidden`}>
        <FireFliesBackground />

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p
            className={
              savedTheme === "light"
                ? styles.sectionSubText
                : styles.sectionSubTextWhite
            }
            style={{ fontWeight: 650 }}
          >
            Get in touch
          </p>
          <h2
            className={
              savedTheme === "light"
                ? styles.sectionHeadText
                : styles.sectionHeadTextWhite
            }
            style={s}
          >
            Contact Us.
          </h2>

          <form
            onSubmit={handleEmailSubmit}
            className="mt-7 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span
                className={
                  savedTheme === "light"
                    ? styles.labelText
                    : styles.labelTextWhite
                }
                style={{ fontWeight: 650 }}
              >
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-[#1e1e1e]"
              />
            </label>
            <label className="flex flex-col">
              <span
                className={
                  savedTheme === "light"
                    ? styles.labelText
                    : styles.labelTextWhite
                }
                style={{ fontWeight: 650 }}
              >
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-[#1e1e1e]"
              />
            </label>
            <label className="flex flex-col">
              <span
                className={
                  savedTheme === "light"
                    ? styles.labelText
                    : styles.labelTextWhite
                }
                style={{ fontWeight: 650 }}
              >
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-[#1e1e1e]"
              />
            </label>

            <div className="flex gap-8">
              <button
                type="submit"
                className={`py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md hover:scale-[1.1] ${
                  savedTheme === "light"
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-black shadow-md"
                }`}
              >
                {loading ? "Sending..." : "Send Mail"}
              </button>
              <button
                type="button"
                onClick={handleSaveToDB}
                className={`py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md hover:scale-[1.1] ${
                  savedTheme === "light"
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-black shadow-md"
                }`}
              >
                {loading ? "Saving..." : "Submit"}
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div className="static-info">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <div className="bg-gray-200 h-64 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9353078.84733098!2d-106.48813274672541!3d39.49054996305706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1717736058924!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="md:col-span-1">
            {/* Static Contact Information */}
            <div className="bg-gray-300 h-64 md:h-full">
              <div className="bg-gray-300 p-6 ">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="rounded-md border p-4">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-envelope mr-2"></i>
                    <p>contact@example.com</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <p>123 Main Street, City, Country</p>
                  </div>
                  <div className="flex items-center mb-1">
                    <i className="fas fa-phone-alt mr-2"></i>
                    <p>+1 234 567 890</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    Feel free to reach out to us for any inquiries or
                    assistance.
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">Opening Hours</h3>
                  <ul>
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
