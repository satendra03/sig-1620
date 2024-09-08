import { MagicCard } from "@/components/magicui/magic-card";
import NumberTicker from "@/components/magicui/number-ticker";

const stats = [
  { label: "Bounce Rate", value: "32.53%", change: "-0.5%", isPositive: false },
  { label: "Page Views", value: "7,682", change: "+0.1%", isPositive: true },
  { label: "New Sessions", value: "68.8", change: "-68.8%", isPositive: false },
  {
    label: "Avg. Time on Site",
    value: "2m:35s",
    change: "+0.8%",
    isPositive: true,
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <MagicCard key={index} className="p-4 bg-white shadow rounded-lg hover:scale-105 hover:shadow-xl transition-all" gradientColor="#c7c2b3">
          <h4 className="text-sm font-medium text-gray-500">{stat.label}</h4>
          <p className="text-2xl font-bold"><NumberTicker value={stat.value} />%</p>
          <span
            className={`text-sm ${
              stat.isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {stat.change}
          </span>
        </MagicCard>
      ))}
    </div>
  );
};

export default Stats;