import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="civic-container py-12 md:py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg civic-gradient-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">Yojna Sathi AI</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI-powered platform helping citizens discover and access government benefits they deserve.
          </p>
        </div>
        {[
          { title: "Product", links: ["Scheme Finder", "Document Recovery", "AI Assistant", "Pricing"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-foreground mb-4 text-sm">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Yojna Sathi AI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
