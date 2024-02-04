import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    twitterHandle: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your email template ID and user ID from EmailJS
    const emailParams = {
      to_email: "your_predefined_email@example.com",
      from_name: formData.name,
      from_website: formData.website,
      from_twitter: formData.twitterHandle,
      from_image: formData.imageUrl,
    };

    // Add your EmailJS service ID
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams, "YOUR_USER_ID")
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form
      className="max-w-lg mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <label className="block mb-2 text-lg text-gray-800">Name:</label>
      <input
        className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="block mb-2 text-lg text-gray-800">Website:</label>
      <input
        className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
      />

      <label className="block mb-2 text-lg text-gray-800">Twitter Handle:</label>
      <input
        className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        name="twitterHandle"
        value={formData.twitterHandle}
        onChange={handleChange}
      />

      <label className="block mb-2 text-lg text-gray-800">Image URL:</label>
      <input
        className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
      />

      <button
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;

