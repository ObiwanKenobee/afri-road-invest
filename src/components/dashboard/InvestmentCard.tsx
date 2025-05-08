
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

type InvestmentCardProps = {
  title: string;
  location: string;
  fundingGoal: number;
  currentFunding: number;
  investors: number;
  returnRate: number;
  timeRemaining: string;
  imageUrl?: string;
};

const InvestmentCard = ({
  title,
  location,
  fundingGoal,
  currentFunding,
  investors,
  returnRate,
  timeRemaining,
  imageUrl
}: InvestmentCardProps) => {
  const fundingPercentage = Math.min(Math.round((currentFunding / fundingGoal) * 100), 100);

  return (
    <Card className="overflow-hidden">
      {imageUrl && (
        <div className="h-40 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{location}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span className="font-medium">{fundingPercentage}%</span>
            </div>
            <Progress value={fundingPercentage} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Funding Goal</p>
              <p className="font-medium">${fundingGoal.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Current Funding</p>
              <p className="font-medium">${currentFunding.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Expected Return</p>
              <p className="font-medium text-afriflow-amber">{returnRate}% APY</p>
            </div>
            <div>
              <p className="text-muted-foreground">Investors</p>
              <p className="font-medium">{investors}</p>
            </div>
          </div>
          
          <div className="bg-muted/50 px-3 py-2 rounded-md text-xs flex justify-between items-center">
            <span>Funding closes in:</span>
            <span className="font-medium">{timeRemaining}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full bg-gradient-afriflow">Invest Now</Button>
      </CardFooter>
    </Card>
  );
};

export default InvestmentCard;
