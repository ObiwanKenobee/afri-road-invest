
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { MessageSquare, User } from 'lucide-react';

const Community = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold font-heading mb-1">Community</h1>
            <p className="text-muted-foreground">Connect with traffic experts and infrastructure investors</p>
          </div>
          
          <div className="mb-6">
            <Tabs defaultValue="discussions">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="discussions">Discussions</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="members">Members</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                </TabsList>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Filter</Button>
                  <Button size="sm">New Post</Button>
                </div>
              </div>
              
              <TabsContent value="discussions" className="mt-0">
                <div className="space-y-4">
                  {[
                    {
                      title: "Smart Traffic Solutions for Lagos",
                      author: "Emmanuel Okonkwo",
                      avatar: "EO",
                      category: "Traffic Management",
                      replies: 24,
                      views: 189,
                      time: "2 hours ago",
                      excerpt: "I've been analyzing the traffic data from Lagos CBD and I believe we can reduce congestion by 35% with simple light timing changes..."
                    },
                    {
                      title: "Funding Strategy for Rural Roads",
                      author: "Amina Mohamed",
                      avatar: "AM",
                      category: "Investment",
                      replies: 18,
                      views: 142,
                      time: "Yesterday",
                      excerpt: "Rural infrastructure is often overlooked but provides essential value. Here's how we're structuring community bonds for the eastern corridor..."
                    },
                    {
                      title: "Sensor Deployment Best Practices",
                      author: "Kwame Nkrumah",
                      avatar: "KN",
                      category: "Technology",
                      replies: 32,
                      views: 276,
                      time: "3 days ago",
                      excerpt: "After deploying 200+ sensors across Ghana, I'd like to share some lessons learned about positioning, maintenance, and calibration..."
                    }
                  ].map((discussion, index) => (
                    <DiscussionCard key={index} {...discussion} />
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">Load More Discussions</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="projects" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Nairobi Smart Traffic Initiative",
                      members: 28,
                      discussions: 42,
                      category: "Traffic Planning",
                      lastActive: "Active today"
                    },
                    {
                      title: "West Africa Investment Coalition",
                      members: 56,
                      discussions: 87,
                      category: "Infrastructure Finance",
                      lastActive: "Active yesterday"
                    },
                    {
                      title: "Rural Roads Renovation",
                      members: 19,
                      discussions: 24,
                      category: "Construction",
                      lastActive: "Active 2 days ago"
                    },
                    {
                      title: "Sensor Technology Innovation",
                      members: 34,
                      discussions: 51,
                      category: "Technology",
                      lastActive: "Active today"
                    },
                    {
                      title: "Urban Planning Committee",
                      members: 42,
                      discussions: 36,
                      category: "Policy",
                      lastActive: "Active 5 days ago"
                    },
                    {
                      title: "Sustainable Infrastructure Group",
                      members: 23,
                      discussions: 19,
                      category: "Sustainability",
                      lastActive: "Active yesterday"
                    }
                  ].map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="members" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    {
                      name: "Emmanuel Okonkwo",
                      role: "Traffic Engineer",
                      location: "Lagos, Nigeria",
                      contributions: 87,
                      joinDate: "Member since Jan 2023"
                    },
                    {
                      name: "Amina Mohamed",
                      role: "Infrastructure Investor",
                      location: "Nairobi, Kenya",
                      contributions: 54,
                      joinDate: "Member since Mar 2023"
                    },
                    {
                      name: "Kwame Nkrumah",
                      role: "IoT Specialist",
                      location: "Accra, Ghana",
                      contributions: 112,
                      joinDate: "Member since Nov 2022"
                    },
                    {
                      name: "Fatima Diallo",
                      role: "Urban Planner",
                      location: "Dakar, Senegal",
                      contributions: 43,
                      joinDate: "Member since Apr 2023"
                    },
                    {
                      name: "Ahmed Hassan",
                      role: "Civil Engineer",
                      location: "Cairo, Egypt",
                      contributions: 29,
                      joinDate: "Member since Jun 2023"
                    },
                    {
                      name: "Zainab Kone",
                      role: "Data Scientist",
                      location: "Abidjan, Ivory Coast",
                      contributions: 76,
                      joinDate: "Member since Feb 2023"
                    },
                    {
                      name: "Daniel Mensah",
                      role: "Government Liaison",
                      location: "Kumasi, Ghana",
                      contributions: 32,
                      joinDate: "Member since May 2023"
                    },
                    {
                      name: "Grace Mwangi",
                      role: "Community Manager",
                      location: "Mombasa, Kenya",
                      contributions: 98,
                      joinDate: "Member since Oct 2022"
                    }
                  ].map((member, index) => (
                    <MemberCard key={index} {...member} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="events" className="mt-0">
                <div className="space-y-4">
                  {[
                    {
                      title: "African Infrastructure Summit",
                      date: "August 15-17, 2023",
                      location: "Kigali Convention Center, Rwanda",
                      attendees: 342,
                      type: "Conference",
                      description: "Annual conference bringing together infrastructure experts, investors, and government officials from across Africa."
                    },
                    {
                      title: "Smart Traffic Workshop",
                      date: "September 5, 2023",
                      location: "Lagos Business School, Nigeria",
                      attendees: 85,
                      type: "Workshop",
                      description: "Hands-on workshop for traffic engineers and urban planners focused on implementing smart traffic systems."
                    },
                    {
                      title: "Investment Roundtable",
                      date: "September 23, 2023",
                      location: "Radisson Blue, Nairobi, Kenya",
                      attendees: 64,
                      type: "Networking",
                      description: "Exclusive networking event connecting infrastructure investors with project developers across East Africa."
                    }
                  ].map((event, index) => (
                    <EventCard key={index} {...event} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

// Helper component for discussion cards
interface DiscussionCardProps {
  title: string;
  author: string;
  avatar: string;
  category: string;
  replies: number;
  views: number;
  time: string;
  excerpt: string;
}

const DiscussionCard = ({ title, author, avatar, category, replies, views, time, excerpt }: DiscussionCardProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="h-10 w-10 rounded-full bg-afriflow-blue flex items-center justify-center text-white font-medium">
            {avatar}
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-xs text-muted-foreground">
                  Posted by {author} · {time}
                </p>
              </div>
              
              <div className="bg-muted/50 px-2 py-1 rounded text-xs">
                {category}
              </div>
            </div>
            
            <p className="text-sm mt-2">{excerpt}</p>
            
            <div className="mt-3 flex justify-between items-center">
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MessageSquare size={14} />
                  {replies} replies
                </span>
                <span>{views} views</span>
              </div>
              
              <Button size="sm" variant="ghost">Read More</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper component for project cards
interface ProjectCardProps {
  title: string;
  members: number;
  discussions: number;
  category: string;
  lastActive: string;
}

const ProjectCard = ({ title, members, discussions, category, lastActive }: ProjectCardProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="mb-2 flex justify-between items-start">
          <h3 className="font-medium">{title}</h3>
          <div className="bg-muted/50 px-2 py-1 rounded text-xs">
            {category}
          </div>
        </div>
        
        <div className="flex gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Members:</span> {members}
          </div>
          <div>
            <span className="text-muted-foreground">Discussions:</span> {discussions}
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="text-xs text-green-600">{lastActive}</div>
          <Button size="sm" variant="ghost">View Project</Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper component for member cards
interface MemberCardProps {
  name: string;
  role: string;
  location: string;
  contributions: number;
  joinDate: string;
}

const MemberCard = ({ name, role, location, contributions, joinDate }: MemberCardProps) => {
  return (
    <Card>
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full bg-afriflow-blue flex items-center justify-center text-white mb-3">
          <User size={24} />
        </div>
        
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-afriflow-amber">{role}</p>
        <p className="text-xs text-muted-foreground">{location}</p>
        
        <div className="mt-2 mb-3 w-full h-1 bg-muted">
          <div 
            className="h-full bg-gradient-to-r from-afriflow-amber to-afriflow-green" 
            style={{ width: `${Math.min(100, contributions / 1.5)}%` }}
          />
        </div>
        
        <div className="text-xs text-muted-foreground mb-2">{contributions} contributions</div>
        <div className="text-xs text-muted-foreground">{joinDate}</div>
        
        <Button size="sm" variant="ghost" className="mt-3">View Profile</Button>
      </CardContent>
    </Card>
  );
};

// Helper component for event cards
interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  type: string;
  description: string;
}

const EventCard = ({ title, date, location, attendees, type, description }: EventCardProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-xs text-afriflow-amber font-medium">{date}</p>
            <p className="text-xs text-muted-foreground">{location}</p>
          </div>
          
          <div className="bg-muted/50 px-2 py-1 rounded text-xs">
            {type}
          </div>
        </div>
        
        <p className="text-sm mt-2">{description}</p>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="text-xs">
            <span className="text-muted-foreground">Attendees:</span> {attendees}
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline">More Info</Button>
            <Button size="sm">Register</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Community;
