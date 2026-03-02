import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowRight, ArrowLeft, Check } from "lucide-react";

const stepLabels = ["Basic Info", "Socio-Economic", "Confirmation"];

const Register = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "", email: "", password: "",
    age: "", income: "", state: "", category: "",
  });

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [key]: e.target.value });

  return (
    <div className="min-h-screen flex">
      {/* Left visual */}
      <div className="hidden lg:flex lg:w-1/2 civic-gradient-bg items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-secondary/30 blur-3xl animate-float" />
        <div className="relative z-10 max-w-md text-center">
          <div className="w-16 h-16 rounded-2xl civic-gradient-primary flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Yojna Sathi AI</h2>
          <p className="text-muted-foreground leading-relaxed">
            Create your profile to receive personalized government scheme recommendations powered by AI.
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

          {/* Progress */}
          <div className="flex items-center gap-2 mb-10">
            {stepLabels.map((label, i) => (
              <div key={label} className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i < step ? "civic-gradient-primary text-primary-foreground" :
                    i === step ? "bg-primary text-primary-foreground" :
                      "bg-muted text-muted-foreground"
                    }`}>
                    {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
                  </div>
                  {i < 2 && <div className={`flex-1 h-0.5 rounded-full transition-colors ${i < step ? "bg-primary" : "bg-muted"}`} />}
                </div>
                <span className="text-xs text-muted-foreground hidden sm:block">{label}</span>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {step === 0 && (
              <>
                <h2 className="text-xl font-semibold text-foreground mb-1">Basic Information</h2>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Full Name</label>
                  <input value={form.name} onChange={set("name")} placeholder="Your full name" className="input-civic" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
                  <input type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className="input-civic" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Password</label>
                  <input type="password" value={form.password} onChange={set("password")} placeholder="••••••••" className="input-civic" />
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <h2 className="text-xl font-semibold text-foreground mb-1">Socio-Economic Details</h2>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Age</label>
                  <input type="number" value={form.age} onChange={set("age")} placeholder="25" className="input-civic" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Annual Income (₹)</label>
                  <input type="number" value={form.income} onChange={set("income")} placeholder="300000" className="input-civic" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">State</label>
                  <select value={form.state} onChange={set("state")} className="input-civic">
                    <option value="">Select State</option>
                    {["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Gujarat", "Rajasthan", "West Bengal"].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Category</label>
                  <select value={form.category} onChange={set("category")} className="input-civic">
                    <option value="">Select Category</option>
                    {["General", "OBC", "SC", "ST", "EWS"].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {step === 2 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">All Set!</h2>
                <p className="text-muted-foreground text-sm mb-4">Review your details and complete registration.</p>
                <div className="glass-card p-5 text-left text-sm space-y-2">
                  <p><span className="text-muted-foreground">Name:</span> <span className="font-medium text-foreground">{form.name || "—"}</span></p>
                  <p><span className="text-muted-foreground">Email:</span> <span className="font-medium text-foreground">{form.email || "—"}</span></p>
                  <p><span className="text-muted-foreground">Age:</span> <span className="font-medium text-foreground">{form.age || "—"}</span></p>
                  <p><span className="text-muted-foreground">State:</span> <span className="font-medium text-foreground">{form.state || "—"}</span></p>
                  <p><span className="text-muted-foreground">Category:</span> <span className="font-medium text-foreground">{form.category || "—"}</span></p>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              {step > 0 && (
                <button type="button" onClick={() => setStep(step - 1)} className="btn-civic-outline flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </button>
              )}
              {step < 2 ? (
                <button type="button" onClick={() => setStep(step + 1)} className="btn-civic-primary flex-1">
                  Next <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <Link to="/dashboard" className="btn-civic-primary flex-1 text-center">
                  Complete Registration <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              )}
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
