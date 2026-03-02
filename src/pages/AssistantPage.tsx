import { Bot } from "lucide-react";

const AssistantPage = () => (
  <div className="animate-fade-in space-y-6">
    <h1 className="text-2xl font-bold text-foreground">AI Assistant</h1>
    <div className="glass-card p-12 text-center max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <Bot className="w-8 h-8 text-primary" />
      </div>
      <h2 className="text-lg font-semibold text-foreground mb-2">Chat with Yojna Sathi AI</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Use the floating chat button in the bottom-right corner to start a conversation with our AI assistant.
      </p>
      <p className="text-xs text-muted-foreground">
        Ask about scheme eligibility, document recovery steps, application status, and more.
      </p>
    </div>
  </div>
);

export default AssistantPage;
