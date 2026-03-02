const SettingsPage = () => (
  <div className="animate-fade-in space-y-6 max-w-2xl">
    <h1 className="text-2xl font-bold text-foreground">Settings</h1>
    <div className="glass-card p-6 space-y-5">
      {[
        { label: "Email Notifications", desc: "Receive updates about new schemes and deadlines." },
        { label: "SMS Alerts", desc: "Get application status updates via SMS." },
        { label: "AI Recommendations", desc: "Allow AI to personalize your scheme recommendations." },
      ].map((s) => (
        <div key={s.label} className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">{s.label}</h3>
            <p className="text-xs text-muted-foreground">{s.desc}</p>
          </div>
          <button className="w-11 h-6 rounded-full bg-primary relative transition-colors">
            <span className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-primary-foreground transition-transform" />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default SettingsPage;
