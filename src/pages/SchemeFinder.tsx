import { useState } from "react";
import { Search, Filter, LayoutGrid, List, Bookmark, ChevronDown, ChevronUp, RotateCcw } from "lucide-react";

const schemes = [
  { id: 1, title: "PM Kisan Samman Nidhi", score: 96, desc: "Financial benefit for small farmers with annual income under ₹2L.", deadline: "Mar 2026", category: "Agriculture", why: "Your income and occupation match the eligibility criteria for this agricultural subsidy program." },
  { id: 2, title: "Ayushman Bharat Yojana", score: 91, desc: "Free health insurance coverage up to ₹5 lakh per family.", deadline: "Open", category: "Health", why: "Based on your family income bracket, you qualify for this comprehensive health coverage scheme." },
  { id: 3, title: "PM Awas Yojana", score: 87, desc: "Housing subsidy for EWS and LIG categories.", deadline: "Jun 2026", category: "Housing", why: "Your income level and housing status indicate eligibility for this subsidized housing program." },
  { id: 4, title: "Skill India Mission", score: 82, desc: "Free skill development and certification for youth.", deadline: "Dec 2026", category: "Education", why: "Your age group and educational background make you eligible for sponsored skill development programs." },
  { id: 5, title: "Mudra Loan Scheme", score: 78, desc: "Collateral-free loans for small business enterprises.", deadline: "Open", category: "Finance", why: "Your entrepreneurship profile and income range fit the Mudra loan eligibility requirements." },
  { id: 6, title: "National Scholarship Portal", score: 75, desc: "Scholarships for students from economically weaker backgrounds.", deadline: "Sep 2026", category: "Education", why: "Your family income and academic profile meet the scholarship eligibility thresholds." },
];

const SchemeFinder = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [saved, setSaved] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Scheme Finder</h1>
          <p className="text-muted-foreground text-sm mt-1">Discover government schemes tailored to your profile.</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setView("grid")} className={`btn-civic-ghost p-2 ${view === "grid" ? "bg-muted" : ""}`}>
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button onClick={() => setView("list")} className={`btn-civic-ghost p-2 ${view === "list" ? "bg-muted" : ""}`}>
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Filter sidebar */}
        <div className={`shrink-0 transition-all duration-300 ${showFilters ? "w-56" : "w-0 overflow-hidden"}`}>
          <div className="glass-card p-5 space-y-5 sticky top-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filters
              </h3>
              <button className="text-xs text-primary hover:underline flex items-center gap-1">
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>
            {[
              { label: "Age Group", options: ["18-25", "26-35", "36-50", "50+"] },
              { label: "Income Range", options: ["Below ₹1L", "₹1L-₹3L", "₹3L-₹5L", "Above ₹5L"] },
              { label: "Category", options: ["General", "OBC", "SC", "ST", "EWS"] },
              { label: "Benefit Type", options: ["Financial", "Health", "Housing", "Education"] },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-xs font-medium text-foreground block mb-1.5">{f.label}</label>
                <select className="input-civic text-xs py-2">
                  <option value="">All</option>
                  {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle filter button on mobile */}
        <button
          className="md:hidden fixed bottom-20 left-4 z-30 btn-civic-primary p-3 rounded-full civic-shadow-lg"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="w-5 h-5" />
        </button>

        {/* Results */}
        <div className="flex-1 min-w-0">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input placeholder="Search schemes..." className="input-civic pl-9 text-sm" />
          </div>

          <div className={view === "grid" ? "grid sm:grid-cols-2 gap-4" : "space-y-3"}>
            {schemes.map((s) => (
              <div key={s.id} className="glass-card p-5 group">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="badge-civic text-[10px] mb-2 inline-block">{s.category}</span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      s.score >= 90 ? "bg-primary/15 text-primary" : "bg-accent text-accent-foreground"
                    }`}>{s.score}%</span>
                    <button
                      onClick={() => setSaved(saved.includes(s.id) ? saved.filter(x => x !== s.id) : [...saved, s.id])}
                      className={`p-1.5 rounded-lg transition-colors ${saved.includes(s.id) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary"}`}
                    >
                      <Bookmark className="w-4 h-4" fill={saved.includes(s.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <p className="text-xs text-muted-foreground mb-3">Deadline: {s.deadline}</p>

                <button
                  onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                  className="text-xs text-primary font-medium flex items-center gap-1 hover:underline"
                >
                  Why Recommended? {expanded === s.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
                {expanded === s.id && (
                  <div className="mt-3 p-3 rounded-xl bg-muted text-xs text-muted-foreground leading-relaxed animate-fade-in">
                    {s.why}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[1, 2, 3].map((p) => (
              <button key={p} className={`w-9 h-9 rounded-xl text-sm font-medium transition-colors ${
                p === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
              }`}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeFinder;
