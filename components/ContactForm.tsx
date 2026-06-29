'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Show success message
    setSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    // TODO: Configure form submission endpoint
    // Example with a backend service:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setSubmitted(true);
    //   }
    // } catch (error) {
    //   console.error('Form submission error:', error);
    // }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const { contact } = portfolioData;

  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-layout">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {contact.heading}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-azure-500 to-blue-600 rounded-full mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="card p-6 hover:shadow-lg transition-shadow flex gap-4 group cursor-pointer"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg h-fit group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 dark:text-white mb-1">
                  Email
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 break-all">
                  {contact.email}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="card p-6 hover:shadow-lg transition-shadow flex gap-4 group cursor-pointer"
            >
              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg h-fit group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 dark:text-white mb-1">
                  Phone
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {contact.phone}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="card p-6 flex gap-4">
              <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg h-fit flex-shrink-0">
                <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900 dark:text-white mb-1">
                  Location
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {contact.location}
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 hover:shadow-lg transition-shadow flex gap-4 group cursor-pointer"
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg h-fit group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors flex-shrink-0">
                <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 dark:text-white mb-1">
                  LinkedIn
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 break-all">
                  linkedin.com/in/prasoonpawar
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border rounded-lg focus-ring text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-slate-200 dark:border-slate-600'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border rounded-lg focus-ring text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-slate-200 dark:border-slate-600'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                  >
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus-ring text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your opportunity or question..."
                    rows={5}
                    className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border rounded-lg focus-ring text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500'
                        : 'border-slate-200 dark:border-slate-600'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-3 font-medium"
                >
                  Send Message
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-sm">
                    Thank you for your message! I&apos;ll get back to you soon.
                  </div>
                )}

                {/* Configuration Note */}
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  💡 Form submission is ready for backend integration. See code
                  comments for configuration options.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
