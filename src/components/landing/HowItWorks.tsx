import { UserPlus, Cpu, Send } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Create Profile", description: "Tell us about yourself — age, income, location, and more." },
  { icon: Cpu, title: "Get AI Recommendations", description: "Our AI matches your profile with eligible government schemes." },
  { icon: Send, title: "Apply & Track", description: "Apply directly and track your application status in real-time." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="civic-section civic-gradient-bg">
      <div className="civic-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="section-subtitle">Three simple steps to discover your eligible benefits.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="relative z-10 w-14 h-14 rounded-full civic-gradient-primary flex items-center justify-center mx-auto mb-6">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-primary mb-2 block uppercase tracking-wider">Step {i + 1}</span>
              <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
