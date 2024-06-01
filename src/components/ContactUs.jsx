import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from "axios";
// import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motions";
let savedTheme = localStorage.getItem('theme') || 'light';
export const styles = {
  // ... other styles
  sectionHeadText: {
    color: 'black', // or any other color you want
  },
  sectionHeadTextWhite: {
    color: 'white', // or any other color you want
  },
};
const s={
  fontSize:40
}
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_qfep0u4',//write service id here 
        'template_te2r09e',//write templet id here
        {
          from_name: form.name,
          to_name: "TimeWarp",
          from_email: form.email,
          to_email: "info@timewarp.com",
          message: form.message,
        },
        '2L1ir1kGrUHNlXEjH'  //write public_id here
      );
    
   


      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");


      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);


      alert("Sorry, something went wrong while sending your message. Please try again later.");
    }
  };
  const handleSaveToDB = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to MongoDB
      await axios.post('http://localhost:5000/api/contact', form);

      setLoading(false);
      alert("Your message has been saved to the database.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Sorry, something went wrong while saving your message to the database. Please try again later.");
    }
  };
  
  

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p
          className={
            savedTheme === 'light'
              ? styles.sectionSubText
              : styles.sectionSubTextWhite
          }
        >
          Get in touch
        </p>
        <h3
          className={
            savedTheme === 'light'
              ? styles.sectionHeadText
              : styles.sectionHeadTextWhite
          }
          style={s}
        >
          Contact Us.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleEmailSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span
              className={
                savedTheme === 'light'
                  ? styles.labelText
                  : styles.labelTextWhite
              }
            >
              Your Name
            </span>
            <br />
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-[#1e1e1e]'
            />
          </label>
          <label className='flex flex-col'>
            <span
              className={
                savedTheme === 'light'
                  ? styles.labelText
                  : styles.labelTextWhite
                }
            >
              Your email
            </span>
                <br />
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-[#1e1e1e]'
            />
          </label>
          <label className='flex flex-col'>
            <span
              className={
                savedTheme === 'light'
                  ? styles.labelText
                  : styles.labelTextWhite
              }
            >
              Your Message
            </span>
                <br />
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-[#1e1e1e]'
            />
          </label>


          <div className='flex gap-8'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary bg-cyan-800 hover:scale-[1.1]'
            >
              {loading ? "Sending..." : "Send_Mail"}
            </button>
            <button
              type='button'
              onClick={handleSaveToDB}
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary bg-cyan-800 hover:scale-[1.1]'
            >
              {loading ? "Saving..." : "Submit"}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
