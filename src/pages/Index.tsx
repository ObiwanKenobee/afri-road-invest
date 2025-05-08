
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import TrafficMap from '@/components/dashboard/TrafficMap';
import SensorCard from '@/components/dashboard/SensorCard';
import InvestmentCard from '@/components/dashboard/InvestmentCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold font-heading mb-1">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-afriflow">AfriFlow + RoadX</span>
            </h1>
            <p className="text-muted-foreground">Smart traffic management & infrastructure investment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Traffic Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48,392</div>
                <div className="text-xs text-green-500 flex items-center">
                  <span>↑</span>
                  <span className="ml-1">12.3% from yesterday</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Sensors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142 <span className="text-sm text-muted-foreground">/ 150</span></div>
                <div className="text-xs text-yellow-500 flex items-center">
                  <span>↓</span>
                  <span className="ml-1">3 sensors offline</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Investment Pool</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2.4M</div>
                <div className="text-xs text-green-500 flex items-center">
                  <span>↑</span>
                  <span className="ml-1">$320K this month</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <TrafficMap />
            <div className="space-y-4">
              <SensorCard 
                title="Highway A1 - North" 
                location="Lagos Expressway"
                value={2580} 
                max={5000} 
                unit="veh/hr" 
                status="operational"
                trend="up"
                change={8} 
              />
              <SensorCard 
                title="Central District" 
                location="Business District" 
                value={1840} 
                max={3000} 
                unit="veh/hr" 
                status="warning"
                trend="stable"
                change={0} 
              />
              <SensorCard 
                title="East-West Connector" 
                location="Residential Area" 
                value={980} 
                max={2000} 
                unit="veh/hr" 
                status="offline"
                trend="down"
                change={-12} 
              />
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold font-heading">Investment Opportunities</h2>
              <Tabs defaultValue="featured">
                <TabsList>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
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
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
