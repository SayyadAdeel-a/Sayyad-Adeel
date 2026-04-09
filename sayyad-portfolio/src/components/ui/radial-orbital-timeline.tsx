import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap, Sparkles } from "lucide-react";

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
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: any;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = window.innerWidth < 640 ? 140 : 220;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.3,
      Math.min(1, 0.3 + 0.7 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-ai-cyan border-ai-cyan/30 bg-ai-cyan/10";
      case "in-progress":
        return "text-white border-white bg-white/10";
      case "pending":
        return "text-zinc-500 border-white/10 bg-white/5";
      default:
        return "text-zinc-500 border-white/10 bg-white/5";
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center bg-transparent overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1200px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Central Neural Hub */}
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-ai-cyan via-ai-purple to-ai-magenta animate-spin-slow blur-[2px] z-10 opacity-80">
            <div className="absolute inset-2 rounded-full bg-bg-deep flex items-center justify-center">
               <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="absolute -inset-4 rounded-full border border-ai-cyan/20 animate-ping opacity-30"></div>
            <div
              className="absolute -inset-8 rounded-full border border-ai-purple/10 animate-ping opacity-20"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          <div className="absolute w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] rounded-full border border-white/5 shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px) scale(${isExpanded ? 1.2 : 1})`,
              zIndex: isExpanded ? 300 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-1000 cubic-bezier(0.2, 0.8, 0.2, 1) cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Node Energy Aura */}
                <div
                  className={`absolute rounded-full -inset-4 ${
                    isPulsing || item.status === 'in-progress' ? "animate-pulse duration-[2000ms]" : ""
                  } opacity-30`}
                  style={{
                    background: `radial-gradient(circle, ${item.status === 'in-progress' ? 'rgba(255,255,255,0.4)' : 'rgba(0,255,255,0.3)'} 0%, transparent 70%)`,
                    width: `${item.energy * 0.8 + 60}px`,
                    height: `${item.energy * 0.8 + 60}px`,
                    left: `-${(item.energy * 0.8 + 60 - 40) / 2}px`,
                    top: `-${(item.energy * 0.8 + 60 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-white text-black"
                      : isRelated
                      ? "bg-ai-cyan/40 text-white"
                      : "bg-bg-deep text-zinc-400"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-white shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                      : isRelated
                      ? "border-ai-cyan animate-pulse shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                      : "border-white/10 group-hover:border-white/30"
                  }
                  transition-all duration-500 transform
                `}
                >
                  <Icon size={18} />
                </div>

                <div
                  className={`
                  absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-[9px] font-bold tracking-[0.3em] uppercase text-center
                  transition-all duration-500
                  ${isExpanded ? "text-white scale-110 opacity-100" : "text-white/40 opacity-70"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[320px] z-[400] animate-fade-in">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-t from-white to-transparent"></div>
                    
                    <div className="glass-card rounded-[2.5rem] p-8 border-white/10 shadow-3xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                         <Icon size={80} />
                      </div>
                      
                      <div className="flex justify-between items-center mb-6">
                        <div className={`px-4 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase border ${getStatusStyles(item.status)}`}>
                          {item.status.replace('-', ' ')}
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-zinc-500 italic">
                          {item.date}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-heading font-bold text-white uppercase tracking-tight mb-4 italic">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-8">
                        {item.content}
                      </p>

                      <div className="pt-6 border-t border-white/5">
                        <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase mb-3">
                          <span className="flex items-center gap-2 text-zinc-500">
                            <Zap size={12} className="text-ai-cyan" />
                            Mutation Phase
                          </span>
                          <span className="text-white">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px]">
                          <div
                            className="h-full bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-magenta rounded-full"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-white/5">
                          <h4 className="text-[9px] uppercase tracking-[0.3em] font-bold text-zinc-600 mb-4 italic">
                            Linked Nodes
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <button
                                  key={relatedId}
                                  className="flex items-center gap-3 h-9 px-5 text-[9px] font-bold tracking-widest uppercase rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all group/btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={12}
                                    className="text-zinc-500 transition-transform group-hover/btn:translate-x-1"
                                  />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
