'use client'
import React, { useState } from 'react';

import { Mail, MessageSquare, Phone, Send, Users } from 'lucide-react';

function ContactCard({ icon: Icon, title, description, link, linkText }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-800">
      <div className="h-12 w-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2"
        >
          {linkText} <Send className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-100">Contact Us</h1>
          <p className="text-gray-400 mt-2">Get in touch with our development team</p>
        </div>
      </header>

      {/* Contact Options */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContactCard
              icon={MessageSquare}
              title="Community Chat"
              description="Join our Discord community for real-time discussions and support."
              link="https://discord.gg/PixcelCraft"
              linkText="Join Discord"
            />
            <ContactCard
              icon={Users}
              title="GitHub Discussions"
              description="Participate in discussions, feature requests, and bug reports."
              link="https://github.com/PixcelCraft/discussions"
              linkText="View Discussions"
            />
            <ContactCard
              icon={Phone}
              title="Schedule a Call"
              description="Book a video call with our developer team for complex inquiries."
              link="https://calendly.com/PixcelCraft"
              linkText="Schedule Now"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Send Us a Message</h2>
            <p className="text-gray-400">
              Have a specific question? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Send Message
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              PixcelCraft
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
              <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
              <a href="#" className="hover:text-blue-400 transition-colors">NPM</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © {new Date().getFullYear()} PixcelCraft. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;