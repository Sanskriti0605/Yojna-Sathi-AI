import { Brain, FileSearch, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Eligibility Matching",
    description: "Advanced algorithms match your profile with thousands of government schemes in real-time for accurate results.",
  },
  {
    icon: ShieldCheck,
    title: "Explainable Recommendations",
    description: "Understand exactly why each scheme is recommended with transparent AI reasoning and eligibility breakdowns.",
  },
  {
    icon: FileSearch,
    title: "Document Recovery Assistant",
    description: "Lost a document? Our guided recovery tool walks you through step-by-step processes for any government ID.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="civic-section bg-background">
      <div className="civic-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Intelligent Features</h2>
          <p className="section-subtitle">
            Built with cutting-edge AI to simplify your interaction with government services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card p-8 text-center group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
