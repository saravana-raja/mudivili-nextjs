"use client";

import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import emailjs from "emailjs-com";

const EMAILJS_SERVICE_ID = "service_aljvngn";
const EMAILJS_TEMPLATE_ID = "template_tgz96b9";
const EMAILJS_PUBLIC_KEY = "fMymOs7D0YXgwjXWS";

export default function Page() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Business with Mudivili
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Ready to transform your business with Edge IoT?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo Icon="Mail" title="Email Us" content="info@mudivilitec.com" />
            <ContactInfo Icon="Phone" title="Call Us" content="+91 7305087414" />
            <ContactInfo
              Icon="MapPin"
              title="Visit Us"
              content={`D10, Shashti Avenue, Erikkarai Street, Vandalur\nChennai – 600048\nTamil Nadu, India`}
            />
            <a
              href="https://wa.me/917305087414"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> Contact via WhatsApp
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

// Contact Information Component
function ContactInfo({ Icon, title, content }) {
  const IconComponent = require("lucide-react")[Icon];

  return (
    <div className="flex items-start space-x-4">
      <IconComponent className="h-6 w-6 text-blue-500 mt-1" />
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, event.target, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        event.target.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField type="text" name="company" placeholder="Company Name" />
      <InputField type="text" name="name" placeholder="Your Name" />
      <InputField type="email" name="email" placeholder="Your Email" />
      <InputField type="text" name="phone" placeholder="Your Contact Number" />
      <TextAreaField name="message" placeholder="Your Message" />

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
        Send Message
      </button>

      {status === "success" && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}

// Input Field Component
function InputField({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
      required
    />
  );
}

// Text Area Component
function TextAreaField({ name, placeholder }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={4}
      className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
      required
    ></textarea>
  );
}
