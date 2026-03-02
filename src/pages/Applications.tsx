import { Send, CheckCircle, Clock, AlertCircle } from "lucide-react";

const apps = [
  { title: "PM Kisan Samman Nidhi", status: "approved", date: "Jan 15, 2026" },
  { title: "Ayushman Bharat Yojana", status: "pending", date: "Feb 10, 2026" },
  { title: "Skill India Mission", status: "review", date: "Feb 20, 2026" },
];

const statusConfig: Record<string, { label: string; icon: typeof CheckCircle; cls: string }> = {
  approved: { label: "Approved", icon: CheckCircle, cls: "text-primary bg-primary/10" },
  pending: { label: "Pending", icon: Clock, cls: "text-muted-foreground bg-muted" },
  review: { label: "Under Review", icon: AlertCircle, cls: "text-accent-foreground bg-accent" },
};

const Applications = () => (
  <div className="animate-fade-in space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Applications</h1>
      <p className="text-muted-foreground text-sm mt-1">Track your scheme applications.</p>
    </div>
    <div className="glass-card divide-y divide-border">
      {apps.map((a) => {
        const sc = statusConfig[a.status];
        return (
          <div key={a.title} className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Send className="w-4 h-4 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground text-sm">{a.title}</h3>
                <p className="text-xs text-muted-foreground">{a.date}</p>
              </div>
            </div>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${sc.cls}`}>
              <sc.icon className="w-3 h-3" /> {sc.label}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

export default Applications;
