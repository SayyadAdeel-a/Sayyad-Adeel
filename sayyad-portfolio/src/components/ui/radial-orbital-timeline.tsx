import { useState, useEffect, useRef } from "react";
import { Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rotationTimer: any;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.2) % 360);
      }, 30);
    }
    return () => clearInterval(rotationTimer);
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 280;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    // Z-depth calculation for 3D effect
    const z = Math.sin(radian) * 100;
    const scale = 0.8 + (Math.sin(radian) + 1) * 0.2;
    const opacity = 0.4 + (Math.sin(radian) + 1) * 0.3;

    return { x, y, z, scale, opacity, angle };
  };

  const handleNodeClick = (id: number) => {
    if (activeNodeId === id) {
      setActiveNodeId(null);
      setAutoRotate(true);
    } else {
      setActiveNodeId(id);
      setAutoRotate(false);
    }
  };

  return (
    <div 
      className="w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black perspective-container"
      ref={containerRef}
    >
      <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
        
        {/* Core Orbital Ring */}
        <div className="absolute w-[560px] h-[560px] border border-white/5 rounded-full z-0" />
        <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full z-0 opacity-40" />
        
        {/* Central Core Aura */}
        <div className="absolute z-10 flex items-center justify-center">
          <div className="w-32 h-32 bg-accent/10 rounded-full blur-[80px] animate-pulse" />
          <div className="w-12 h-12 rounded-full border border-accent/30 bg-black flex items-center justify-center shadow-accent">
            <Zap className="w-5 h-5 text-accent animate-pulse" />
          </div>
        </div>

        {/* Nodes */}
        {timelineData.map((item, index) => {
          const pos = calculateNodePosition(index, timelineData.length);
          const isActive = activeNodeId === item.id;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="absolute transition-all duration-700 cursor-pointer group"
              style={{
                transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) scale(${pos.scale})`,
                opacity: pos.opacity,
                zIndex: isActive ? 500 : Math.round(pos.z + 100),
              }}
              onClick={() => handleNodeClick(item.id)}
            >
              {/* Node Visual */}
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                  isActive 
                    ? "bg-text-display border-white text-black shadow-diffused" 
                    : "bg-zinc-900/80 border-white/10 text-text-secondary group-hover:border-accent group-hover:text-accent shadow-weightless"
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Node Label */}
                <div className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap label-text text-[10px] tracking-widest uppercase transition-all duration-500 ${
                  isActive ? "text-text-display font-black opacity-100" : "text-text-disabled opacity-40 group-hover:opacity-100"
                }`}>
                  {item.title}
                </div>

                {/* Pulse Aura */}
                {isActive && (
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-ping -z-10" />
                )}
              </div>

              {/* Detail Card Overlay */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 40 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[400px] z-[1000] pointer-events-none"
                  >
                    <GlassCard 
                      className="p-12 border-white/10 shadow-diffused pointer-events-auto"
                      opacity="med"
                      blur="lg"
                      with3D={true}
                    >
                      <div className="space-y-8">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono text-accent font-bold tracking-[0.4em] uppercase">{item.category}</span>
                          <span className="text-[10px] font-mono text-text-disabled uppercase">{item.date}</span>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-3xl font-display font-black text-text-display leading-none tracking-tighter uppercase">{item.title}</h4>
                          <p className="text-lg text-text-secondary leading-relaxed font-sans">{item.content}</p>
                        </div>

                        <div className="pt-6 border-t border-white/5 space-y-4">
                          <div className="flex justify-between items-center text-[10px] font-mono text-text-disabled tracking-widest uppercase">
                            <span>Orchestration Energy</span>
                            <span className="text-accent">{item.energy}%</span>
                          </div>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.energy}%` }}
                              className="h-full bg-accent"
                            />
                          </div>
                        </div>

                        {item.relatedIds.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-4">
                            {item.relatedIds.map(rid => (
                              <div key={rid} className="px-3 py-1 border border-white/5 bg-zinc-900/50 rounded-full text-[8px] font-mono text-text-disabled uppercase tracking-widest">
                                Node_{rid}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Floating Background Dust */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/40 rounded-full"
              animate={{
                x: [Math.random() * 800 - 400, Math.random() * 800 - 400],
                y: [Math.random() * 800 - 400, Math.random() * 800 - 400],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
