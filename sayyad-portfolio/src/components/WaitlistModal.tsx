import { X, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function WaitlistModal({ isOpen, onClose, projectTitle }: WaitlistModalProps) {
  const [state, handleSubmit] = useForm('mjgpdolb');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 p-2 text-zinc-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {state.succeeded ? (
          <div className="flex flex-col items-center justify-center py-12 text-center animate-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6 rounded-full bg-white/10 p-4">
              <CheckCircle2 size={48} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-zinc-400">Thanks for your interest in {projectTitle}. We'll reach out as soon as we launch.</p>
            <button 
              onClick={onClose}
              className="mt-8 text-sm font-semibold text-white/60 hover:text-white underline underline-offset-4 transition-colors"
            >
              Back to portfolio
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-4">
                Early Access
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Join {projectTitle} Waitlist
              </h2>
              <p className="mt-2 text-zinc-400 font-medium">Be the first to ship code from your phone.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2 ml-1">
                  Full Name
                </label>
                <input
                  required
                  id="full-name"
                  name="name"
                  type="text"
                  placeholder="Sayyad Adeel"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-zinc-600 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-medium"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="mt-2 text-xs text-red-400 px-1"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2 ml-1">
                  Email Address
                </label>
                <input
                  required
                  id="email-address"
                  name="email"
                  type="email"
                  placeholder="adeelsayyad.a@gmail.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-zinc-600 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-medium"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-xs text-red-400 px-1"
                />
              </div>

              {state.errors && !state.submitting && (
                <div className="flex items-center gap-2 rounded-xl bg-red-400/10 p-3 text-xs text-red-400 border border-red-400/10">
                  <AlertCircle size={14} />
                  <span>Please check your details and try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white px-6 py-4 font-bold text-black transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 mt-2"
              >
                {state.submitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    Join the waitlist
                    <Send size={18} className="translate-y-[1px] transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">
              BY SIGNING UP, YOU AGREE TO RECEIVE PRODUCT UPDATES.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
