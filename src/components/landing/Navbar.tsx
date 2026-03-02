import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border civic-shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="civic-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl civic-gradient-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">Yojna Sathi AI</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="btn-civic-ghost text-sm">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="btn-civic-ghost text-sm font-medium">
            Login
          </Link>
          <Link to="/register" className="btn-civic-primary text-sm">
            Register
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden btn-civic-ghost p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <div className="civic-container py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="btn-civic-ghost text-sm justify-start"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <hr className="border-border my-2" />
            <Link to="/login" className="btn-civic-ghost text-sm justify-start" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
            <Link to="/register" className="btn-civic-primary text-sm" onClick={() => setMobileOpen(false)}>
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
