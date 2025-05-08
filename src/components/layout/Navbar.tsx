
import React from 'react';
import { Bell, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div className="h-16 border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 rounded-md bg-muted/50 text-foreground focus:outline-none focus:ring-1 focus:ring-ring w-64"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-afriflow-amber"></span>
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="bg-afriflow-amber/10 text-afriflow-amber px-2 py-1 rounded-md text-xs font-medium">Beta</div>
          <div className="h-8 w-8 rounded-full bg-afriflow-blue flex items-center justify-center text-white">
            <User size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
