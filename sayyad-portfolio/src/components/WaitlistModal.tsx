import { X, Send, CheckCircle2, Loader2, AlertCircle, Terminal, Shield } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';

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
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-md perspective-3d"
          >
            <GlassCard 
              className="relative p-8 md:p-10 overflow-hidden"
              with3D={true}
              opacity="high"
              blur="lg"
            >
              <button 
                onClick={onClose}
                className="absolute right-6 top-6 rounded-none border border-border-visible bg-black/40 p-2 text-text-secondary hover:text-text-display hover:border-text-display transition-all z-20"
              >
                <X size={16} />
              </button>

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-8 p-6 border border-success/20 bg-success/5 relative">
                    <CheckCircle2 size={48} className="text-success" />
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-success" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-success" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-text-display mb-4 uppercase tracking-tighter">Transmission Received</h3>
                  <p className="text-text-secondary font-mono text-xs uppercase tracking-widest leading-relaxed">
                    Identity verified. Node {projectTitle} waitlist updated. We will establish connection upon launch.
                  </p>
                  <button 
                    onClick={onClose}
                    className="mt-12 label-text text-accent hover:text-text-display transition-colors border-b border-accent/20 hover:border-text-display pb-1"
                  >
                    RETURN_TO_BASE
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="p-1 border border-border-visible bg-black/40">
                        <Terminal size={12} className="text-accent" />
                      </div>
                      <span className="label-text text-[9px] tracking-[0.3em]">Module: Early_Access_v1.0</span>
                    </div>
                    
                    <h2 className="text-4xl font-display font-bold text-text-display tracking-tighter uppercase leading-[0.9] mb-4">
                      Join {projectTitle} <br />
                      <span className="text-text-secondary">Waitlist</span>
                    </h2>
                    <p className="text-text-secondary font-mono text-[10px] uppercase tracking-widest opacity-60">
                      SYS_LOG: Be the first to ship code from your pocket.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="label-text text-[8px] opacity-50 ml-1">
                        Full_Name
                      </label>
                      <input
                        required
                        id="full-name"
                        name="name"
                        type="text"
                        placeholder="Sayyad Adeel"
                        className="w-full bg-black/40 border border-border-visible px-5 py-4 text-text-primary placeholder:text-text-disabled/20 focus:border-text-secondary focus:outline-none transition-all font-mono text-sm"
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="mt-2 text-[8px] font-mono text-accent uppercase tracking-widest"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email-address" className="label-text text-[8px] opacity-50 ml-1">
                        Email_Protocol
                      </label>
                      <input
                        required
                        id="email-address"
                        name="email"
                        type="email"
                        placeholder="adeelsayyad.a@gmail.com"
                        className="w-full bg-black/40 border border-border-visible px-5 py-4 text-text-primary placeholder:text-text-disabled/20 focus:border-text-secondary focus:outline-none transition-all font-mono text-sm"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="mt-2 text-[8px] font-mono text-accent uppercase tracking-widest"
                      />
                    </div>

                    {state.errors && !state.submitting && (
                      <div className="flex items-center gap-3 p-4 bg-accent/5 border border-accent/20 text-[9px] font-mono text-accent uppercase tracking-widest">
                        <AlertCircle size={14} />
                        <span>Transmission Error: Verify data fields.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="group relative flex w-full items-center justify-center gap-3 bg-text-display px-6 py-5 font-display font-bold text-black transition-all hover:bg-white active:scale-[0.98] disabled:opacity-50 mt-4 uppercase text-xs tracking-widest overflow-hidden"
                    >
                      {state.submitting ? (
                        <Loader2 className="animate-spin" size={18} />
                      ) : (
                        <>
                          <Shield size={16} />
                          Secure My Slot
                          <Send size={16} className="transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                      
                      {/* Button scanning effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                    </button>
                  </form>

                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-px flex-grow bg-border-visible/30" />
                    <p className="text-[8px] font-mono text-text-disabled uppercase tracking-widest">
                      Privacy_Protocol_Active
                    </p>
                    <div className="h-px flex-grow bg-border-visible/30" />
                  </div>
                </>
              )}
              
              {/* Internal scanning line */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-[1px] group-hover:animate-[scanline_3s_linear_infinite]" />
            </GlassCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
