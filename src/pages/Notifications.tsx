import { Bell, Check } from "lucide-react";

const notifications = [
  { text: "Your proposal has been approved by Dr. Sarah Ahmed", time: "2 hours ago", read: false },
  { text: "Mid Evaluation deadline is approaching — Jan 15, 2026", time: "5 hours ago", read: false },
  { text: "New message from Dr. Sarah Ahmed", time: "1 day ago", read: false },
  { text: "Literature Review grade posted: B+", time: "3 days ago", read: true },
  { text: "Meeting scheduled for Jan 8 at 2:00 PM", time: "5 days ago", read: true },
  { text: "Your SRS Document was uploaded successfully", time: "1 week ago", read: true },
];

const Notifications = () => (
  <div>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
      <p className="text-muted-foreground text-sm mt-1">Stay updated on your project activities</p>
    </div>
    <div className="max-w-2xl space-y-2">
      {notifications.map((n, i) => (
        <div
          key={i}
          className={`flex items-start gap-4 p-4 rounded-xl border transition-colors animate-fade-in ${
            n.read ? "bg-card border-border" : "bg-primary/5 border-primary/20"
          }`}
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${n.read ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"}`}>
            {n.read ? <Check className="w-4 h-4" /> : <Bell className="w-4 h-4" />}
          </div>
          <div>
            <p className={`text-sm ${n.read ? "text-muted-foreground" : "text-card-foreground font-medium"}`}>{n.text}</p>
            <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Notifications;
