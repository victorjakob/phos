"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    form: {
      name: "Full Name",
      email: "Email Address",
      submit: "I'm Tuning In",
      placeholder: {
        name: "Enter your full name",
        email: "Enter your email address",
      },
    },
    success: "Thank you! We'll be in touch soon.",
    errors: {
      required: "This field is required",
      email: "Please enter a valid email address",
      name: "Please enter your full name",
    },
  },
  is: {
    form: {
      name: "Fullt nafn",
      email: "Netfang",
      submit: "Ég er að stilla mér inn",
      placeholder: {
        name: "Sláðu inn fullt nafn",
        email: "Sláðu inn netfang",
      },
    },
    success: "Takk fyrir! Við verðum í sambandi fljótlega.",
    errors: {
      required: "Þessi reitur er nauðsynlegur",
      email: "Vinsamlegast sláðu inn gilt netfang",
      name: "Vinsamlegast sláðu inn fullt nafn",
    },
  },
};

export default function TuneInForm() {
  const { language } = useLanguage();
  const t = content[language];
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "tune-in",
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Tune-in form submitted:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  if (isSubmitted) {
    return (
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
          {t.success}
        </h2>
      </motion.div>
    );
  }

  return (
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
          placeholder={t.form.placeholder.name}
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
          placeholder={t.form.placeholder.email}
          required
          className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:border-[#F5C542]/40 focus:ring-1 focus:ring-[#F5C542]/20 transition-all duration-200"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 bg-[#F5C542] text-[#0B0F1A] font-medium rounded-lg hover:bg-[#F5C542]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        {isSubmitting ? "..." : t.form.submit}
      </motion.button>
    </motion.form>
  );
}
