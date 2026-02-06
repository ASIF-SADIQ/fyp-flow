import { useAuth } from "@/contexts/AuthContext";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, FileText, BarChart3, MessageSquare,
  Calendar, Bell, Settings, LogOut, Users, GraduationCap,
  ClipboardCheck, FolderOpen
} from "lucide-react";

const studentLinks = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/proposals", icon: FileText, label: "My Proposal" },
  { to: "/milestones", icon: BarChart3, label: "Milestones" },
  { to: "/documents", icon: FolderOpen, label: "Documents" },
  { to: "/messages", icon: MessageSquare, label: "Messages" },
  { to: "/schedule", icon: Calendar, label: "Schedule" },
];

const supervisorLinks = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/proposals", icon: ClipboardCheck, label: "Review Proposals" },
  { to: "/students", icon: Users, label: "My Students" },
  { to: "/milestones", icon: BarChart3, label: "Milestones" },
  { to: "/messages", icon: MessageSquare, label: "Messages" },
  { to: "/schedule", icon: Calendar, label: "Schedule" },
];

const adminLinks = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/users", icon: Users, label: "Manage Users" },
  { to: "/proposals", icon: FileText, label: "All Proposals" },
  { to: "/reports", icon: BarChart3, label: "Reports" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export const AppSidebar = () => {
  const { role, userName, logout } = useAuth();
  const location = useLocation();

  const links = role === "admin" ? adminLinks : role === "supervisor" ? supervisorLinks : studentLinks;

  const roleLabels = {
    student: "Student",
    supervisor: "Supervisor",
    admin: "Administrator",
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-sidebar-border">
        <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight">FYP Portal</h1>
          <p className="text-xs text-sidebar-foreground/60">Management System</p>
        </div>
      </div>

      {/* User info */}
      <div className="px-6 py-4 border-b border-sidebar-border">
        <p className="text-sm font-medium truncate">{userName}</p>
        <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-sidebar-accent text-sidebar-accent-foreground">
          {role && roleLabels[role]}
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`
            }
          >
            <Icon className="w-4.5 h-4.5 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Notifications + Logout */}
      <div className="px-3 pb-4 space-y-1 border-t border-sidebar-border pt-4">
        <NavLink
          to="/notifications"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <Bell className="w-4.5 h-4.5" />
          Notifications
          <span className="ml-auto bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </NavLink>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:bg-destructive/20 hover:text-destructive transition-colors"
        >
          <LogOut className="w-4.5 h-4.5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};
