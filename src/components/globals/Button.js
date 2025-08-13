import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClasses =
    "px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F5C542]/30";

  const variants = {
    primary: "bg-gradient-to-r from-[#F5C542] to-[#F5F7FA] text-[#0B0F1A]",
    secondary:
      "bg-transparent border-2 border-[#F5C542] text-[#F5C542] hover:bg-[#F5C542] hover:text-[#0B0F1A]",
    outline:
      "bg-transparent border-2 border-[#F5F7FA] text-[#F5F7FA] hover:bg-[#F5F7FA] hover:text-[#0B0F1A]",
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
