import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Briefcase,
  FileText,
  TrendingUp,
  Video,
  Plus,
  Search,
  Filter,
  MapPin,
  Clock,
  Building,
  Users,
  Award,
  Play,
  CheckCircle,
  Calendar,
  Eye
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const jobsData = [
  { title: "Senior Frontend Developer", company: "TechCorp", location: "San Francisco", type: "Full-time", salary: "$120k-150k", posted: "2 days ago" },
  { title: "Product Manager", company: "StartupXYZ", location: "Remote", type: "Full-time", salary: "$110k-140k", posted: "1 week ago" },
  { title: "Data Scientist", company: "AI Solutions", location: "New York", type: "Contract", salary: "$95k-125k", posted: "3 days ago" }
];

const applicationStats = [
  { status: "Applied", count: 12, color: "bg-blue-500" },
  { status: "In Review", count: 5, color: "bg-yellow-500" },
  { status: "Interview", count: 3, color: "bg-green-500" },
  { status: "Offer", count: 1, color: "bg-purple-500" }
];

const successStories = [
  { name: "Sarah Chen", role: "VP of Engineering at Meta", year: "2019", story: "From junior developer to VP in 5 years" },
  { name: "Michael Rodriguez", role: "Founder of GreenTech", year: "2020", story: "Built a $50M sustainable technology company" },
  { name: "Dr. Priya Patel", role: "Chief Medical Officer", year: "2018", story: "Leading healthcare innovation at top hospital" }
];

const webinarsData = [
  { title: "AI in Career Development", speaker: "Dr. Alex Johnson", date: "Dec 20, 2024", attendees: 250, duration: "1 hour" },
  { title: "Negotiating Your Dream Job", speaker: "Sarah Williams", date: "Jan 15, 2025", attendees: 180, duration: "45 mins" },
  { title: "Building Your Personal Brand", speaker: "Mark Thompson", date: "Jan 28, 2025", attendees: 320, duration: "1.5 hours" }
];

export default function CareerPortal() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Career Portal
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Accelerate your career with exclusive opportunities, expert guidance, and 
            the power of our alumni network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
              onClick={() => navigate("/job-board")}
            >
              Browse Jobs
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/success-stories")}
            >
              Read Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Career Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Career Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to accelerate your career journey and achieve your professional goals.
            </p>
          </div>
          
          <Tabs defaultValue="jobs" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="jobs">Job Board</TabsTrigger>
              <TabsTrigger value="applications">My Applications</TabsTrigger>
              <TabsTrigger value="stories">Success Stories</TabsTrigger>
              <TabsTrigger value="webinars">Webinars</TabsTrigger>
            </TabsList>

            <TabsContent value="jobs" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2" />
                      Job Opportunities
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Post Job
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Exclusive opportunities from alumni-led companies and partners
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobsData.map((job, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                        <div className="flex-1">
                          <h4 className="font-medium">{job.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center"><Building className="h-3 w-3 mr-1" />{job.company}</span>
                            <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" />{job.location}</span>
                            <span className="flex items-center"><Clock className="h-3 w-3 mr-1" />{job.posted}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-primary">{job.salary}</div>
                          <Badge variant="secondary" className="mt-1">{job.type}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Application Tracking
                  </CardTitle>
                  <CardDescription>
                    Track your job applications and interview schedules
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    {applicationStats.map((stat, index) => (
                      <div key={index} className="text-center p-4 border rounded-lg">
                        <div className={`w-3 h-3 ${stat.color} rounded-full mx-auto mb-2`}></div>
                        <div className="text-2xl font-bold">{stat.count}</div>
                        <div className="text-sm text-muted-foreground">{stat.status}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Senior Frontend Developer - TechCorp</h4>
                        <p className="text-sm text-muted-foreground">Applied 3 days ago</p>
                      </div>
                      <Badge className="bg-green-500">Interview Scheduled</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Product Manager - StartupXYZ</h4>
                        <p className="text-sm text-muted-foreground">Applied 1 week ago</p>
                      </div>
                      <Badge variant="secondary">In Review</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stories" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Success Stories
                  </CardTitle>
                  <CardDescription>
                    Get inspired by fellow alumni achievements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {successStories.map((story, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-muted/50">
                        <Award className="h-8 w-8 text-primary mt-1" />
                        <div className="flex-1">
                          <h4 className="font-medium">{story.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{story.role} • Class of {story.year}</p>
                          <p className="text-sm">{story.story}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="webinars" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Video className="h-5 w-5 mr-2" />
                    Career Webinars
                  </CardTitle>
                  <CardDescription>
                    Join live sessions on career development and industry trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {webinarsData.map((webinar, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                        <div className="flex items-start space-x-4">
                          <Play className="h-8 w-8 text-primary mt-1" />
                          <div>
                            <h4 className="font-medium">{webinar.title}</h4>
                            <p className="text-sm text-muted-foreground">by {webinar.speaker}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                              <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" />{webinar.date}</span>
                              <span className="flex items-center"><Clock className="h-3 w-3 mr-1" />{webinar.duration}</span>
                              <span className="flex items-center"><Users className="h-3 w-3 mr-1" />{webinar.attendees} registered</span>
                            </div>
                          </div>
                        </div>
                        <Button>Join Session</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
            <p className="text-muted-foreground">
              More tools and resources to support your professional journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Networking Events</h3>
              <p className="text-sm text-muted-foreground">
                Connect with alumni at exclusive networking events and career fairs.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Resume Review</h3>
              <p className="text-sm text-muted-foreground">
                Get your resume reviewed by industry professionals and career experts.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <Video className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Interview Prep</h3>
              <p className="text-sm text-muted-foreground">
                Practice interviews with alumni and get valuable feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}