
import {
  ArrowLeft,
  Crown,
  Sparkles,
  ShieldCheck,
  Zap,
  Image,
  Palette,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useThemeStore } from "../store/useThemeStore";

const features = [
  {
    icon: Zap,
    title: "Enhanced Experience",
    description:
      "Enjoy a smoother, more personalized messaging experience.",
  },
  {
    icon: Palette,
    title: "Exclusive Themes",
    description:
      "Explore premium-inspired colors and elegant chat styles.",
  },
  {
    icon: Image,
    title: "Rich Conversations",
    description:
      "Discover a more expressive way to personalize your chats.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Keep your account security and privacy at the center.",
  },
];

export default function PremiumPage() {
  const navigate = useNavigate();
  const { setTheme } = useThemeStore();

  const handleExploreSynChat = () => {
    setTheme("premium");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#D4AF37]"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <section className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/50 bg-gradient-to-br from-[#17140b] via-[#0c0c0c] to-black p-8 shadow-[0_0_40px_rgba(212,175,55,0.08)] sm:p-12">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="relative">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10">
              <Crown size={34} className="text-[#D4AF37]" />
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-3 py-1 text-xs font-semibold tracking-widest text-[#D4AF37]">
              <Sparkles size={14} />
              SYNCHAT PREMIUM
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-6xl">
              Make every conversation
              <span className="block text-[#D4AF37]">
                feel premium.
              </span>
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              A refined messaging experience with elegant visuals,
              personalization, and a premium-inspired interface.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={handleExploreSynChat}
                className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:bg-[#f0d36c]"
              >
                Explore SynChat
              </button>

              <span className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-300">
                <Check size={17} className="text-[#D4AF37]" />
                Premium-inspired design
              </span>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              The experience
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Designed for you
            </h2>

            <p className="mt-3 text-gray-400">
              Explore the design concepts behind SynChat Premium.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#D4AF37]/40 hover:bg-white/[0.05]"
              >
                <Icon size={27} className="text-[#D4AF37]" />

                <h3 className="mt-5 text-lg font-semibold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
          SynChat · Connect beautifully.
        </footer>
      </div>
    </div>
  );
}
