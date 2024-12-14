'use client';
import { useState } from "react";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
        setMessage("");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-blue-600 placeholder-gray-400"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-green-600 placeholder-gray-400"
            placeholder="Write your message here..."
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md text-white ${
            isSubmitting ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
      {success && <p className="mt-4 text-green-600">Your message has been sent successfully!</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default ContactMe;
