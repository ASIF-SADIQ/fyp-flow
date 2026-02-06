import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
}

const StatCard = ({ icon, label, value, trend, trendUp }: StatCardProps) => (
  <div className="bg-card rounded-xl p-5 shadow-card border border-border animate-fade-in">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-muted-foreground font-medium">{label}</p>
        <p className="text-2xl font-bold mt-1 text-card-foreground">{value}</p>
        {trend && (
          <p className={`text-xs mt-1 font-medium ${trendUp ? "text-success" : "text-destructive"}`}>
            {trend}
          </p>
        )}
      </div>
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
    </div>
  </div>
);

export default StatCard;
