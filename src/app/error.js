"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-elegant text-[#F5F7FA] mb-4">
          Something went wrong
        </h1>
        <p className="text-[#D1D5DE] font-body mb-8">
          We encountered an unexpected error. Please try again or contact us if
          the problem persists.
        </p>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === "development" && (
          <details className="mb-6 text-left">
            <summary className="text-[#F5C542] cursor-pointer font-body">
              Error Details
            </summary>
            <pre className="mt-2 text-xs text-[#B0B6C4] bg-[#1A1F2E] p-3 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-[#F5C542] text-[#0B0F1A] px-6 py-3 rounded-lg font-body font-medium hover:bg-[#F5C542]/90 transition-colors duration-200"
          >
            Try Again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-transparent border border-[#F5C542]/30 text-[#F5C542] px-6 py-3 rounded-lg font-body font-medium hover:border-[#F5C542]/60 hover:text-[#F5C542]/90 transition-all duration-200"
          >
            Go Home
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-[#F5C542]/20">
          <p className="text-sm text-[#B0B6C4] font-body">
            Need help? Contact us at{" "}
            <a
              href="mailto:phos@phos.is"
              className="text-[#F5C542] hover:text-[#F5C542]/80 transition-colors duration-200"
            >
              phos@phos.is
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
