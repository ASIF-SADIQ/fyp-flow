import { useAuth } from "@/contexts/AuthContext";
import StatCard from "@/components/StatCard";
import MilestoneTimeline from "@/components/MilestoneTimeline";
import ProposalCard from "@/components/ProposalCard";
import { FileText, BarChart3, Clock, CheckCircle, Users, ClipboardCheck, TrendingUp, AlertCircle } from "lucide-react";

const studentMilestones = [
  { name: "Proposal Submission", status: "completed" as const, date: "Sep 15, 2025", grade: "A" },
  { name: "Literature Review", status: "completed" as const, date: "Oct 30, 2025", grade: "B+" },
  { name: "Mid Evaluation", status: "current" as const, date: "Jan 15, 2026" },
  { name: "Final Report", status: "upcoming" as const, date: "Mar 20, 2026" },
  { name: "Viva Voce", status: "upcoming" as const, date: "Apr 10, 2026" },
];

const StudentDashboard = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      <StatCard icon={<FileText className="w-5 h-5" />} label="Proposal Status" value="Approved" trend="Since Sep 15" trendUp />
      <StatCard icon={<BarChart3 className="w-5 h-5" />} label="Milestones Done" value="2/5" trend="40% complete" trendUp />
      <StatCard icon={<Clock className="w-5 h-5" />} label="Next Deadline" value="Jan 15" trend="Mid Evaluation" />
      <StatCard icon={<CheckCircle className="w-5 h-5" />} label="Documents" value="8" trend="+2 this month" trendUp />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-card rounded-xl p-6 shadow-card border border-border">
        <h3 className="text-lg font-semibold text-card-foreground mb-5">Project Timeline</h3>
        <MilestoneTimeline milestones={studentMilestones} />
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">My Proposal</h3>
        <ProposalCard
          title="AI-Based Plagiarism Detection System"
          supervisor="Dr. Sarah Ahmed"
          status="approved"
          date="Submitted Sep 12, 2025"
          abstract="An intelligent system using NLP techniques to detect plagiarism in academic documents with contextual analysis."
        />
        <div className="bg-card rounded-xl p-5 shadow-card border border-border">
          <h4 className="text-sm font-semibold text-card-foreground mb-3">Upcoming</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-warning" />
              <span className="text-muted-foreground">Mid Eval submission — Jan 15</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">Meeting with supervisor — Jan 8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const SupervisorDashboard = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      <StatCard icon={<Users className="w-5 h-5" />} label="Assigned Students" value="12" trend="+2 this semester" trendUp />
      <StatCard icon={<ClipboardCheck className="w-5 h-5" />} label="Pending Reviews" value="4" trend="Needs attention" />
      <StatCard icon={<CheckCircle className="w-5 h-5" />} label="Approved Proposals" value="8" trend="67% rate" trendUp />
      <StatCard icon={<AlertCircle className="w-5 h-5" />} label="At Risk" value="2" trend="Behind schedule" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Pending Reviews</h3>
        <div className="space-y-4">
          <ProposalCard title="Blockchain-Based Voting System" student="Ali Hassan" status="under_review" date="Jan 2, 2026" abstract="Decentralized electronic voting using Ethereum smart contracts." />
          <ProposalCard title="Smart Campus IoT Platform" student="Fatima Noor" status="submitted" date="Jan 4, 2026" abstract="IoT sensor network for campus resource monitoring and optimization." />
          <ProposalCard title="Mental Health Chatbot" student="Usman Raza" status="under_review" date="Dec 28, 2025" abstract="AI chatbot providing mental health support using CBT techniques." />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Student Progress</h3>
        <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
          {[
            { name: "Ahmed Khan", progress: 40 },
            { name: "Zara Malik", progress: 65 },
            { name: "Hassan Ali", progress: 20 },
            { name: "Aisha Bibi", progress: 80 },
          ].map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-card-foreground">{s.name}</span>
                <span className="text-muted-foreground">{s.progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full gradient-primary transition-all duration-500"
                  style={{ width: `${s.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const AdminDashboard = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      <StatCard icon={<Users className="w-5 h-5" />} label="Total Students" value="156" trend="+12 this year" trendUp />
      <StatCard icon={<FileText className="w-5 h-5" />} label="Active Projects" value="78" trend="50% of students" trendUp />
      <StatCard icon={<TrendingUp className="w-5 h-5" />} label="Approval Rate" value="72%" trend="+5% vs last year" trendUp />
      <StatCard icon={<CheckCircle className="w-5 h-5" />} label="Completed" value="34" trend="43% done" trendUp />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-card rounded-xl p-6 shadow-card border border-border">
        <h3 className="text-lg font-semibold text-card-foreground mb-5">Project Distribution by Department</h3>
        <div className="space-y-4">
          {[
            { dept: "Computer Science", count: 32, pct: 41 },
            { dept: "Software Engineering", count: 22, pct: 28 },
            { dept: "Information Technology", count: 14, pct: 18 },
            { dept: "Data Science", count: 10, pct: 13 },
          ].map((d) => (
            <div key={d.dept}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-card-foreground">{d.dept}</span>
                <span className="text-muted-foreground">{d.count} projects ({d.pct}%)</span>
              </div>
              <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full rounded-full gradient-primary transition-all" style={{ width: `${d.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="bg-card rounded-xl p-5 shadow-card border border-border space-y-4">
          {[
            { text: "New proposal submitted by Ali Hassan", time: "2h ago" },
            { text: "Dr. Ahmed approved 3 proposals", time: "5h ago" },
            { text: "Mid-evaluation deadline set for CS dept", time: "1d ago" },
            { text: "12 students completed Literature Review", time: "2d ago" },
          ].map((a, i) => (
            <div key={i} className="flex gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
              <div>
                <p className="text-card-foreground">{a.text}</p>
                <p className="text-xs text-muted-foreground">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const Dashboard = () => {
  const { role } = useAuth();

  const titles = { student: "Student Dashboard", supervisor: "Supervisor Dashboard", admin: "Admin Dashboard" };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">{role && titles[role]}</h1>
        <p className="text-muted-foreground text-sm mt-1">Welcome back! Here's your overview.</p>
      </div>
      {role === "student" && <StudentDashboard />}
      {role === "supervisor" && <SupervisorDashboard />}
      {role === "admin" && <AdminDashboard />}
    </div>
  );
};

export default Dashboard;
