import React, { useState } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motions";
import FireFliesBackground from "./FireFlies";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    toast.info("Sending your message...");

    const formData = new FormData(event.target);
    formData.append("access_key", "b31a0b0f-6a98-4f98-a62b-c6c6b05ae9ee");

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const validEmailDomains = ["com", "net", "org", "in"]; 
    const enteredDomain = email.split(".")[1];

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      setLoading(false);
      return;
    } else if (!validEmailDomains.includes(enteredDomain)) {
      setEmailError("Sorry, we do not support this email domain.");
      setLoading(false);
      return;
    } else {
      setEmailError("");
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      toast.error(`Error: ${data.message}`);
    }

    setLoading(false);
  };

  let savedTheme = localStorage.getItem("theme") || "light";
  const styles = {
    sectionHeadText: {
      color: "black",
    },
    sectionHeadTextWhite: {
      color: "white",
    },
    sectionSubText: {
      color: "black",
    },
    sectionSubTextWhite: {
      color: "white",
    },
    labelText: {
      color: "black",
    },
    labelTextWhite: {
      color: "white",
    },
  };

  const s = {
    fontSize: 40,
    fontWeight: 800,
  };

  return (
    <>
      <ToastContainer />
      <div className="flex xl:flex-row flex-col-reverse overflow-hidden">
        <FireFliesBackground />

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className=" bg-black-100 p-8 rounded-2xl"
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

          <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-8">
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
                required
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
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-[#1e1e1e] ${
                  emailError ? "border-red-500" : "" }`}
                required
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
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
                required
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
                {loading ? "Sending..." : "Submit Form"}
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
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="bg-gray-300 h-64 md:h-full">
              <div className="bg-gray-300 p-6 ">
                <h2 className="text-black text-2xl font-bold mb-4">Contact Us</h2>
                <div className="rounded-md border p-4">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-envelope mr-2 text-black"></i>
                    <p className="text-black">contact@example.com</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <i className="fas fa-map-marker-alt mr-2 text-black"></i>
                    <p className="text-black">123 Main Street, City, Country</p>
                  </div>
                  <div className="flex items-center mb-1">
                    <i className="fas fa-phone-alt mr-2 text-black"></i>
                    <p className="text-black">+1 234 567 890</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-black">
                    Feel free to reach out to us for any inquiries or assistance.
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Opening Hours</h3>
                  <ul>
                    <li className="text-black">Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li className="text-black">Saturday: 10:00 AM - 4:00 PM</li>
                    <li className="text-black">Sunday: Closed</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Follow Us</h3>
                  <div className="flex space-x-4 xs:hidden">
                    <a href="#" className="text-blue-500 hover:text-blue-700 sm:ml-4">
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
