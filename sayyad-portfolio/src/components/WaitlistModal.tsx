import { X, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { MagneticWrapper } from './ui/MagneticWrapper';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function WaitlistModal({ isOpen, onClose, projectTitle }: WaitlistModalProps) {
  const [state, handleSubmit] = useForm('mjgpdolb');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-xl"
          >
            <GlassCard 
              className="relative p-12 md:p-20 border-white/5"
              with3D={true}
              opacity="high"
              blur="lg"
              interactive={false}
            >
              <button 
                onClick={onClose}
                className="absolute right-12 top-12 rounded-full border border-white/5 bg-zinc-900/50 p-4 text-text-secondary hover:text-text-display hover:border-accent transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="mb-12 w-24 h-24 rounded-full border border-success/20 bg-success/5 flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-success" />
                  </div>
                  <h3 className="text-4xl font-display font-black text-text-display mb-6 uppercase tracking-tighter">SUCCESS.</h3>
                  <p className="text-lg text-text-secondary leading-relaxed max-w-sm">
                    Connection established. You are now prioritized for the {projectTitle} launch cycle.
                  </p>
                  <button 
                    onClick={onClose}
                    className="mt-16 text-[10px] font-mono text-accent hover:text-text-display transition-colors tracking-[0.4em] uppercase"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-[2px] bg-accent" />
                      <span className="text-[10px] font-mono text-accent font-bold tracking-[0.4em] uppercase">Access</span>
                    </div>
                    
                    <h2 className="text-5xl font-display font-black text-text-display tracking-tighter uppercase leading-[0.9]">
                      Join the <br />
                      <span className="text-text-secondary italic">{projectTitle}</span> <br />
                      Waitlist.
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                      <label htmlFor="full-name" className="text-[10px] font-mono text-text-disabled uppercase tracking-[0.3em] ml-2">
                        Full Name
                      </label>
                      <input
                        required
                        id="full-name"
                        name="name"
                        type="text"
                        placeholder="Sayyad Adeel"
                        className="w-full bg-zinc-950/50 border border-white/5 rounded-3xl px-8 py-6 text-text-display placeholder:text-text-disabled/20 focus:border-accent focus:outline-none transition-all font-sans"
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="mt-4 text-[10px] font-mono text-accent uppercase tracking-widest"
                      />
                    </div>

                    <div className="space-y-4">
                      <label htmlFor="email-address" className="text-[10px] font-mono text-text-disabled uppercase tracking-[0.3em] ml-2">
                        Email Address
                      </label>
                      <input
                        required
                        id="email-address"
                        name="email"
                        type="email"
                        placeholder="adeel@orchestrator.com"
                        className="w-full bg-zinc-950/50 border border-white/5 rounded-3xl px-8 py-6 text-text-display placeholder:text-text-disabled/20 focus:border-accent focus:outline-none transition-all font-sans"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="mt-4 text-[10px] font-mono text-accent uppercase tracking-widest"
                      />
                    </div>

                    {state.errors && !state.submitting && (
                      <div className="flex items-center gap-4 p-6 bg-accent/5 border border-white/5 text-[10px] font-mono text-accent uppercase tracking-[0.3em]">
                        <AlertCircle size={16} />
                        <span>Validation Error: Check Fields</span>
                      </div>
                    )}

                    <div className="pt-8">
                      <MagneticWrapper strength={0.2}>
                        <button
                          type="submit"
                          disabled={state.submitting}
                          className="group flex items-center gap-8 px-16 py-8 rounded-full bg-text-display text-black hover:bg-white transition-all disabled:opacity-50"
                        >
                          <div className="flex flex-col items-start gap-1 text-left">
                            <span className="text-[10px] font-mono text-accent font-bold tracking-[0.3em] uppercase">
                              {state.submitting ? 'Transmitting' : 'Request Access'}
                            </span>
                            <span className="text-lg font-display font-black">
                              {state.submitting ? 'PROCESSING...' : 'JOIN WAITLIST'}
                            </span>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white transition-transform group-hover:translate-x-2">
                            {state.submitting ? (
                              <Loader2 className="animate-spin w-6 h-6" />
                            ) : (
                              <Send size={24} />
                            )}
                          </div>
                        </button>
                      </MagneticWrapper>
                    </div>
                  </form>
                </>
              )}
            </GlassCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
