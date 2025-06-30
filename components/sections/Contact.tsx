"use client";
import React, { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import GithubIcon from "@/components/icons/Githubcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import MailIcon from "../icons/MailIcon";

declare global {
  interface Window {
    emailjs: any;
  }
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Ensure EmailJS is loaded
    if (typeof window.emailjs === "undefined") {
      alert(
        "EmailJS SDK not loaded. Make sure you have included the script and initialized it."
      );
      setIsSubmitting(false);
      setSubmitMessage("Error: EmailJS not loaded.");
      return;
    }

    // Replace with your EmailJS Service ID, Template ID
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

    window.emailjs
      .send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toISOString(), // Optional: add timestamp
      })
      .then(() => {
        setSubmitMessage("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      })
      .catch((err: any) => {
        setSubmitMessage("Failed to send message. Please try again later.");
        console.error("EmailJS error:", err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const socialLinks = [
    {
      name: "Instagram",
      username: `@${process.env.NEXT_PUBLIC_INSTAGRAM}`, // Replace with your Instagram username
      icon: InstagramIcon,
      href: `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM}`, // Ensure no trailing slash
    }, // TODO: Replace with your links
    {
      name: "Telegram",
      username: `@${process.env.NEXT_PUBLIC_TELEGRAM}`,
      icon: TelegramIcon,
      href: `https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM}`,
    },
    {
      name: "Email",
      username: process.env.NEXT_PUBLIC_EMAIL,
      icon: MailIcon,
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    },
    {
      name: "GitHub",
      username: process.env.NEXT_PUBLIC_GITHUB,
      icon: GithubIcon,
      href: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB}`,
    },
    {
      name: "LinkedIn",
      username: process.env.NEXT_PUBLIC_LINKEDIN,
      icon: LinkedInIcon,
      href: `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN}`,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-dark-blue-2">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-light-gold mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-brand-gray-light mb-12 sm:mb-16 text-lg">
          Let&apos;s work together
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-brand-gray">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gold mb-6">
              Contact Information
            </h3>
            <p className="mb-8 text-base sm:text-lg">
              I&apos;m currently available for freelance work and full-time
              positions. If you have a project that needs coding or if
              you&apos;re looking for a developer to join your team, feel free
              to contact me.
            </p>
            <div className="flex flex-col gap-y-6 my-6 ">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-white hover:text-gold transition-colors group"
                  >
                    <Icon className="w-6 h-6 text-brand-white group-hover:text-gold transition-colors" />
                    <span className="text-xl">{link.username}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-dark-blue-3 p-6 sm:p-8 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-light-gold mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-dark-blue-1/10 bg-dark-blue-1 text-brand-white rounded-md focus:ring-gold focus:border-gold text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light-gold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-dark-blue-1/10 bg-dark-blue-1 text-brand-white rounded-md focus:ring-gold focus:border-gold text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-light-gold mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-dark-blue-1/10 bg-dark-blue-1 text-brand-white rounded-md focus:ring-gold focus:border-gold text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-light-gold mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-dark-blue-1/10 bg-dark-blue-1 text-brand-white rounded-md focus:ring-gold focus:border-gold resize-vertical min-h-[120px] text-sm sm:text-base"
                ></textarea>
              </div>
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitMessage && (
                <p
                  className={`mt-4 text-sm ${
                    submitMessage.includes("Failed")
                      ? "text-red-400"
                      : "text-green-400"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
