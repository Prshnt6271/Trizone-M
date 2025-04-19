import React, { useState, useCallback, useRef, useMemo } from "react";
import emailjs from "emailjs-com";
import {
  Phone,
  Mail,
  Link,
  Instagram,
  Facebook,
  Linkedin,
  MapPinned,
} from "lucide-react";

const Content = () => {
  const formRef = useRef(null);

  const initialState = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      countryCode: "+91",
      service: "",
      message: "",
    }),
    []
  );

  const [formData, setFormData] = useState(initialState);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm("service", "template", formRef.current, "id");
      alert("Message Sent Successfully!");
      setFormData(initialState);
    } catch (error) {
      alert("Error sending message!");
    }
  };

  const countryCodes = useMemo(
    () => [
      { code: "+91", label: "India" },
      { code: "+1", label: "USA" },
      { code: "+44", label: "UK" },
    ],
    []
  );

  const services = useMemo(
    () => [
      "Residential",
      "Commercial",
      "SCO",
      "Studio Apartments",
      "Plots",
      "Fractional Ownership",
      "FarmHouses",
    ],
    []
  );

  return (
    <section className="max-w-7xl mx-auto py-12 px-6 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-black transition-transform duration-500 hover:scale-105 pt-10 mt-10">
          <h2 className="text-2xl md:text-4xl font-bold">Contact Information</h2>
          <p className="text-lg mt-4">
            contact@trizzone.com
          </p>

          {/* Contact Details */}
          <div className="mt-6 space-y-4">
            {[
              {
                Icon: Mail,
                label: "Email",
                value: "contact@trizzone.com",
                href: "mailto:contact@trizzone.com",
              },
              {
                Icon: Phone,
                label: "Phone",
                value: "+91 124 4009858",
                href: "tel:+911244009858",
              },
              {
                Icon: Link,
                label: "Website",
                value: "www.example.com",
                href: "https://www.example.com",
              },
            ].map(({ Icon, label, value, href }) => (
              <p key={label} className="flex items-center">
                <Icon className="mr-2 text-black h-5 w-5" />
                <span className="font-bold">{label}:</span>
                <a href={href} className="underline ml-2 text-blue-600 hover:text-blue-800">
                  {value}
                </a>
              </p>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-6 flex space-x-4">
            {[
              { Icon: Instagram, href: "https://instagram.com", color: "text-pink-500" },
              { Icon: Facebook, href: "https://www.facebook.com/trizzone.design.consultancy.services/", color: "text-blue-600" },
              { Icon: Linkedin, href: "https://linkedin.com", color: "text-blue-700" },
            ].map(({ Icon, href, color }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                <Icon className={`${color} hover:opacity-75 h-6 w-6`} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-black mb-6">Let's Get in Touch</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {["name", "email"].map((field) => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />
            ))}

            {/* Phone Number with Country Code */}
            <div className="flex">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="border p-3 rounded-md"
                required
              >
                {countryCodes.map(({ code, label }) => (
                  <option key={code} value={code}>{`${code} (${label})`}</option>
                ))}
              </select>
              <input
                name="phone"
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="ml-2 w-full border p-3 rounded-md"
                required
              />
            </div>

            {/* Service Selection */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
              required
            >
              <option value="">Select a Property Type</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Content;
