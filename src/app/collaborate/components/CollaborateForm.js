"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const content = {
  en: {
    title: "Collaborate with PHOS",
    subtitle: "Bring your voice and light to the global peace movement",
    description:
      "PHOS is a call to artists, leaders, and changemakers worldwide. We're looking for collaborators who can help amplify our message of unity and peace through their unique talents and perspectives.",
    form: {
      name: "Full Name",
      email: "Email Address",
      country: "Country",
      role: "I am a...",
      collaborationType: "I want to collaborate as...",
      vision: "How do you envision contributing to PHOS?",
      portfolio: "Portfolio/Website (optional)",
      submit: "Start Collaboration",
      submitting: "Submitting...",
    },
    roles: [
      "Artist/Musician",
      "Event Organizer",
      "Community Leader",
      "Creative Director",
      "Technology Innovator",
      "Media Professional",
      "Cultural Ambassador",
      "Other",
    ],
    collaborationTypes: [
      "Performing Artist",
      "Event Coordinator",
      "Content Creator",
      "Technology Partner",
      "Community Organizer",
      "Media Partner",
      "Cultural Partner",
      "Strategic Advisor",
    ],
    success: {
      title: "Collaboration Request Received!",
      message:
        "Thank you for your interest in collaborating with PHOS. Our team will review your information and reach out within 48 hours to discuss how we can work together.",
    },
    errors: {
      required: "This field is required",
      email: "Please enter a valid email address",
      name: "Please enter your full name",
    },
  },
  is: {
    title: "Samstarf við PHOS",
    subtitle: "Deildu rödd þinni og ljósi með alþjóðlegu friðarbarátinni",
    description:
      "PHOS er ákall til listamanna, leiðtoga og umbreytenda um allan heim. Við erum að leita að samstarfsaðilum sem geta hjálpað að auka skilaboð okkar um samstöðu og frið gegnum sínar einstöku hæfileika og sjónarmið.",
    form: {
      name: "Fullt nafn",
      email: "Netfang",
      country: "Land",
      role: "Ég er...",
      collaborationType: "Ég vil samstarfa sem...",
      vision: "Hvernig sérðu þig að leggja af mörkum til PHOS?",
      portfolio: "Sýnishorni/Vefsíða (valfrjálst)",
      submit: "Byrja samstarf",
      submitting: "Sendir...",
    },
    roles: [
      "Listamaður/Tónlistarmaður",
      "Viðburðaskipuleggjandi",
      "Samfélagsleiðtogi",
      "Sköpunarsjóði",
      "Tækninýsköpunarmaður",
      "Fjölmiðlafagmaður",
      "Menningarsendiboði",
      "Annað",
    ],
    collaborationTypes: [
      "Frammistaðulistamaður",
      "Viðburðaskipuleggjandi",
      "Efnisbúandi",
      "Tæknisamstarfsaðili",
      "Samfélagsskipuleggjandi",
      "Fjölmiðlasamstarfsaðili",
      "Menningarsamstarfsaðili",
      "Stratégískur ráðgjafi",
    ],
    success: {
      title: "Samstarfsbeiðni móttekin!",
      message:
        "Takk fyrir áhugann á samstarfi við PHOS. Teymið okkar mun skoða upplýsingarnar þínar og vera í sambandi innan 48 klukkustunda til að ræða hvernig við getum unnið saman.",
    },
    errors: {
      required: "Þessi reitur er nauðsynlegur",
      email: "Vinsamlegast sláðu inn gilt netfang",
      name: "Vinsamlegast sláðu inn fullt nafn",
    },
  },
};

