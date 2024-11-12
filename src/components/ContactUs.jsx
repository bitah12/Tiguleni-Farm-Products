import React, { useState } from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const ContactUs = () => {
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    const formEle = document.querySelector("form");
    const formdata = new FormData(formEle);
    fetch(import.meta.env.ITE_CONTACTUS_EXCELL_SHEET, {
      method: "POST",
      body: formdata,
    });
    setSuccess("Message successfully sent");
  };

  return (<div>
    <Navbar/>
    <div className="max-w-7xl h-screen mx-auto p-6">
      <h1 className="text-2xl mt-10 font-semibold mb-6">/Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FiPhoneCall className="text-red-500 text-3xl" />
            <h2 className="font-semibold text-lg">Call To Us</h2>
            <div>
              <div className="mt-24 relative -left-[130px]">
              <p className="text-gray-600">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-900 font-medium">Phone: +265994543849</p>
              </div>
            </div>
          </div>
       <div>-------------------------------------------------</div>
       <div className="flex items-center space-x-4">
            <FiMail className="text-red-500 text-3xl" />
            <h2 className="font-semibold text-lg">Write To Us</h2>
          </div>
          <div className="mt-4 relative">
            <p className="text-gray-600">
              Fill out our form and we will contact <br/> you within 24 hours.
            </p>
            <p className="text-gray-900 font-normal">
              Email: customer@tiguleni.com
            </p>
            <p className="text-gray-900 font-normal">
              Email: support@tiguleni.com
            </p>
          </div>
        </div>


        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name *"
                name="name"
                className="border border-gray-300 p-3 rounded-md w-full"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                name="Email"
                className="border border-gray-300 p-3 rounded-md w-full"
                onChange={handleChange}
                required
              />
              <input
                type="number"
                placeholder="Your Phone *"
                name="PhoneNumber"
                className="border border-gray-300 p-3 rounded-md w-full"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                rows="4"
                placeholder="Your Message"
                name="Message"
                className="border border-gray-300 p-3 rounded-md w-full"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
          {success && (
            <div
              className={`mt-4 text-xl text-center ${
                success.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {success}
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
  </div>
   
  );
};

export default ContactUs;
