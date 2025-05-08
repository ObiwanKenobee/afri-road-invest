
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import InvestmentCard from '@/components/dashboard/InvestmentCard';
import { Progress } from '@/components/ui/progress';

const InvestmentPortal = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold font-heading mb-1">
              <span className="bg-clip-text text-transparent bg-gradient-afriflow">RoadX</span> Investment Portal
            </h1>
            <p className="text-muted-foreground">Decentralized infrastructure investment platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Your Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,850</div>
                <div className="text-xs text-green-500 flex items-center">
                  <span>↑</span>
                  <span className="ml-1">7.2% all time return</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <div className="text-xs text-muted-foreground flex items-center">
                  <span className="ml-1">Active investments</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Next Payout</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,240</div>
                <div className="text-xs text-afriflow-amber flex items-center">
                  <span className="ml-1">In 8 days</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-6">
            <Tabs defaultValue="available">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="available">Available Projects</TabsTrigger>
                  <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Filter</Button>
                  <Button className="bg-gradient-afriflow" size="sm">Create Project</Button>
                </div>
              </div>
              
              <TabsContent value="available" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <InvestmentCard 
                    title="Accra-Kumasi Highway Expansion" 
                    location="Ghana"
                    fundingGoal={5000000}
                    currentFunding={3200000}
                    investors={142}
                    returnRate={8.5}
                    timeRemaining="14 days"
                    imageUrl="https://images.unsplash.com/photo-1594818379496-da1e345d6a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
                  />
                  <InvestmentCard 
                    title="Lagos Smart Traffic Grid" 
                    location="Nigeria"
                    fundingGoal={2500000}
                    currentFunding={1800000}
                    investors={87}
                    returnRate={7.2}
                    timeRemaining="8 days"
                    imageUrl="https://images.unsplash.com/photo-1517296448929-759627a0e291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
                  />
                  <InvestmentCard 
                    title="Nairobi-Mombasa Smart Corridor" 
                    location="Kenya"
                    fundingGoal={3800000}
                    currentFunding={950000}
                    investors={42}
                    returnRate={9.1}
                    timeRemaining="21 days"
                    imageUrl="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
                  />
                  <InvestmentCard 
                    title="Addis Ababa Ring Road" 
                    location="Ethiopia"
                    fundingGoal={4200000}
                    currentFunding={820000}
                    investors={36}
                    returnRate={8.9}
                    timeRemaining="35 days"
                    imageUrl="https://images.unsplash.com/photo-1568989463088-8fcfaf716ca5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
                  />
                  <InvestmentCard 
                    title="Dakar Port Access Road" 
                    location="Senegal"
                    fundingGoal={2800000}
                    currentFunding={1200000}
                    investors={58}
                    returnRate={7.8}
                    timeRemaining="18 days"
                    imageUrl="https://images.unsplash.com/photo-1584792986640-fbc79a47be92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
                  />
                  <InvestmentCard 
                    title="Cairo Smart Traffic Sensors" 
                    location="Egypt"
                    fundingGoal={1800000}
                    currentFunding={760000}
                    investors={32}
                    returnRate={6.5}
                    timeRemaining="12 days"
                    imageUrl="https://images.unsplash.com/photo-1616038242814-a6eac7845d88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="portfolio" className="mt-0">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Your Investment Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Investment Distribution</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Lagos Smart Traffic Grid</span>
                                <span className="font-medium">$12,500 (50%)</span>
                              </div>
                              <Progress value={50} className="h-1.5" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Accra-Kumasi Highway</span>
                                <span className="font-medium">$7,350 (30%)</span>
                              </div>
                              <Progress value={30} className="h-1.5" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Nairobi-Mombasa Smart Corridor</span>
                                <span className="font-medium">$5,000 (20%)</span>
                              </div>
                              <Progress value={20} className="h-1.5" />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium mb-2">Investment Performance</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between py-2 border-b">
                              <span>Total Invested</span>
                              <span className="font-medium">$24,850</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span>Current Value</span>
                              <span className="font-medium">$26,640</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span>Total Return</span>
                              <span className="font-medium text-green-500">+$1,790 (7.2%)</span>
                            </div>
                            <div className="flex justify-between py-2">
                              <span>Annual Projected Return</span>
                              <span className="font-medium text-afriflow-amber">8.5% APY</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <h2 className="text-xl font-bold font-heading mb-4">Your Investments</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Lagos Smart Traffic Grid</CardTitle>
                      <p className="text-xs text-muted-foreground">Nigeria</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Funding Progress</span>
                            <span className="font-medium">72%</span>
                          </div>
                          <Progress value={72} className="h-1.5" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-muted-foreground text-xs">Your Investment</p>
                            <p className="font-medium">$12,500</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs">Current Value</p>
                            <p className="font-medium">$13,250</p>
                          </div>
                        </div>
                        <div className="bg-green-50 text-green-700 p-2 rounded-md text-xs">
                          Return: +$750 (6.0%)
                        </div>
                        <Button size="sm" variant="outline" className="w-full">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Accra-Kumasi Highway</CardTitle>
                      <p className="text-xs text-muted-foreground">Ghana</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Funding Progress</span>
                            <span className="font-medium">64%</span>
                          </div>
                          <Progress value={64} className="h-1.5" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-muted-foreground text-xs">Your Investment</p>
                            <p className="font-medium">$7,350</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs">Current Value</p>
                            <p className="font-medium">$7,940</p>
                          </div>
                        </div>
                        <div className="bg-green-50 text-green-700 p-2 rounded-md text-xs">
                          Return: +$590 (8.0%)
                        </div>
                        <Button size="sm" variant="outline" className="w-full">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Nairobi-Mombasa Smart Corridor</CardTitle>
                      <p className="text-xs text-muted-foreground">Kenya</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Funding Progress</span>
                            <span className="font-medium">25%</span>
                          </div>
                          <Progress value={25} className="h-1.5" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-muted-foreground text-xs">Your Investment</p>
                            <p className="font-medium">$5,000</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs">Current Value</p>
                            <p className="font-medium">$5,450</p>
                          </div>
                        </div>
                        <div className="bg-green-50 text-green-700 p-2 rounded-md text-xs">
                          Return: +$450 (9.0%)
                        </div>
                        <Button size="sm" variant="outline" className="w-full">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="completed" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Completed Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      Your completed investments will appear here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InvestmentPortal;
