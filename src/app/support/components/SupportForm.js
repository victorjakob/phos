"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const content = {
  en: {
    title: "Support PHOS",
    subtitle: "Help us build the movement and the stage for this moment",
    description:
      "Your support enables us to create the infrastructure, technology, and global reach needed for PHOS. Every contribution helps bring this vision of unity and peace to life.",
    form: {
      name: "Full Name",
      email: "Email Address",
      country: "Country",
      supportType: "I want to support as...",
      amount: "Support Amount (USD)",
      submit: "Support PHOS",
      submitting: "Processing...",
    },
    supportTypes: [
      "Individual Supporter",
      "Business Partner",
      "Foundation/Organization",
      "Anonymous Supporter",
      "In-Kind Donation",
      "Other",
    ],
    amountOptions: [
      { value: "25", label: "$25 - Basic Support" },
      { value: "50", label: "$50 - Standard Support" },
      { value: "100", label: "$100 - Premium Support" },
      { value: "250", label: "$250 - Major Supporter" },
      { value: "500", label: "$500 - Visionary Supporter" },
      { value: "1000", label: "$1000+ - Founding Supporter" },
      { value: "custom", label: "Custom Amount" },
    ],
    success: {
      title: "Thank You for Your Support!",
      message:
        "Your contribution to PHOS has been received. We'll send you a confirmation email and keep you updated on how your support is helping build this global movement for peace.",
    },
    errors: {
      required: "This field is required",
      email: "Please enter a valid email address",
      name: "Please enter your full name",
      amount: "Please select or enter a valid amount",
    },
  },
  is: {
    title: "Stuðningur við PHOS",
    subtitle:
      "Hjálpaðu okkur að byggja hreyfinguna og sviðið fyrir þessa stund",
    description:
      "Stuðningur þinn gerir okkur kleift að skapa innviði, tækni og alþjóðlega nálgun sem þarf fyrir PHOS. Hver framlag hjálpar til við að koma þessari sýn um samstöðu og frið til lífs.",
    form: {
      name: "Fullt nafn",
      email: "Netfang",
      country: "Land",
      supportType: "Ég vil styðja sem...",
      amount: "Stuðningsupphæð (USD)",
      submit: "Styðja PHOS",
      submitting: "Vinnsla...",
    },
    supportTypes: [
      "Einstaklingsstuðningur",
      "Fyrirtækissamstarfsaðili",
      "Stofnun/Samtök",
      "Nafnlaus stuðningur",
      "Máttarafgift",
      "Annað",
    ],
    amountOptions: [
      { value: "25", label: "$25 - Grunnstuðningur" },
      { value: "50", label: "$50 - Staðlaður stuðningur" },
      { value: "100", label: "$100 - Premium stuðningur" },
      { value: "250", label: "$250 - Aðalstuðningur" },
      { value: "500", label: "$500 - Sýnarmaður" },
      { value: "1000", label: "$1000+ - Stofnandi" },
      { value: "custom", label: "Sérsniðin upphæð" },
    ],
    success: {
      title: "Takk fyrir stuðninginn!",
      message:
        "Framlag þitt til PHOS hefur verið móttekið. Við munum senda þér staðfestingarpóst og halda þér uppfærðum um hvernig stuðningur þinn hjálpar til við að byggja þessa alþjóðlegu hreyfingu fyrir frið.",
    },
    errors: {
      required: "Þessi reitur er nauðsynlegur",
      email: "Vinsamlegast sláðu inn gilt netfang",
      name: "Vinsamlegast sláðu inn fullt nafn",
      amount: "Vinsamlegast veldu eða sláðu inn gilda upphæð",
    },
  },
};

export default function SupportForm() {
  const { language } = useLanguage();
  const t = content[language];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCustomAmount, setShowCustomAmount] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      country: "",
      supportType: "",
      amount: "",
      customAmount: "",
    },
  });

  const selectedAmount = watch("amount");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "support",
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Support form submitted:", data);
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
          <p className="text-base font-body text-[#d1d5de] leading-relaxed max-w-md mx-auto">
            {t.success.message}
          </p>
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
              htmlFor="supportType"
              className="block text-sm font-medium text-[#F5C542] mb-2"
            >
              {t.form.supportType}
            </label>
            <select
              {...register("supportType", { required: t.errors.required })}
              id="supportType"
              required
              className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg text-[#F5F7FA] focus:outline-none focus:border-[#F5C542]/40 focus:ring-1 focus:ring-[#F5C542]/20 transition-all duration-200"
            >
              <option value="">{t.form.supportType}</option>
              {t.supportTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-[#1A1F2E] text-[#F5F7FA]"
                >
                  {type}
                </option>
              ))}
            </select>
            {errors.supportType && (
              <p className="mt-1 text-sm text-red-400">
                {errors.supportType.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#F5C542] mb-3">
              {t.form.amount}
            </label>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {t.amountOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...register("amount", { required: t.errors.required })}
                    onChange={() =>
                      setShowCustomAmount(option.value === "custom")
                    }
                    className="w-4 h-4 text-[#F5C542] bg-[#F5F7FA]/5 border-[#F5C542]/20 focus:ring-[#F5C542]/50"
                  />
                  <span className="text-sm font-body text-[#D1D5DE] group-hover:text-[#F5F7FA] transition-colors duration-200">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
            {showCustomAmount && (
              <input
                {...register("customAmount", {
                  required: showCustomAmount ? t.errors.required : false,
                  min: { value: 1, message: "Amount must be at least $1" },
                })}
                type="number"
                placeholder="Enter custom amount"
                min="1"
                className="w-full px-4 py-3 bg-[#F5F7FA]/5 border border-[#F5C542]/20 rounded-lg text-[#F5F7FA] placeholder-[#B0B6C4] focus:outline-none focus:border-[#F5C542]/40 focus:ring-1 focus:ring-[#F5C542]/20 transition-all duration-200"
              />
            )}
            {errors.amount && (
              <p className="mt-1 text-sm text-red-400">
                {errors.amount.message}
              </p>
            )}
            {errors.customAmount && (
              <p className="mt-1 text-sm text-red-400">
                {errors.customAmount.message}
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
