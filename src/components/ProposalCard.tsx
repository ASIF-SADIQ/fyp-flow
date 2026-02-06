import { Badge } from "@/components/ui/badge";

type ProposalStatus = "draft" | "submitted" | "under_review" | "approved" | "rejected";

interface ProposalCardProps {
  title: string;
  student?: string;
  supervisor?: string;
  status: ProposalStatus;
  date: string;
  abstract?: string;
}

const statusConfig: Record<ProposalStatus, { label: string; className: string }> = {
  draft: { label: "Draft", className: "bg-muted text-muted-foreground" },
  submitted: { label: "Submitted", className: "bg-primary/10 text-primary" },
  under_review: { label: "Under Review", className: "bg-warning/10 text-warning" },
  approved: { label: "Approved", className: "bg-success/10 text-success" },
  rejected: { label: "Rejected", className: "bg-destructive/10 text-destructive" },
};

const ProposalCard = ({ title, student, supervisor, status, date, abstract }: ProposalCardProps) => {
  const { label, className } = statusConfig[status];

  return (
    <div className="bg-card rounded-xl p-5 shadow-card border border-border hover:shadow-elevated transition-shadow animate-fade-in">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-card-foreground truncate">{title}</h3>
          {student && <p className="text-xs text-muted-foreground mt-1">By {student}</p>}
          {supervisor && <p className="text-xs text-muted-foreground mt-1">Supervisor: {supervisor}</p>}
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${className}`}>
          {label}
        </span>
      </div>
      {abstract && (
        <p className="text-xs text-muted-foreground mt-3 line-clamp-2">{abstract}</p>
      )}
      <p className="text-xs text-muted-foreground/60 mt-3">{date}</p>
    </div>
  );
};

export default ProposalCard;
