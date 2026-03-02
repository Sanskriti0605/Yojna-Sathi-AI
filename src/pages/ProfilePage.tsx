import { User, Mail, MapPin, Briefcase } from "lucide-react";

const ProfilePage = () => (
  <div className="animate-fade-in space-y-6 max-w-2xl">
    <h1 className="text-2xl font-bold text-foreground">Profile</h1>
    <div className="glass-card p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Citizen User</h2>
          <p className="text-sm text-muted-foreground">Member since Jan 2026</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { icon: Mail, label: "Email", value: "citizen@example.com" },
          { icon: MapPin, label: "State", value: "Maharashtra" },
          { icon: Briefcase, label: "Income", value: "₹2,50,000" },
          { icon: User, label: "Category", value: "OBC" },
        ].map((f) => (
          <div key={f.label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
            <f.icon className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">{f.label}</p>
              <p className="text-sm font-medium text-foreground">{f.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProfilePage;
