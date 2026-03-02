import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2500, suffix: "+", label: "Government Schemes" },
  { value: 150, suffix: "K+", label: "Citizens Matched" },
  { value: 98, suffix: "%", label: "Accuracy Rate" },
  { value: 28, suffix: "", label: "States Covered" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return count;
}

const StatItem = ({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) => {
  const count = useCountUp(value, inView);
  return (
    <div className="text-center">
      <div className="stat-number">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-muted-foreground mt-2 text-sm font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="civic-section bg-background">
      <div className="civic-container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
