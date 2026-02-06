import { useAuth, UserRole } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Users, Shield, ArrowRight, FileText, BarChart3, MessageSquare } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

const roles: { role: UserRole; label: string; icon: typeof GraduationCap; desc: string }[] = [
  { role: "student", label: "Student", icon: GraduationCap, desc: "Submit proposals, track milestones, upload documents" },
  { role: "supervisor", label: "Supervisor", icon: Users, desc: "Review proposals, grade milestones, guide students" },
  { role: "admin", label: "Admin", icon: Shield, desc: "Manage users, monitor progress, generate reports" },
];

const features = [
  { icon: FileText, title: "Proposal Management", desc: "Submit, review, and track FYP proposals with version control" },
  { icon: BarChart3, title: "Milestone Tracking", desc: "Monitor progress with structured timelines and grading" },
  { icon: MessageSquare, title: "Communication Hub", desc: "Centralized messaging between students and supervisors" },
];

const LandingPage = () => {
  const { setRole } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: UserRole) => {
    setRole(role);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-85" />
        </div>
        <nav className="relative z-10 container mx-auto flex items-center justify-between py-5 px-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-primary-foreground">FYP Portal</span>
          </div>
        </nav>
        <div className="relative z-10 container mx-auto px-6 py-20 lg:py-28 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
            University FYP Portal
            <span className="block text-accent mt-2">Management System</span>
          </h1>
          <p className="mt-5 text-lg text-primary-foreground/70 max-w-xl mx-auto">
            A centralized platform managing the entire Final Year Project lifecycle — from proposal to viva evaluation.
          </p>
          <a href="#login" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold shadow-elevated hover:opacity-90 transition-opacity mr-3">
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/login" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors">
            Sign In
          </a>
        </div>
      </header>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center text-foreground">Core Features</h2>
        <p className="text-center text-muted-foreground mt-2 text-sm">Everything you need for structured FYP management</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Role Login */}
      <section id="login" className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center text-foreground">Sign In As</h2>
        <p className="text-center text-muted-foreground mt-2 text-sm">Select your role to access the portal (demo mode)</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
          {roles.map((r, i) => (
            <button
              key={r.role}
              onClick={() => handleLogin(r.role)}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:border-primary/30 transition-all text-left group animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-colors">
                <r.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">{r.label}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{r.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                Continue <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 University FYP Portal. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
