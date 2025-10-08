import { CheckCircle2, Calendar, Zap, Database, Bell, DollarSign } from "lucide-react";

const Impact = () => {
  const milestones = [
    { title: "U-TAE Model Trained", completed: true },
    { title: "Subtle Degradation Map (MVP)", completed: true },
    { title: "Autonomous Alert Platform", completed: false, timeline: "Next 6 months" }
  ];

  const roadmapItems = [
    { 
      icon: CheckCircle2, 
      text: "Validate final model IoU with Ground Truth", 
      lead: "Cristhian" 
    },
    { 
      icon: Zap, 
      text: "Optimize GEE Pipeline to API for scalability", 
      lead: "Diego/Irwin" 
    },
    { 
      icon: Bell, 
      text: "Integrate email/SMS notification system for alerts", 
      lead: "Backend" 
    },
    { 
      icon: DollarSign, 
      text: "Secure funding for Field Validation", 
      lead: "Edú" 
    }
  ];

  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          <span className="text-foreground">The Impact in</span>
          <br />
          <span className="text-primary">14 Hours and Our Roadmap</span>
        </h2>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary -translate-y-1/2 hidden md:block"></div>
            
            {/* Milestones */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    milestone.completed 
                      ? 'bg-secondary text-secondary-foreground shadow-lg shadow-secondary/30' 
                      : 'bg-card border-2 border-primary text-primary'
                  }`}>
                    {milestone.completed ? (
                      <CheckCircle2 className="w-8 h-8" />
                    ) : (
                      <Calendar className="w-8 h-8" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                  {milestone.timeline && (
                    <p className="text-sm text-primary font-semibold">{milestone.timeline}</p>
                  )}
                  {milestone.completed && (
                    <p className="text-sm text-secondary font-semibold">✓ Completed</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Next Steps
          </h3>
          <div className="grid gap-6">
            {roadmapItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold text-lg mb-1">{item.text}</p>
                    <p className="text-muted-foreground text-sm">Lead: <span className="text-primary">{item.lead}</span></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Co-creation Success Box */}
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl border-2 border-secondary/30 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Database className="w-8 h-8 text-secondary-foreground" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">High-Performance Execution</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This MVP was made possible thanks to the <span className="text-secondary font-semibold">parallel and efficient execution</span> of 
                our team of 6 experts, who managed to integrate Data Science (SAR/U-TAE) in just <span className="text-primary font-semibold">14 hours</span>.
              </p>
            </div>
          </div>
        </div>

        {/* MVP Demo Placeholder */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="aspect-video bg-card rounded-2xl border-2 border-primary/30 overflow-hidden shadow-2xl shadow-primary/10 flex items-center justify-center">
            <div className="text-center p-8">
              <Database className="w-24 h-24 text-primary mx-auto mb-6 opacity-50" />
              <h3 className="text-3xl font-bold text-foreground mb-4">Forest Degradation Map</h3>
              <p className="text-xl text-muted-foreground">
                Interactive MVP visualization in development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
