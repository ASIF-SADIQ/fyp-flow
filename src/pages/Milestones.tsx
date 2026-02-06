import MilestoneTimeline from "@/components/MilestoneTimeline";

const milestones = [
  { name: "Proposal Submission", status: "completed" as const, date: "Sep 15, 2025", grade: "A" },
  { name: "Literature Review", status: "completed" as const, date: "Oct 30, 2025", grade: "B+" },
  { name: "Mid Evaluation", status: "current" as const, date: "Jan 15, 2026" },
  { name: "Final Report", status: "upcoming" as const, date: "Mar 20, 2026" },
  { name: "Viva Voce", status: "upcoming" as const, date: "Apr 10, 2026" },
];

const Milestones = () => (
  <div>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Milestones</h1>
      <p className="text-muted-foreground text-sm mt-1">Track your project progress through each milestone</p>
    </div>
    <div className="max-w-2xl">
      <div className="bg-card rounded-xl p-6 shadow-card border border-border">
        <MilestoneTimeline milestones={milestones} />
      </div>
    </div>
  </div>
);

export default Milestones;
