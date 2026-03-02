import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  LayoutDashboard, Search, Bookmark, FileText, FolderOpen,
  Bot, User, Settings, Menu, Bell, ChevronLeft, Shield, LogOut,
} from "lucide-react";
import AIChatWidget from "@/components/chat/AIChatWidget";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Scheme Finder", icon: Search, path: "/dashboard/schemes" },
  { label: "Saved Schemes", icon: Bookmark, path: "/dashboard/saved" },
  { label: "Applications", icon: FileText, path: "/dashboard/applications" },
  { label: "Document Recovery", icon: FolderOpen, path: "/dashboard/documents" },
  { label: "AI Assistant", icon: Bot, path: "/dashboard/assistant" },
  { label: "Profile", icon: User, path: "/dashboard/profile" },
  { label: "Settings", icon: Settings, path: "/dashboard/settings" },
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 flex items-center gap-2.5 border-b border-sidebar-border">
        <div className="w-9 h-9 rounded-xl civic-gradient-primary flex items-center justify-center shrink-0">
          <Shield className="w-5 h-5 text-primary-foreground" />
        </div>
        {!collapsed && <span className="font-bold text-sidebar-foreground text-sm truncate">Yojna Sathi AI</span>}
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${active
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/60"
                }`}
            >
              <item.icon className="w-[18px] h-[18px] shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-sidebar-border">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-sidebar-foreground hover:bg-sidebar-accent/60 transition-colors"
        >
          <LogOut className="w-[18px] h-[18px] shrink-0" />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop sidebar */}
      <aside
        className={`hidden md:flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300 shrink-0 ${collapsed ? "w-16" : "w-60"
          }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-60 bg-sidebar border-r border-sidebar-border animate-slide-in-left">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b border-border bg-card flex items-center gap-4 px-4 md:px-6 shrink-0">
          <button
            onClick={() => { if (window.innerWidth < 768) setMobileOpen(true); else setCollapsed(!collapsed); }}
            className="btn-civic-ghost p-2"
          >
            {collapsed ? <Menu className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5 hidden md:block" />}
            <Menu className="w-5 h-5 md:hidden" />
          </button>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input placeholder="Search schemes, documents..." className="input-civic pl-9 py-2 text-sm" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="btn-civic-ghost p-2 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

      <AIChatWidget />
    </div>
  );
};

export default DashboardLayout;
