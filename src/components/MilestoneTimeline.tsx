interface MilestoneTimelineProps {
  milestones: {
    name: string;
    status: "completed" | "current" | "upcoming";
    date: string;
    grade?: string;
  }[];
}

const MilestoneTimeline = ({ milestones }: MilestoneTimelineProps) => {
  return (
    <div className="space-y-0">
      {milestones.map((m, i) => (
        <div key={m.name} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
          {/* Line + dot */}
          <div className="flex flex-col items-center">
            <div
              className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 ${
                m.status === "completed"
                  ? "bg-success border-success"
                  : m.status === "current"
                  ? "bg-primary border-primary"
                  : "bg-muted border-border"
              }`}
            />
            {i < milestones.length - 1 && (
              <div className={`w-0.5 flex-1 min-h-[40px] ${m.status === "completed" ? "bg-success/40" : "bg-border"}`} />
            )}
          </div>
          {/* Content */}
          <div className="pb-6 -mt-0.5">
            <p className="text-sm font-semibold text-card-foreground">{m.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{m.date}</p>
            {m.grade && (
              <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
                Grade: {m.grade}
              </span>
            )}
            {m.status === "current" && (
              <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                In Progress
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MilestoneTimeline;
