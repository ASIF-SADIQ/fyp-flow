import { useAuth } from "@/contexts/AuthContext";
import ProposalCard from "@/components/ProposalCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const studentProposals = [
  {
    title: "AI-Based Plagiarism Detection System",
    supervisor: "Dr. Sarah Ahmed",
    status: "approved" as const,
    date: "Sep 12, 2025",
    abstract: "An intelligent system using NLP techniques to detect plagiarism in academic documents.",
  },
];

const supervisorProposals = [
  { title: "Blockchain-Based Voting System", student: "Ali Hassan", status: "under_review" as const, date: "Jan 2, 2026", abstract: "Decentralized electronic voting using Ethereum smart contracts." },
  { title: "Smart Campus IoT Platform", student: "Fatima Noor", status: "submitted" as const, date: "Jan 4, 2026", abstract: "IoT sensor network for campus resource monitoring." },
  { title: "Mental Health Chatbot", student: "Usman Raza", status: "under_review" as const, date: "Dec 28, 2025", abstract: "AI chatbot providing mental health support using CBT techniques." },
  { title: "E-Commerce Recommendation Engine", student: "Zara Malik", status: "approved" as const, date: "Nov 10, 2025", abstract: "ML-powered product recommendation system for e-commerce platforms." },
];

const adminProposals = [
  ...supervisorProposals,
  { title: "AI-Based Plagiarism Detection", student: "Ahmed Khan", status: "approved" as const, date: "Sep 12, 2025", abstract: "NLP-based plagiarism detection system." },
  { title: "Virtual Lab Simulator", student: "Sara Qureshi", status: "rejected" as const, date: "Oct 5, 2025", abstract: "VR-based physics laboratory simulation for remote learning." },
];

const Proposals = () => {
  const { role } = useAuth();

  const proposals = role === "admin" ? adminProposals : role === "supervisor" ? supervisorProposals : studentProposals;
  const titles = { student: "My Proposal", supervisor: "Review Proposals", admin: "All Proposals" };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{role && titles[role]}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {role === "student" ? "Manage your project proposal" : `${proposals.length} proposals total`}
          </p>
        </div>
        {role === "student" && (
          <Button className="gradient-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" /> New Proposal
          </Button>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {proposals.map((p, i) => (
          <ProposalCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Proposals;
