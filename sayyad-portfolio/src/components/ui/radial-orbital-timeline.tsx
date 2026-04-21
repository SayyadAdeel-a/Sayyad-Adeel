import { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
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
        return "text-white bg-black border-white";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center overflow-hidden border-t border-b border-border-visible bg-black"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 bg-text-display animate-pulse flex items-center justify-center z-10 glow-text">
            <div className="absolute w-20 h-20 border border-border-visible animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 border border-border-visible animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 bg-black border border-border-visible"></div>
          </div>

          <div className="absolute w-[450px] h-[450px] border border-border-visible border-dashed opacity-20"></div>
          <div className="absolute w-[300px] h-[300px] border border-border-visible border-dashed opacity-40"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-10 h-10 flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-text-display text-black"
                      : isRelated
                      ? "bg-text-secondary text-black"
                      : "bg-black text-text-display"
                  }
                  border
                  ${
                    isExpanded
                      ? "border-text-display shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      : isRelated
                      ? "border-text-display animate-pulse"
                      : "border-border-visible"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150 rotate-45" : ""}
                `}
                  style={!isExpanded ? {
                    boxShadow: "0 0 0px rgba(255, 255, 255, 0)"
                  } : {}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(255, 255, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0px rgba(255, 255, 255, 0)";
                  }}
                >
                  <Icon size={16} />
                </div>

                <div
                  className={`
                  absolute top-12 whitespace-nowrap
                  label-text
                  transition-all duration-300
                  ${isExpanded ? "text-text-display scale-110 glow-text" : "text-text-secondary"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 card-surface p-4 overflow-visible z-[300]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-border-visible"></div>
                    <CardHeader className="pb-2 px-0 pt-0">
                      <div className="flex justify-between items-center">
                        <div
                          className={`px-2 py-0.5 label-text border border-border-visible ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </div>
                        <span className="label-text">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-sm mt-3 font-display font-bold tracking-tight text-text-display uppercase">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs font-sans text-text-secondary leading-relaxed px-0 pb-0">
                      <p>{item.content}</p>

                      <div className="mt-6 pt-4 border-t border-border-visible">
                        <div className="flex justify-between items-center label-text mb-2">
                          <span className="flex items-center gap-1">
                            <Zap size={10} className="text-text-display" />
                            ENERGY
                          </span>
                          <span className="text-text-display">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 border border-border-visible bg-black overflow-hidden">
                          <div
                            className="h-full bg-text-display"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-border-visible">
                          <div className="flex items-center mb-3">
                            <h4 className="label-text">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <button
                                  key={relatedId}
                                  className="flex items-center gap-2 h-7 px-3 label-text border border-border-visible bg-black hover:bg-surface text-text-display transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={10}
                                    className="text-text-secondary"
                                  />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
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
