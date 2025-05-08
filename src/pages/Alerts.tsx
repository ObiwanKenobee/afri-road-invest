
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { AlertCircle, Bell, BellOff, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Alerts = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold font-heading mb-1">Alerts</h1>
            <p className="text-muted-foreground">Monitor critical traffic and investment notifications</p>
          </div>
          
          <div className="mb-6">
            <Tabs defaultValue="all">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="all">All Alerts</TabsTrigger>
                  <TabsTrigger value="traffic">Traffic</TabsTrigger>
                  <TabsTrigger value="investment">Investment</TabsTrigger>
                  <TabsTrigger value="system">System</TabsTrigger>
                </TabsList>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Mark All Read</Button>
                  <Button variant="outline" size="sm">Settings</Button>
                </div>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="space-y-4">
                  <AlertItem 
                    title="Critical Congestion Alert" 
                    location="Westlands Interchange, Nairobi"
                    time="10 minutes ago"
                    type="traffic"
                    severity="critical"
                    message="Traffic congestion has reached 95% capacity. Estimated clearing time: 90 minutes."
                    icon={<AlertCircle className="text-red-500" />}
                  />
                  
                  <AlertItem 
                    title="Investment Opportunity Closing Soon" 
                    location="Lagos Smart Traffic Grid, Nigeria"
                    time="2 hours ago"
                    type="investment"
                    severity="warning"
                    message="Only 8 hours remaining to participate in this investment round. Currently at 72% of funding goal."
                    icon={<Bell className="text-amber-500" />}
                  />
                  
                  <AlertItem 
                    title="Sensor Maintenance Required" 
                    location="Eastern Bypass, Accra"
                    time="Yesterday"
                    type="system"
                    severity="info"
                    message="Sensor ID #A289 battery level below 15%. Maintenance team has been notified."
                    icon={<Info className="text-blue-500" />}
                  />
                  
                  <AlertItem 
                    title="Traffic Pattern Change Detected" 
                    location="Central Business District, Lagos"
                    time="Yesterday"
                    type="traffic"
                    severity="warning"
                    message="Unusual traffic pattern detected. Consider alternative routing through sector B12."
                    icon={<AlertCircle className="text-amber-500" />}
                  />
                  
                  <AlertItem 
                    title="Investment Return Distributed" 
                    location="Accra-Kumasi Highway, Ghana"
                    time="2 days ago"
                    type="investment"
                    severity="success"
                    message="Quarterly returns of 2.1% have been distributed to all investors in this project."
                    icon={<Bell className="text-green-500" />}
                  />
                  
                  <AlertItem 
                    title="Scheduled Maintenance Complete" 
                    location="Nairobi-Mombasa Smart Corridor, Kenya"
                    time="3 days ago"
                    type="system"
                    severity="info"
                    message="All scheduled sensor maintenance tasks have been completed successfully."
                    icon={<BellOff className="text-blue-500" />}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="traffic" className="mt-0">
                <div className="space-y-4">
                  <AlertItem 
                    title="Critical Congestion Alert" 
                    location="Westlands Interchange, Nairobi"
                    time="10 minutes ago"
                    type="traffic"
                    severity="critical"
                    message="Traffic congestion has reached 95% capacity. Estimated clearing time: 90 minutes."
                    icon={<AlertCircle className="text-red-500" />}
                  />
                  
                  <AlertItem 
                    title="Traffic Pattern Change Detected" 
                    location="Central Business District, Lagos"
                    time="Yesterday"
                    type="traffic"
                    severity="warning"
                    message="Unusual traffic pattern detected. Consider alternative routing through sector B12."
                    icon={<AlertCircle className="text-amber-500" />}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="investment" className="mt-0">
                <div className="space-y-4">
                  <AlertItem 
                    title="Investment Opportunity Closing Soon" 
                    location="Lagos Smart Traffic Grid, Nigeria"
                    time="2 hours ago"
                    type="investment"
                    severity="warning"
                    message="Only 8 hours remaining to participate in this investment round. Currently at 72% of funding goal."
                    icon={<Bell className="text-amber-500" />}
                  />
                  
                  <AlertItem 
                    title="Investment Return Distributed" 
                    location="Accra-Kumasi Highway, Ghana"
                    time="2 days ago"
                    type="investment"
                    severity="success"
                    message="Quarterly returns of 2.1% have been distributed to all investors in this project."
                    icon={<Bell className="text-green-500" />}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="system" className="mt-0">
                <div className="space-y-4">
                  <AlertItem 
                    title="Sensor Maintenance Required" 
                    location="Eastern Bypass, Accra"
                    time="Yesterday"
                    type="system"
                    severity="info"
                    message="Sensor ID #A289 battery level below 15%. Maintenance team has been notified."
                    icon={<Info className="text-blue-500" />}
                  />
                  
                  <AlertItem 
                    title="Scheduled Maintenance Complete" 
                    location="Nairobi-Mombasa Smart Corridor, Kenya"
                    time="3 days ago"
                    type="system"
                    severity="info"
                    message="All scheduled sensor maintenance tasks have been completed successfully."
                    icon={<BellOff className="text-blue-500" />}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold font-heading mb-4">Alert Settings</h2>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <NotificationSetting 
                    title="Traffic Alerts"
                    description="Congestion, accidents, and pattern changes"
                    options={["Critical Only", "All Alerts", "None"]}
                    defaultValue="All Alerts"
                  />
                  
                  <NotificationSetting 
                    title="Investment Updates"
                    description="Funding goals, returns, and opportunities"
                    options={["Important Only", "All Updates", "None"]}
                    defaultValue="Important Only"
                  />
                  
                  <NotificationSetting 
                    title="System Notifications"
                    description="Maintenance, updates, and sensor status"
                    options={["Critical Only", "All Notifications", "None"]}
                    defaultValue="Critical Only"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

// Helper component for alert items
interface AlertItemProps {
  title: string;
  location: string;
  time: string;
  type: 'traffic' | 'investment' | 'system';
  severity: 'critical' | 'warning' | 'info' | 'success';
  message: string;
  icon: React.ReactNode;
}

const AlertItem = ({ title, location, time, type, severity, message, icon }: AlertItemProps) => {
  const getSeverityColor = () => {
    switch (severity) {
      case 'critical': return 'bg-red-50 border-red-200';
      case 'warning': return 'bg-amber-50 border-amber-200';
      case 'info': return 'bg-blue-50 border-blue-200';
      case 'success': return 'bg-green-50 border-green-200';
      default: return 'bg-muted border-border';
    }
  };
  
  const getTypeBadge = () => {
    switch (type) {
      case 'traffic': return <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200">Traffic</Badge>;
      case 'investment': return <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200">Investment</Badge>;
      case 'system': return <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">System</Badge>;
      default: return null;
    }
  };
  
  return (
    <Card className={`border-l-4 ${getSeverityColor()}`}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="mt-1">
            {icon}
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-muted-foreground">{location}</p>
              </div>
              <div className="flex gap-2 items-center">
                {getTypeBadge()}
                <span className="text-xs text-muted-foreground">{time}</span>
              </div>
            </div>
            
            <p className="mt-2 text-sm">{message}</p>
            
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline">View Details</Button>
              <Button size="sm" variant="ghost">Mark as Read</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper component for notification settings
interface NotificationSettingProps {
  title: string;
  description: string;
  options: string[];
  defaultValue: string;
}

const NotificationSetting = ({ title, description, options, defaultValue }: NotificationSettingProps) => {
  return (
    <div className="bg-muted/50 p-4 rounded-lg">
      <h3 className="font-medium">{title}</h3>
      <p className="text-xs text-muted-foreground mb-3">{description}</p>
      
      <select className="w-full p-2 text-sm rounded-md border border-input bg-background">
        {options.map(option => (
          <option key={option} selected={option === defaultValue}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Alerts;
