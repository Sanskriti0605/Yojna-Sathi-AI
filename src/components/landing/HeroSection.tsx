import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 civic-gradient-bg" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-secondary/30 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="civic-container relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 badge-civic mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Powered Civic Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Discover Government Benefits{" "}
            <span className="text-primary">You Deserve</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Our AI analyzes your profile against thousands of government schemes to find benefits you're eligible for — in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/register" className="btn-civic-primary text-base px-8 py-3.5 w-full sm:w-auto">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href="#features" className="btn-civic-outline text-base px-8 py-3.5 w-full sm:w-auto">
              Explore Schemes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
