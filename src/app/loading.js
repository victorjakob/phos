export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center">
      <div className="text-center">
        {/* PHOS Logo Loading Animation */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#F5C542] to-[#F5C542]/60 rounded-full animate-pulse" />
        </div>

        {/* Loading Text */}
        <h1 className="text-2xl font-elegant text-[#F5F7FA] mb-4">PHOS</h1>
        <p className="text-[#D1D5DE] font-body">Loading the light...</p>

        {/* Loading Spinner */}
        <div className="mt-8">
          <div className="w-8 h-8 border-2 border-[#F5C542]/30 border-t-[#F5C542] rounded-full animate-spin mx-auto" />
        </div>
      </div>
    </div>
  );
}
