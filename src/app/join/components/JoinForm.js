"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const content = {
  en: {
    title: "Join the Movement",
    subtitle: "Be part of the global pause for peace on August 12, 2026",
    description:
      "PHOS is more than an event - it's a movement. Join artists, leaders, and visionaries from around the world in creating a moment of unity through music and light.",
    form: {
      name: "Full Name",
      email: "Email Address",
      country: "Country",
      role: "I am a...",
      interests: "Areas of Interest",
      submit: "Join PHOS",
      submitting: "Joining...",
    },
    roles: [
      "Artist/Musician",
      "Leader/Organizer",
      "Visionary/Thinker",
      "Supporter/Enthusiast",
      "Other",
    ],
    interests: [
      "Music & Performance",
      "Event Organization",
      "Peace & Unity",
      "Technology & Innovation",
      "Community Building",
      "Art & Creativity",
      "Spiritual Growth",
      "Global Impact",
    ],
    success: {
      title: "Welcome to PHOS!",
      message:
        "Thank you for joining the movement. We'll be in touch soon with more details about how you can participate.",
    },
    errors: {
      required: "This field is required",
      email: "Please enter a valid email address",
      name: "Please enter your full name",
    },
  },
  is: {
    title: "Vertu með í hreyfingunni",
    subtitle: "Vertu hluti af alþjóðlegu pásu fyrir frið 12. ágúst 2026",
    description:
      "PHOS er meira en viðburður - það er hreyfing. Vertu með listamönnum, leiðtogum og framtíðarsýnismönnum frá öllum heimshornum í að skapa stund samstöðu gegnum tónlist og ljós.",
    form: {
      name: "Fullt nafn",
      email: "Netfang",
      country: "Land",
      role: "Ég er...",
      interests: "Áhugasvið",
      submit: "Vertu með í PHOS",
      submitting: "Tekur þátt...",
    },
    roles: [
      "Listamaður/Tónlistarmaður",
      "Leiðtogi/Skipuleggjandi",
      "Framtíðarsýnismaður/Hugsandi",
      "Stuðningsaðili/Áhugamaður",
      "Annað",
    ],
    interests: [
      "Tónlist og frammistaða",
      "Viðburðaskipulag",
      "Friður og samstöða",
      "Tækni og nýsköpun",
      "Samfélagsbyggingu",
      "List og sköpun",
      "Andleg þróun",
      "Alþjóðleg áhrif",
    ],
    success: {
      title: "Velkomin í PHOS!",
      message:
        "Takk fyrir að vera með í hreyfingunni. Við munum vera í sambandi fljótlega með frekari upplýsingar um hvernig þú getur tekið þátt.",
    },
    errors: {
      required: "Þessi reitur er nauðsynlegur",
      email: "Vinsamlegast sláðu inn gilt netfang",
      name: "Vinsamlegast sláðu inn fullt nafn",
    },
  },
};

export default function JoinForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    role: "",
    interests: [],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = content[language];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.errors.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.errors.required;
    }

    if (!formData.email.includes("@")) {
      newErrors.email = t.errors.email;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "join",
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#F5C542] to-[#F5C542]/60 rounded-full flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <svg
              className="w-12 h-12 text-[#0B0F1A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-elegant mb-6 text-[#F5F7FA]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.success.title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl font-body text-[#D1D5DE] leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.success.message}
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-[#F5C542] text-[#0B0F1A] rounded-full font-body font-medium hover:bg-[#F5C542]/90 transition-colors duration-300"
            >
              {language === "en" ? "Back to Home" : "Aftur á heimasíðu"}
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-elegant mb-6 text-[#F5F7FA]">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl font-elegant text-[#F5C542] mb-6">
            {t.subtitle}
          </p>
          <p className="text-lg font-body text-[#D1D5DE] max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#F5C542] mb-2"
              >
                {t.form.name} *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full px-4 py-3 bg-[#F5F7FA]/5 border rounded-lg font-body text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:ring-2 focus:ring-[#F5C542]/50 transition-all duration-300 ${
                  errors.name ? "border-red-500" : "border-[#F5C542]/20"
                }`}
                placeholder={t.form.name}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#F5C542] mb-2"
              >
                {t.form.email} *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-4 py-3 bg-[#F5F7FA]/5 border rounded-lg font-body text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:ring-2 focus:ring-[#F5C542]/50 transition-all duration-300 ${
                  errors.email ? "border-red-500" : "border-[#F5C542]/20"
                }`}
                placeholder={t.form.email}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-[#F5C542] mb-2"
              >
                {t.form.country} *
              </label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className={`w-full px-4 py-3 bg-[#F5F7FA]/5 border rounded-lg font-body text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:ring-2 focus:ring-[#F5C542]/50 transition-all duration-300 ${
                  errors.country ? "border-red-500" : "border-[#F5C542]/20"
                }`}
                placeholder={t.form.country}
              />
              {errors.country && (
                <p className="mt-1 text-sm text-red-400">{errors.country}</p>
              )}
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-[#F5C542] mb-2"
              >
                {t.form.role} (optional)
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F7FA]/5 border rounded-lg font-body text-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-[#F5C542]/50 transition-all duration-300 border-[#F5C542]/20"
              >
                <option value="">{t.form.role}</option>
                {t.roles.map((role) => (
                  <option
                    key={role}
                    value={role}
                    className="bg-[#1A1F2E] text-[#F5F7FA]"
                  >
                    {role}
                  </option>
                ))}
              </select>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium text-[#F5C542] mb-3">
                {t.form.interests}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {t.interests.map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center space-x-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestToggle(interest)}
                      className="w-4 h-4 text-[#F5C542] bg-[#F5F7FA]/5 border-[#F5C542]/20 rounded focus:ring-[#F5C542]/50"
                    />
                    <span className="text-sm font-body text-[#D1D5DE] group-hover:text-[#F5F7FA] transition-colors duration-200">
                      {interest}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#F5C542] mb-2"
              >
                {t.form.message}
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg font-body text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:ring-2 focus:ring-[#F5C542]/50 transition-all duration-300 resize-none"
                placeholder={t.form.message}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#F5C542] text-[#0B0F1A] rounded-lg font-body font-medium hover:bg-[#F5C542]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? t.form.submitting : t.form.submit}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
