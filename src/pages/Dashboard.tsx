import { FileText, Bookmark, Send, TrendingUp, Star, Clock } from "lucide-react";

const summaryCards = [
  { label: "Eligible Schemes", value: "24", icon: FileText, change: "+3 new" },
  { label: "Saved Schemes", value: "8", icon: Bookmark, change: "2 expiring" },
  { label: "Applications", value: "5", icon: Send, change: "1 pending" },
];

const recommended = [
  { title: "PM Kisan Samman Nidhi", score: 96, desc: "Financial benefit for small farmers with annual income under ₹2L.", deadline: "Mar 2026" },
  { title: "Ayushman Bharat Yojana", score: 91, desc: "Free health insurance coverage up to ₹5 lakh per family per year.", deadline: "Open" },
  { title: "PM Awas Yojana", score: 87, desc: "Housing subsidy for economically weaker sections and LIG categories.", deadline: "Jun 2026" },
  { title: "Skill India Mission", score: 82, desc: "Free skill development training and certification for youth.", deadline: "Dec 2026" },
];

const activities = [
  { text: "Applied for PM Kisan Samman Nidhi", time: "2 hours ago" },
  { text: "Saved Ayushman Bharat Yojana", time: "Yesterday" },
  { text: "Profile updated with new income details", time: "3 days ago" },
];

const Dashboard = () => (
  <div className="space-y-8 animate-fade-in">
    {/* Greeting */}
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">Good Morning, Citizen 👋</h1>
      <p className="text-muted-foreground mt-1">Here's your personalized benefits overview.</p>
    </div>

    {/* Summary cards */}
    <div className="grid sm:grid-cols-3 gap-4">
      {summaryCards.map((c) => (
        <div key={c.label} className="glass-card p-5 flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <c.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{c.label}</p>
            <p className="text-2xl font-bold text-foreground">{c.value}</p>
            <p className="text-xs text-primary mt-0.5">{c.change}</p>
          </div>
        </div>
      ))}
    </div>

    {/* CivicScore */}
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-foreground">CivicScore</h2>
        </div>
        <span className="text-sm font-bold text-primary">72 / 100</span>
      </div>
      <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
        <div className="h-full rounded-full civic-gradient-primary transition-all duration-1000" style={{ width: "72%" }} />
      </div>
      <p className="text-xs text-muted-foreground mt-2">Complete your profile and apply for more schemes to increase your score.</p>
    </div>

    {/* Recommended */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">AI Recommended Schemes</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {recommended.map((s) => (
          <div key={s.title} className="glass-card p-5 group cursor-pointer">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
              <span className="badge-civic text-xs shrink-0 ml-2">{s.score}%</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{s.desc}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>Deadline: {s.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Recent Activity */}
    <div>
      <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
      <div className="glass-card divide-y divide-border">
        {activities.map((a, i) => (
          <div key={i} className="flex items-center justify-between p-4">
            <p className="text-sm text-foreground">{a.text}</p>
            <span className="text-xs text-muted-foreground shrink-0 ml-4">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Dashboard;
