import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, GraduationCap, Code, Briefcase, Award } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen gradient-animated py-12 px-6">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link to="/">
          <Button 
            variant="outline" 
            className="glass text-foreground border-2 hover:bg-background/60 rounded-full"
          >
            <Home className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 drop-shadow-lg">
          My <span className="text-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">Resume</span>
        </h1>
        <p className="text-xl text-foreground/80 font-medium">A snapshot of my journey and achievements</p>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Education */}
        <Card className="glass border-2 hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02]" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-background/50 rounded-xl border border-border/50">
              <h3 className="font-semibold text-lg mb-1">Computer Science and Engineering</h3>
              <p className="text-muted-foreground text-sm mb-2">Bapuji Institute of Engineering and Technology • 2023 - 2027</p>
              <p className="text-sm">CGPA: 7.40</p>
            </div>
            <div className="p-4 bg-background/50 rounded-xl border border-border/50">
              <h3 className="font-semibold text-lg mb-1">Pre University Education</h3>
              <p className="text-muted-foreground text-sm mb-2">Sri Taralabalu Jagadguru PU College • 2021 - 2023</p>
              <p className="text-sm">Percentage: 84.00%</p>
            </div>
            <div className="p-4 bg-background/50 rounded-xl border border-border/50">
              <h3 className="font-semibold text-lg mb-1">High School Education</h3>
              <p className="text-muted-foreground text-sm mb-2">Sri Taralabalu Jagadguru School • 2018 - 2021</p>
              <p className="text-sm">Percentage: 76.00%</p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="glass border-2 hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02]" style={{ animationDelay: "0.2s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Code className="w-6 h-6 text-accent" />
              </div>
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Python", "TailwindCSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Design Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Figma", "Adobe XD", "Illustration"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20 hover:bg-secondary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="glass border-2 hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02]" style={{ animationDelay: "0.3s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-background/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-lg mb-1"> Goal-Oriented Virtual Study Assistant</h3>
              <p className="text-muted-foreground text-sm mb-2">Full-stack Developer</p>
              <p className="text-sm">The Goal-Oriented Virtual Study Assistant is an AI-based academic companion that 
helps students plan, organize, and achieve their study goals efficiently. It combines 
intelligent goal-setting, adaptive scheduling, smart reminders, and concept explanations 
in  a  single  platform  built  using  Python  and  Streamlit.  The  system  generates 
personalized study plans, tracks progress, and provides adaptive recommendations to 
reduce procrastination and improve learning outcomes.</p>
            </div>
            <div className="p-4 bg-background/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-lg mb-1">Design System Library</h3>
              <p className="text-muted-foreground text-sm mb-2">Lead Designer</p>
              <p className="text-sm">Created comprehensive UI component library used across organization</p>
            </div>
            <div className="p-4 bg-background/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-lg mb-1">AI Chatbot Assistant</h3>
              <p className="text-muted-foreground text-sm mb-2">AI Developer</p>
              <p className="text-sm">Developed intelligent assistant using NLP and machine learning</p>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="glass border-2 hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02]" style={{ animationDelay: "0.4s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Award className="w-6 h-6 text-accent" />
              </div>
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-background/50 rounded-xl border border-border/50">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <p className="font-medium">Project Development</p>
                <p className="text-sm text-muted-foreground">Developed a full-stack Goal-Oriented Virtual Study Assistant and integrated it with a user-friendly web interface.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-background/50 rounded-xl border border-border/50">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
              <div>
                <p className="font-medium">IBM Hackathon 2025</p>
                <p className="text-sm text-muted-foreground">Finalist in the IBM Hackathon, recognized for strong problem-solving, teamwork, and technical implementation.</p>
              </div>
            </div>
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
