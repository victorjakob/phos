import TuneInHeader from "./components/TuneInHeader";
import TuneInContent from "./components/TuneInContent";
import TuneInForm from "./components/TuneInForm";

export default function TuneInPage() {
  return (
    <div className="min-h-screen px-6 relative z-10 bg-gradient-to-b from-transparent via-[#4ade80]/5 to-transparent">
      <TuneInHeader />

      <div className="max-w-md mx-auto">
        <TuneInContent />
        <TuneInForm />
      </div>
    </div>
  );
}
