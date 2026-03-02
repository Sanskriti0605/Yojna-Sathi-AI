import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Eye, EyeOff, ArrowRight } from "lucide-react";

const Login = () => {
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* Left visual */}
      <div className="hidden lg:flex lg:w-1/2 civic-gradient-bg items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-secondary/30 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="relative z-10 max-w-md text-center">
          <div className="w-16 h-16 rounded-2xl civic-gradient-primary flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Welcome Back</h2>
          <p className="text-muted-foreground leading-relaxed">
            Access your personalized dashboard and discover government schemes tailored to your profile.
          </p>
        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md animate-fade-in">
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl civic-gradient-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">Yojna Sathi AI</span>
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-2">Sign In</h1>
          <p className="text-muted-foreground mb-8">Enter your credentials to access your account.</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input-civic"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-civic pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Password strength */}
            {password && (
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors ${password.length >= i * 3
                        ? i <= 2 ? "bg-destructive" : "bg-primary"
                        : "bg-muted"
                      }`}
                  />
                ))}
              </div>
            )}

            <Link to="/dashboard" className="btn-civic-primary w-full text-center">
              Sign In <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
