import { useState } from "react";
import { CreditCard, Fingerprint, Car, FileText, GraduationCap, Heart, Check, ChevronRight } from "lucide-react";

const documents = [
  { id: "aadhaar", title: "Aadhaar Card", icon: Fingerprint, desc: "Unique identification authority of India" },
  { id: "pan", title: "PAN Card", icon: CreditCard, desc: "Permanent account number for tax" },
  { id: "dl", title: "Driving License", icon: Car, desc: "License issued by RTO" },
  { id: "voter", title: "Voter ID", icon: FileText, desc: "Electoral identity card" },
  { id: "marksheet", title: "Marksheet", icon: GraduationCap, desc: "Academic records and certificates" },
  { id: "health", title: "Health Card", icon: Heart, desc: "Ayushman Bharat health card" },
];

const steps = [
  { title: "Visit Official Portal", desc: "Go to the issuing authority's official website for duplicate request." },
  { title: "Fill Application Form", desc: "Complete the online application with your registered details." },
  { title: "Upload Supporting Documents", desc: "Attach identity proof, FIR copy (if lost), and passport photo." },
  { title: "Pay Processing Fee", desc: "Complete the online payment for the duplicate issuance fee." },
  { title: "Track & Receive", desc: "Track your application status and receive the document at your address." },
];

const DocumentRecovery = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleStep = (i: number) => {
    setCompleted(completed.includes(i) ? completed.filter(x => x !== i) : [...completed, i]);
  };

  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Document Recovery</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Lost a government document? Follow our guided process to recover it step by step.
        </p>
      </div>

      {/* Document selection */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Select Document Type</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((d) => (
            <button
              key={d.id}
              onClick={() => { setSelected(d.id); setCompleted([]); }}
              className={`glass-card p-5 text-left transition-all group ${
                selected === d.id ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                selected === d.id ? "bg-primary/15" : "bg-muted group-hover:bg-primary/10"
              }`}>
                <d.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{d.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{d.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Recovery flow */}
      {selected && (
        <div className="animate-fade-in">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Recovery Steps — {documents.find(d => d.id === selected)?.title}
          </h2>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-muted mb-6 overflow-hidden">
            <div
              className="h-full rounded-full civic-gradient-primary transition-all duration-500"
              style={{ width: `${(completed.length / steps.length) * 100}%` }}
            />
          </div>

          <div className="space-y-3">
            {steps.map((s, i) => {
              const done = completed.includes(i);
              return (
                <button
                  key={i}
                  onClick={() => toggleStep(i)}
                  className={`w-full glass-card p-4 flex items-center gap-4 text-left transition-all ${
                    done ? "opacity-70" : ""
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    done ? "civic-gradient-primary" : "bg-muted"
                  }`}>
                    {done ? (
                      <Check className="w-4 h-4 text-primary-foreground" />
                    ) : (
                      <span className="text-xs font-bold text-muted-foreground">{i + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm font-semibold ${done ? "line-through text-muted-foreground" : "text-foreground"}`}>
                      {s.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                </button>
              );
            })}
          </div>

          {completed.length === steps.length && (
            <div className="mt-6 p-6 rounded-2xl bg-primary/10 text-center animate-scale-in">
              <Check className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground">All Steps Completed!</h3>
              <p className="text-sm text-muted-foreground mt-1">Your document recovery process is on track.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentRecovery;
