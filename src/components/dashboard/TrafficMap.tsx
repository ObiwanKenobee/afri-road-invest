
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TrafficMap = () => {
  return (
    <Card className="col-span-2 h-[400px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Live Traffic Map</CardTitle>
      </CardHeader>
      <CardContent className="p-0 overflow-hidden rounded-b-lg">
        {/* Map placeholder */}
        <div className="relative h-full bg-muted/30 flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/30.5595,6.1325,4,0/800x400?access_token=pk.placeholder')] opacity-70"></div>
          
          {/* Traffic Hotspots */}
          <div className="absolute left-[30%] top-[40%] w-4 h-4 bg-red-500 rounded-full opacity-70 animate-pulse-slow"></div>
          <div className="absolute left-[50%] top-[60%] w-3 h-3 bg-yellow-500 rounded-full opacity-70 animate-pulse-slow"></div>
          <div className="absolute left-[70%] top-[30%] w-5 h-5 bg-red-600 rounded-full opacity-70 animate-pulse-slow"></div>
          
          <div className="relative text-center bg-background/50 backdrop-blur-sm p-4 rounded-md max-w-md">
            <p className="text-foreground font-medium">Interactive map available in full version</p>
            <p className="text-xs text-muted-foreground mt-1">
              Shows real-time traffic data from sensors, road conditions, and investment zones
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficMap;
