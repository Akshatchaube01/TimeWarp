import React from "react";
import "./privacy.css";
import Tilty from "react-tilty";
import BackToTop from "./BottomToTop";
import Footer from "./Footer";


const Privacy = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8" >
            <BackToTop />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="rounded-md about-title text-4xl text-center italic font-bold p-2 mb-8 mt-[100px] bg-gradient-to-r from-sky-500">
            Privacy Policy
          </h1>
          <p className=" mb-4">
            Welcome to our Privacy Policy page! When you use our web site
            services, you trust us with your information. This Privacy Policy is
            meant to help you understand what data we collect, why we collect
            it, and what we do with it. This is important; we hope you will take
            time to read it carefully.
          </p>
          <p className=" mb-4">
            We collect information to provide better services to all of our
            users. We collect information in the following ways:
          </p>
          <ul className="list-disc list-inside mb-4 ">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <Tilty>
          <img
            src="https://termshub.io/v3/assets/images/products/privacy_policy_hero.svg"
            alt="Privacy"
            className="rounded-lg"
          />
          </Tilty>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col justify-center">
        <Tilty>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/843/413/original/abstract-cyber-security-privacy-information-network-concept-padlock-protection-digital-network-personal-data-cyber-data-or-information-privacy-idea-internet-link-on-hi-tech-blue-future-background-vector.jpg"
            alt="Data Protection"
            className="rounded-lg shadow-lg"
          /> 
          </Tilty>
        </div>
        <div>
          <h2 className="rounded-md about-title text-2xl text-center italic font-semibold bg-gradient-to-r from-sky-500 ">
            How We Use Information We Collect
          </h2>
          <p className="mt-8 mb-4">
            We use the information we collect from all of our services to
            provide, maintain, protect and improve them, to develop new ones,
            and to protect our users. We also use this information to offer you
            tailored content – like giving you more relevant search results and
            ads.
          </p>
          <ul className="list-disc list-inside mb-4 ">
            <li>
              Information you give us. For example, our services require you to
              sign up for an account. When you do, we’ll ask for personal
              information, like your name, email address, telephone number or
              credit card.
            </li>
            <li>
              Information we get from your use of our services. We collect
              information about the services that you use and how you use them,
              like when you visit a website that uses our services or you view
              and interact with our ads and content.
            </li>
          </ul>

          <p className=" mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="rounded-md about-title text-2xl text-center italic font-semibold bg-gradient-to-r from-sky-500 mb-8">
            Information Sharing
          </h2>
          <p className="mb-4">
            We are committed to safeguarding your personal information and
            ensuring transparency about how it is shared. Below, we outline our
            key information sharing practices:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your
              data with vendors or contractors who assist in our operations,
              such as payment processors, email services, and customer support.
            </li>
            <li>
              <strong>Business Partners:</strong> We collaborate with trusted
              partners for co-branded services or joint marketing efforts, and
              may share your information with them for these purposes.
            </li>
            <li>
              <strong>Mergers and Acquisitions:</strong> In the event of a
              merger, acquisition, or asset sale, your information may be
              transferred to the new entity.
            </li>
            <li>
              <strong>Children's Privacy:</strong> We take special care in
              handling data collected from children under a certain age,
              complying with laws like COPPA.
            </li>
            <li>
              <strong>Policy Updates:</strong> We will inform you about any
              updates to our privacy policy and the effective date of such
              changes.
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center">
        <Tilty>
          <img
            src="https://www.nojitter.com/sites/default/files/ribkhan___0.jpg"
            alt="Information Sharing"
            className="rounded-lg shadow-lg"
          />
          </Tilty>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col justify-center">
          <Tilty>
          <img
            src="https://media.gettyimages.com/id/1345282963/photo/education-and-light-bulb-concept.jpg?s=2048x2048&w=gi&k=20&c=RcmHc2qcf_k_HHq0Qbl0a1_GlDdfKK05rsLf8LYw2Z4="
            alt="User Rights"
            className="rounded-lg shadow-lg"
          />
          </Tilty>
        </div>
        <div>
          <h2 className="rounded-md about-title text-2xl text-center italic font-semibold bg-gradient-to-r from-sky-500  mb-8">
            Your Rights
          </h2>
          <p className=" mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat:
          </p>
          <ul className="list-disc list-inside mb-4 ">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="rounded-md about-title text-2xl text-center italic font-semibold bg-gradient-to-r from-sky-500  mb-8">
          Contact Us
        </h2>
        <p className=" mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Footer />

    </div>
    
  );
};

export default Privacy;
