
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type SensorStatus = 'operational' | 'warning' | 'offline';

type SensorCardProps = {
  title: string;
  location: string;
  value: number;
  max: number;
  unit: string;
  status: SensorStatus;
  trend?: 'up' | 'down' | 'stable';
  change?: number;
};

const SensorCard = ({ 
  title, 
  location, 
  value, 
  max, 
  unit, 
  status,
  trend,
  change = 0
}: SensorCardProps) => {
  const getStatusColor = (status: SensorStatus) => {
    switch(status) {
      case 'operational': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'offline': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };
  
  const getTrendIcon = (trend?: 'up' | 'down' | 'stable') => {
    switch(trend) {
      case 'up': return <span className="text-green-500">▲</span>;
      case 'down': return <span className="text-red-500">▼</span>;
      case 'stable': return <span className="text-gray-500">•</span>;
      default: return null;
    }
  };
  
  const percentage = Math.round((value / max) * 100);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div className={`h-2 w-2 rounded-full ${getStatusColor(status)}`}></div>
        </div>
        <p className="text-xs text-muted-foreground">{location}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-baseline mb-2">
          <div className="text-2xl font-bold">{value.toLocaleString()}<span className="text-sm text-muted-foreground ml-1">{unit}</span></div>
          {trend && (
            <div className="flex items-center text-xs">
              {getTrendIcon(trend)}
              <span className={`ml-1 ${trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-500'}`}>
                {change}%
              </span>
            </div>
          )}
        </div>
        <Progress value={percentage} className="h-1.5" />
        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
          <span>0</span>
          <span>{max.toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SensorCard;
