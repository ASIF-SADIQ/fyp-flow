import { useState } from "react";
import { Send } from "lucide-react";

const contacts = [
  { name: "Dr. Sarah Ahmed", role: "Supervisor", unread: 2 },
  { name: "Ali Hassan", role: "Student", unread: 0 },
  { name: "Fatima Noor", role: "Student", unread: 1 },
];

const chatMessages = [
  { from: "Dr. Sarah Ahmed", text: "Hi Ahmed, how's your mid-eval progress?", time: "10:30 AM", self: false },
  { from: "You", text: "Hi Dr. Sarah! I've completed the NLP module and working on the UI now.", time: "10:35 AM", self: true },
  { from: "Dr. Sarah Ahmed", text: "Great work! Make sure to document the testing methodology.", time: "10:38 AM", self: false },
  { from: "You", text: "Will do. I'll have the draft ready by Friday.", time: "10:40 AM", self: true },
];

const Messages = () => {
  const [message, setMessage] = useState("");
  const [activeContact, setActiveContact] = useState(0);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground text-sm mt-1">Communicate with your supervisor and peers</p>
      </div>
      <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden grid grid-cols-3 h-[500px]">
        {/* Contacts */}
        <div className="border-r border-border overflow-y-auto">
          {contacts.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveContact(i)}
              className={`w-full text-left px-4 py-3.5 border-b border-border hover:bg-muted/50 transition-colors ${i === activeContact ? "bg-primary/5" : ""}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-card-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.role}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">{c.unread}</span>
                )}
              </div>
            </button>
          ))}
        </div>
        {/* Chat */}
        <div className="col-span-2 flex flex-col">
          <div className="px-5 py-3 border-b border-border">
            <p className="text-sm font-semibold text-card-foreground">{contacts[activeContact].name}</p>
            <p className="text-xs text-muted-foreground">{contacts[activeContact].role}</p>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {chatMessages.map((m, i) => (
              <div key={i} className={`flex ${m.self ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] rounded-xl px-4 py-2.5 ${m.self ? "gradient-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  <p className="text-sm">{m.text}</p>
                  <p className={`text-xs mt-1 ${m.self ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-border flex gap-3">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2.5 rounded-lg bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="p-2.5 rounded-lg gradient-primary text-primary-foreground">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
