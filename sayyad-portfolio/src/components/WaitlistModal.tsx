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
        className="absolute inset-0 bg-bg-deep/90 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[3rem] glass-card p-10 sm:p-12 shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in duration-500">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-magenta" />
        
        <button 
          onClick={onClose}
          className="absolute right-8 top-8 rounded-full glass-card p-2 text-zinc-400 hover:text-white transition-all hover:rotate-90 duration-300"
        >
          <X size={20} />
        </button>

        {state.succeeded ? (
          <div className="flex flex-col items-center justify-center py-10 text-center animate-in slide-in-from-bottom-8 duration-700">
            <div className="mb-8 rounded-full bg-ai-cyan/10 p-5 ring-1 ring-ai-cyan/20">
              <CheckCircle2 size={56} className="text-ai-cyan" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-4">Confirmed.</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              You are now prioritized for <span className="text-white font-medium">{projectTitle}</span>. Watch your inbox for access keys soon.
            </p>
            <button 
              onClick={onClose}
              className="mt-10 px-8 py-4 glass-card rounded-2xl text-sm font-bold text-white hover:bg-white hover:text-black transition-all"
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <>
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-ai-purple/30 bg-ai-purple/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ai-purple mb-6">
                Priority Access
              </div>
              <h2 className="text-4xl font-heading font-bold text-white tracking-tight leading-none mb-4">
                Join <span className="text-gradient-ai">{projectTitle}</span>
              </h2>
              <p className="text-zinc-400 text-base font-sans">Be the first to ship code from your phone using autonomous AI agents.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-3 ml-1">
                  Designator Name
                </label>
                <input
                  required
                  id="full-name"
                  name="name"
                  type="text"
                  placeholder="Architect Name"
                  className="w-full rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-5 text-white placeholder:text-zinc-700 focus:border-ai-cyan/50 focus:outline-none focus:bg-white/[0.05] transition-all font-medium text-lg"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="mt-2 text-[10px] text-red-500 font-bold uppercase tracking-wider px-1"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-3 ml-1">
                  Secure Email
                </label>
                <input
                  required
                  id="email-address"
                  name="email"
                  type="email"
                  placeholder="nexus@protocol.io"
                  className="w-full rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-5 text-white placeholder:text-zinc-700 focus:border-ai-cyan/50 focus:outline-none focus:bg-white/[0.05] transition-all font-medium text-lg"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-[10px] text-red-500 font-bold uppercase tracking-wider px-1"
                />
              </div>

              {state.errors && !state.submitting && (
                <div className="flex items-center gap-3 rounded-xl bg-red-500/10 p-4 text-xs font-bold text-red-500 border border-red-500/10">
                  <AlertCircle size={16} />
                  <span>Validation Error: check link parameters.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-[1.5rem] bg-white px-8 py-5 font-bold text-black transition-all hover:bg-ai-cyan hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
              >
                {state.submitting ? (
                  <Loader2 className="animate-spin text-bg-deep" size={24} />
                ) : (
                  <>
                    Initialize Connection
                    <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-10 text-center text-[10px] text-zinc-700 font-bold uppercase tracking-[0.25em] leading-relaxed">
              System protocol active. Data encryption enabled.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
