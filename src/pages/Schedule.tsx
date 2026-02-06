import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const events = [
  { title: "Supervisor Meeting", date: "Jan 8, 2026", time: "2:00 PM", location: "Room 305", type: "meeting" },
  { title: "Mid Evaluation Deadline", date: "Jan 15, 2026", time: "11:59 PM", location: "Online Portal", type: "deadline" },
  { title: "Progress Presentation", date: "Jan 22, 2026", time: "10:00 AM", location: "Seminar Hall B", type: "presentation" },
  { title: "Final Report Submission", date: "Mar 20, 2026", time: "11:59 PM", location: "Online Portal", type: "deadline" },
  { title: "Viva Voce", date: "Apr 10, 2026", time: "9:00 AM", location: "Examination Hall", type: "viva" },
];

const typeColors: Record<string, string> = {
  meeting: "bg-primary/10 text-primary",
  deadline: "bg-destructive/10 text-destructive",
  presentation: "bg-warning/10 text-warning",
  viva: "bg-success/10 text-success",
};

const Schedule = () => (
  <div>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Schedule</h1>
      <p className="text-muted-foreground text-sm mt-1">Upcoming events, meetings, and deadlines</p>
    </div>
    <div className="max-w-2xl space-y-4">
      {events.map((e, i) => (
        <div
          key={i}
          className="bg-card rounded-xl p-5 shadow-card border border-border hover:shadow-elevated transition-shadow animate-fade-in"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full capitalize ${typeColors[e.type]}`}>{e.type}</span>
              </div>
              <h3 className="text-sm font-semibold text-card-foreground">{e.title}</h3>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><CalendarIcon className="w-3 h-3" /> {e.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {e.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.location}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Schedule;
