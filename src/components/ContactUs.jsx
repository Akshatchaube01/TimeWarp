// components/ContactUs.jsx
import React, {useState} from 'react';
import aboutImage from '../assets/cartoon.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFemale, faMobilePhone} from "@fortawesome/free-solid-svg-icons";


const ContactUs = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name.trim() || !message.trim() || !email.trim()){
            alert("Fill all the fields")
            return
        }

        if(!name.match(/^[a-z]/i)){
            alert("Only alphabets are allowed in name")
            return
        }

        alert("Message sent successfully")
    }


  return (

      <div className="h-screen place-content-center">
          <div className=" max-w-md mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-4xl grid ">
              <div className="md:flex  ">
                  <div className="md:shrink-0 basis-1/2 p-6">
                      <div className="m-4">
                        <img className="h-96 object-cover" src={aboutImage} alt="Modern building architecture"/>
                      </div>
                      <div className="mt-10  font-semibold" style={{color:"black"}}>
                          <h6 className="text-lg mb-2">Follow us</h6>

                              <div className="grid grid-cols-2">
                                  <div className="flex flex-col">
                                      <div><span className="me-2 "><FontAwesomeIcon icon={faEnvelope}/></span>Email</div>
                                      <div>info@timewarp.com</div>
                                  </div>
                                  <div className="flex flex-col">
                                      <div><span className="me-2 "><FontAwesomeIcon icon={faMobilePhone}/></span>Phone</div>
                                      <div>+1 (555) 123-4567</div>
                                  </div>
                              </div>

                      </div>
                  </div>
                  <div className="bg-gray-700 basis-1/2">
                      <div className="p-6">
                          <h4 className="text-4xl">Contact Us</h4>
                          <h6 >Contact us for a quote</h6>
                          <div className=" mt-5 flex gap-5 justify-center items-center flex-col">
                              <h6 >Get a quote</h6>
                              <form className="grid gap-3 place-content-center text-black" onSubmit={(e)=>handleSubmit(e)}>
                                  <input required type="text" value={name} minLength={3} onChange={(e)=> {
                                      setName(e.target.value)
                                  }} className="rounded-xl h-10 w-72 p-3 " placeholder="Name: eg- Elon Mask"/>
                                  <input required type="email"  value={email} onChange={(e)=> {
                                      setEmail(e.target.value)
                                  }} className="rounded-xl h-10 w-72 p-3" placeholder="Email: eg- Elon@gmail.com"/>
                                  <input required type="tel" pattern="[0-9]{10}" title="Only 10 digit numbers are allowed" className="rounded-xl h-10 w-72 p-3"  placeholder="Phone no.: eg- 65654-56554"/>
                                  <textarea required value={message} onChange={(e)=> {
                                      setMessage(e.target.value)
                                  }} rows="3" cols="4" className="rounded-xl  w-72 p-3" placeholder="Message: eg- Dear admin , I am intersted in your website. I want to collaborate..."/>
                                  <button type="submit"  className="border-4 p-2 rounded-xl w-fit text-white justify-self-center">Send Message</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>


  );
}

export default ContactUs;
