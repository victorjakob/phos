import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl font-elegant text-[#F5C542] font-bold leading-none">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-elegant text-[#F5F7FA] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#D1D5DE] font-body mb-8">
          The page you're looking for doesn't exist. It might have been moved or
          deleted.
        </p>

        {/* Navigation Options */}
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-[#F5C542] text-[#0B0F1A] px-6 py-3 rounded-lg font-body font-medium hover:bg-[#F5C542]/90 transition-colors duration-200"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="block w-full bg-transparent border border-[#F5C542]/30 text-[#F5C542] px-6 py-3 rounded-lg font-body font-medium hover:border-[#F5C542]/60 hover:text-[#F5C542]/90 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 pt-6 border-t border-[#F5C542]/20">
          <p className="text-sm text-[#B0B6C4] font-body mb-3">
            You might be looking for:
          </p>
          <div className="space-y-2">
            <Link
              href="/"
              className="block text-[#F5C542] hover:text-[#F5C542]/80 transition-colors duration-200 text-sm"
            >
              Home - Learn about PHOS
            </Link>
            <Link
              href="/join"
              className="block text-[#F5C542] hover:text-[#F5C542]/80 transition-colors duration-200 text-sm"
            >
              Join the Movement
            </Link>
            <Link
              href="/contact"
              className="block text-[#F5C542] hover:text-[#F5C542]/80 transition-colors duration-200 text-sm"
            >
              Contact Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
