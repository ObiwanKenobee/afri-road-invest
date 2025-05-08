
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChartBar, Map, Wallet, Settings, Users, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

const NavItem = ({ to, icon, label }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-2 px-4 py-3 rounded-md text-sidebar-foreground transition-colors",
        "hover:bg-sidebar-accent",
        isActive && "bg-sidebar-accent"
      )
    }
  >
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </NavLink>
);

const Sidebar = () => {
  return (
    <div className="h-screen bg-sidebar w-64 flex flex-col text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-6">
        <h1 className="text-xl font-heading font-bold flex items-center gap-2">
          <span className="text-white bg-afriflow-green p-1 rounded">Afri</span>
          <span className="text-white bg-afriflow-blue p-1 rounded">Flow</span>
          <span className="text-xs font-sans bg-afriflow-amber text-white px-1 py-0.5 rounded ml-1">+ RoadX</span>
        </h1>
      </div>
      
      <div className="flex flex-col gap-1 px-3 flex-1">
        <NavItem to="/" icon={<ChartBar size={18} />} label="Dashboard" />
        <NavItem to="/traffic" icon={<Map size={18} />} label="Traffic Monitoring" />
        <NavItem to="/investment" icon={<Wallet size={18} />} label="Investment Portal" />
        <NavItem to="/alerts" icon={<AlertCircle size={18} />} label="Alerts" />
        <NavItem to="/community" icon={<Users size={18} />} label="Community" />
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <NavItem to="/settings" icon={<Settings size={18} />} label="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
