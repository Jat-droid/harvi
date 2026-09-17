import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const CountUp = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { value: 150, suffix: "+", label: "Nodes Deployed" },
    { value: 4, suffix: "", label: "Network Protocols" },
    { value: 99, suffix: "%", label: "System Uptime" },
    { value: 24, suffix: "/7", label: "Active Telemetry" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-4xl md:text-6xl font-extrabold mb-2 font-mono text-primary-600">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-600 font-medium text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