export default function CollaborateForm() {
  const { language } = useLanguage();
  const t = content[language];
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      country: "",
      role: "",
      collaborationType: "",
      vision: "",
      portfolio: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "collaborate",
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Collaboration form submitted:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 relative z-10 bg-gradient-to-b from-transparent via-[#4ade80]/5 to-transparent">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 bg-[#F5C542] rounded-full mx-auto mb-6 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <svg
              className="w-8 h-8 text-[#0B0F1A]"
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
          <h2 className="text-2xl md:text-3xl font-elegant text-[#F5F7FA] mb-4">
            {t.success.title}
          </h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 pt-32 relative z-10 bg-gradient-to-b from-transparent via-[#4ade80]/5 to-transparent">
      <div className="max-w-md mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-elegant mb-4 text-[#F5F7FA]">
            {t.title}
          </h1>
          <p className="text-lg font-elegant text-[#F5C542] mb-6">
            {t.subtitle}
          </p>
          <p className="text-base font-body text-[#d1d5de] leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#F5C542] mb-2"
            >
              {t.form.name} *
            </label>
            <input
              {...register("name", {
                required: t.errors.required,
                minLength: { value: 2, message: t.errors.name },
              })}
              type="text"
              id="name"
              placeholder={t.form.name}
              required
              className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:border-[#F5C542]/40 focus:ring-1 focus:ring-[#F5C542]/20 transition-all duration-200"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#F5C542] mb-2"
            >
              {t.form.email} *
            </label>
            <input
              {...register("email", {
                required: t.errors.required,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t.errors.email,
                },
              })}
              type="email"
              id="email"
              placeholder={t.form.email}
              required
              className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:border-[#F5C542]/40 focus:ring-1 focus:ring-[#F5C542]/20 transition-all duration-200"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-[#F5C542] mb-2"
            >
              {t.form.country}
            </label>
            <input
              {...register("country", { required: t.errors.required })}
              type="text"
              id="country"
              placeholder={t.form.country}
              required
              className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:border-[#F5C542]/40 focus:ring-1 focus:ring-[#F5C542]/20 transition-all duration-200"
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-400">
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-[#F5C542] mb-2"
            >
              {t.form.role}
            </label>
            <select
              {...register("role", { required: t.errors.required })}
              id="role"
              required
              className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg text-[#F5F7FA] focus:outline-none focus:border-[#F5C542]/40 focus:ring-1 focus:ring-[#F5C542]/20 transition-all duration-200"
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
            {errors.role && (
              <p className="mt-1 text-sm text-red-400">{errors.role.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="collaborationType"
              className="block text-sm font-medium text-[#F5C542] mb-2"
            >
              {t.form.collaborationType} (optional)
            </label>
            <select
              {...register("collaborationType")}
              id="collaborationType"
              className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg text-[#F5F7FA] focus:outline-none focus:border-[#F5C542]/40 focus:ring-1 focus:ring-[#F5C542]/20 transition-all duration-200"
            >
              <option value="">{t.form.collaborationType}</option>
              {t.collaborationTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-[#1A1F2E] text-[#F5F7FA]"
                >
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="vision"
              className="block text-sm font-medium text-[#F5C542] mb-2"
            >
              {t.form.vision}
            </label>
            <textarea
              {...register("vision")}
              id="vision"
              rows={4}
              placeholder={t.form.vision}
              className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:border-[#F5C542]/40 focus:ring-1 focus:ring-[#F5C542]/20 transition-all duration-200 resize-none"
            />
          </div>

          <div>
            <label
              htmlFor="portfolio"
              className="block text-sm font-medium text-[#F5C542] mb-2"
            >
              {t.form.portfolio}
            </label>
            <input
              {...register("portfolio", {
                pattern: {
                  value: /^https?:\/\/.+/,
                  message:
                    "Please enter a valid URL starting with http:// or https://",
                },
              })}
              type="url"
              id="portfolio"
              placeholder="https://your-portfolio.com"
              className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:border-[#F5C542]/40 focus:ring-1 focus:ring-[#F5C542]/20 transition-all duration-200"
            />
            {errors.portfolio && (
              <p className="mt-1 text-sm text-red-400">
                {errors.portfolio.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-[#F5C542] text-[#0B0F1A] font-medium rounded-lg hover:bg-[#F5C542]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? t.form.submitting : t.form.submit}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
