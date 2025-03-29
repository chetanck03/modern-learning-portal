
import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { PageHeader } from "@/components/ui/page-header";
import { ActivityItem } from "@/components/ui/activity-item";
import { Card, CardContent } from "@/components/ui/card";

// Mock data
const activities = [
  {
    id: "1",
    user: {
      name: "Jordan Smith",
      avatar: "/placeholder.svg"
    },
    action: "joined",
    target: {
      type: 'club' as const,  // Using 'as const' to ensure this is the literal type 'club'
      name: "Coding Society",
      id: "2"
    },
    timestamp: new Date(new Date().setHours(new Date().getHours() - 2))
  },
  {
    id: "2",
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg"
    },
    action: "is attending",
    target: {
      type: 'event' as const,  // Using 'as const' to ensure this is the literal type 'event'
      name: "Campus Tech Fair",
      id: "1"
    },
    timestamp: new Date(new Date().setHours(new Date().getHours() - 5))
  },
  {
    id: "3",
    user: {
      name: "Sam Williams",
      avatar: "/placeholder.svg"
    },
    action: "posted in",
    target: {
      type: 'club' as const,  // Using 'as const' to ensure this is the literal type 'club'
      name: "Photography Club",
      id: "1"
    },
    timestamp: new Date(new Date().setHours(new Date().getHours() - 8))
  },
  {
    id: "4",
    user: {
      name: "Taylor Garcia",
      avatar: "/placeholder.svg"
    },
    action: "created",
    target: {
      type: 'event' as const,  // Using 'as const' to ensure this is the literal type 'event'
      name: "Film Screening Night",
      id: "4"
    },
    timestamp: new Date(new Date().setHours(new Date().getHours() - 10))
  },
  {
    id: "5",
    user: {
      name: "Jordan Smith",
      avatar: "/placeholder.svg"
    },
    action: "commented on",
    target: {
      type: 'event' as const,  // Using 'as const' to ensure this is the literal type 'event'
      name: "Spring Music Festival",
      id: "2"
    },
    timestamp: new Date(new Date().setDate(new Date().getDate() - 1))
  },
  {
    id: "6",
    user: {
      name: "Avery Martinez",
      avatar: "/placeholder.svg"
    },
    action: "joined",
    target: {
      type: 'club' as const,  // Using 'as const' to ensure this is the literal type 'club'
      name: "Environmental Club",
      id: "5"
    },
    timestamp: new Date(new Date().setDate(new Date().getDate() - 1))
  },
  {
    id: "7",
    user: {
      name: "Riley Wilson",
      avatar: "/placeholder.svg"
    },
    action: "is attending",
    target: {
      type: 'event' as const,  // Using 'as const' to ensure this is the literal type 'event'
      name: "Career Workshop",
      id: "3"
    },
    timestamp: new Date(new Date().setDate(new Date().getDate() - 2))
  }
];

const Timeline = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Your Timeline" 
        description="Stay updated with activities from your campus community"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-1">
              <Filter size={16} /> Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Activity Type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>All Activities</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Club Related</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Event Related</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Comments & Posts</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Time Period</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>All Time</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Today</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>This Week</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>This Month</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </PageHeader>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Activity</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="my-activity">My Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-1">
                {activities.map((activity) => (
                  <ActivityItem key={activity.id} {...activity} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="following" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-1">
                {activities.slice(1, 5).map((activity) => (
                  <ActivityItem key={activity.id} {...activity} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="my-activity" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-1">
                {activities.filter(a => a.user.name === "Jordan Smith").map((activity) => (
                  <ActivityItem key={activity.id} {...activity} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Timeline;
