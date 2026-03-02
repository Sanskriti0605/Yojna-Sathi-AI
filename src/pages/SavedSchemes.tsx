import { Bookmark, Clock } from "lucide-react";

const saved = [
  { title: "PM Kisan Samman Nidhi", score: 96, deadline: "Mar 2026", category: "Agriculture" },
  { title: "Ayushman Bharat Yojana", score: 91, deadline: "Open", category: "Health" },
];

const SavedSchemes = () => (
  <div className="animate-fade-in space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Saved Schemes</h1>
      <p className="text-muted-foreground text-sm mt-1">Schemes you've bookmarked for later.</p>
    </div>
    {saved.length === 0 ? (
      <div className="glass-card p-12 text-center">
        <Bookmark className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
        <p className="text-muted-foreground">No saved schemes yet.</p>
      </div>
    ) : (
      <div className="grid sm:grid-cols-2 gap-4">
        {saved.map((s) => (
          <div key={s.title} className="glass-card p-5 group cursor-pointer">
            <span className="badge-civic text-[10px] mb-2 inline-block">{s.category}</span>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs font-bold text-primary">{s.score}% match</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {s.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default SavedSchemes;
