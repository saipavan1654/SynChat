
import { useNavigate } from "react-router-dom";
import { Crown, Sparkles, ArrowRight, Send } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen container mx-auto px-4 pt-20 pb-10 max-w-5xl">
      <div className="space-y-6">

        {/* SynChat Premium Card */}
        <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#17140b] via-[#0c0c0c] to-black p-5 shadow-lg sm:p-7">
          <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                <Crown size={29} className="text-[#D4AF37]" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold text-white">
                    SynChat Premium
                  </h2>
                  <Sparkles size={17} className="text-[#D4AF37]" />
                </div>

                <p className="mt-1 max-w-md text-sm leading-6 text-gray-400">
                  Discover an elegant messaging experience with a premium-inspired design.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/premium")}
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f0d36c]"
            >
              Explore Premium
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Existing Theme Section */}
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
                group flex flex-col items-center gap-1.5 rounded-lg p-2 transition-colors
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative h-8 w-full overflow-hidden rounded-md"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>

              <span className="w-full truncate text-center text-[11px] font-medium">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Existing Preview Section */}
        <h3 className="mb-3 text-lg font-semibold">Preview</h3>

        <div className="overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-lg">
          <div className="bg-base-200 p-4">
            <div className="mx-auto max-w-lg">
              <div className="overflow-hidden rounded-xl bg-base-100 shadow-sm">

                {/* Chat Header */}
                <div className="border-b border-base-300 bg-base-100 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-medium text-primary-content">
                      J
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">John Doe</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="min-h-[200px] max-h-[200px] space-y-4 overflow-y-auto bg-base-100 p-4">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.isSent ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${
                            message.isSent
                              ? "bg-primary text-primary-content"
                              : "bg-base-200"
                          }
                        `}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`
                            mt-1.5 text-[10px]
                            ${
                              message.isSent
                                ? "text-primary-content/70"
                                : "text-base-content/70"
                            }
                          `}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="border-t border-base-300 bg-base-100 p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered h-10 flex-1 text-sm"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-primary h-10 min-h-0">
                      <Send size={18} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;
