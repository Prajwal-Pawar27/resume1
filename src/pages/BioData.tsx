import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const BioData = () => {
  const bioInfo = [
    { label: "Full Name", value: "Sachin M.H" },
    { label: "Date of Birth", value: "April 26, 2005" },
    { label: "Nationality", value: "Indian" },
    { label: "Gender", value: "Male" },
    { label: "Languages", value: "English, Kannada, Hindi" },
    { label: "Email", value: "sachinmh23@gmail.com" },
    { label: "Phone", value: "+91 935399612" },
    { label: "Address", value: "#2036/33 1st cross Taralabalu badavane, Behind vani rice mill, Hadadi road, Davangere" },    
    { label: "Hobbies", value: "Photography, Traveling, Coding, Design" },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/sachin-mh-582a90391/" },
    
  ];

  return (
    <div className="min-h-screen gradient-animated py-12 px-6">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-8">
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
      <div className="max-w-4xl mx-auto mb-12 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          Bio <span className="text-gradient">Data</span>
        </h1>
        <p className="text-xl text-foreground/70">Personal information at a glance</p>
      </div>

      {/* Bio Data Table */}
      <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="glass rounded-2xl overflow-hidden shadow-2xl border-2">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {bioInfo.map((item, index) => (
                  <tr
                    key={item.label}
                    className="border-b border-border/30 hover:bg-background/30 transition-colors duration-300 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <td className="px-6 py-5 font-semibold text-foreground w-1/3 bg-muted/20">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.label}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-foreground/80">
                      {item.label === "LinkedIn" ? (
                        <a
                          href={item.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="glass rounded-2xl p-6 border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              Professional Summary
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Passionate creative professional with expertise in design and development. 
              Committed to crafting exceptional digital experiences that blend aesthetics 
              with functionality.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-6 border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full" />
              Career Goals
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Aspiring to lead innovative projects that push the boundaries of web technology 
              while mentoring the next generation of creative technologists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;
