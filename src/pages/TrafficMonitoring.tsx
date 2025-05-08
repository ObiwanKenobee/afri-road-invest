
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const TrafficMonitoring = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold font-heading mb-1">Traffic Monitoring</h1>
            <p className="text-muted-foreground">Real-time traffic data and analytics</p>
          </div>
          
          <div className="mb-6">
            <Tabs defaultValue="live">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="live">Live Data</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Export</Button>
                  <Button variant="outline" size="sm">Filter</Button>
                </div>
              </div>
              
              <TabsContent value="live" className="mt-0">
                <div className="bg-muted/30 rounded-lg h-[400px] mb-6 flex items-center justify-center">
                  <div className="text-center max-w-md">
                    <p className="text-lg font-medium mb-2">Interactive Traffic Map</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      View real-time traffic data, congestion points, and sensor statuses across the network.
                    </p>
                    <Button>View Full Map</Button>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold font-heading mb-4">Critical Traffic Points</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Critical Point Cards */}
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          {i === 1 ? 'Westlands Interchange' : i === 2 ? 'Central Business District' : 'Eastern Bypass'}
                        </CardTitle>
                        <div className="text-xs text-muted-foreground">
                          {i === 1 ? 'Nairobi, Kenya' : i === 2 ? 'Lagos, Nigeria' : 'Accra, Ghana'}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-bold">
                              {i === 1 ? '89%' : i === 2 ? '76%' : '92%'}
                            </div>
                            <div className="text-xs text-muted-foreground">Congestion Level</div>
                          </div>
                          
                          <div className={`h-16 w-16 rounded-full flex items-center justify-center text-white ${
                            i === 1 ? 'bg-red-500' : i === 2 ? 'bg-orange-500' : 'bg-red-600'
                          }`}>
                            <div className="text-lg font-bold">
                              {i === 1 ? '+12%' : i === 2 ? '+8%' : '+15%'}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 bg-muted/50 p-2 rounded-md flex justify-between text-xs">
                          <span>Est. Clearing Time:</span>
                          <span className="font-medium">
                            {i === 1 ? '45 mins' : i === 2 ? '30 mins' : '60 mins'}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Analytics Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      Analytics section available in the full version
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      Reports section available in the full version
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold font-heading mb-4">Traffic Trends</h2>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">24-Hour Traffic Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                  <div className="text-center max-w-md">
                    <p className="text-sm text-muted-foreground mb-4">
                      Interactive traffic trend visualization available in the full version
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {['Morning Peak', 'Midday', 'Evening Peak', 'Night'].map((period) => (
                    <div key={period} className="text-center">
                      <div className="text-sm font-medium">{period}</div>
                      <div className="text-lg font-bold mt-1">
                        {period === 'Morning Peak' ? '18,342' : 
                         period === 'Midday' ? '12,845' : 
                         period === 'Evening Peak' ? '19,723' : '5,482'} 
                      </div>
                      <div className={`text-xs mt-1 ${
                        period === 'Morning Peak' || period === 'Evening Peak' ? 'text-red-500' : 'text-green-500'
                      }`}>
                        {period === 'Morning Peak' ? '↑ 8.3%' : 
                         period === 'Midday' ? '↓ 2.1%' : 
                         period === 'Evening Peak' ? '↑ 12.7%' : '↓ 3.5%'}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TrafficMonitoring;
