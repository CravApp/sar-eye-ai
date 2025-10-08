import { Cloud, CloudOff, AlertTriangle } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          <span className="text-foreground">Cloud Cover, Subtle Logging and the Failure of</span>
          <br />
          <span className="text-primary">Optical Monitoring</span>
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            80% of the Madre de Dios Amazon is under cloud cover that renders optical data (Landsat/Sentinel-2) useless. 
            Traditional deforestation has been replaced by <span className="text-primary font-semibold">selective logging and subtle degradation</span>, 
            imperceptible to the naked eye, creating a critical monitoring gap.
          </p>
        </div>

        {/* Highlighted Quote */}
        <div className="max-w-3xl mx-auto mb-20 p-8 bg-card border-2 border-primary/30 rounded-2xl shadow-lg shadow-primary/10">
          <blockquote className="text-2xl md:text-3xl font-bold text-center text-foreground italic">
            "Monitoring subtle forest degradation with optical data is like trying to drive blindfolded."
          </blockquote>
        </div>

        {/* Comparison Icons */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Optical Monitoring - Blocked */}
          <div className="text-center p-8 bg-card rounded-2xl border border-border hover:border-destructive/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-destructive/10 rounded-full">
              <Cloud className="w-12 h-12 text-destructive" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-destructive">Optical Monitoring</h3>
            <p className="text-muted-foreground text-lg">
              Blocked by clouds 80% of the time. Unable to detect subtle sub-canopy degradation.
            </p>
          </div>

          {/* SAR Monitoring - Clear Vision */}
          <div className="text-center p-8 bg-card rounded-2xl border-2 border-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-primary/10 rounded-full animate-pulse-glow">
              <CloudOff className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">SAR Vision</h3>
            <p className="text-muted-foreground text-lg">
              Penetrates clouds 24/7. Detects subtle changes in forest structure at pixel level.
            </p>
          </div>
        </div>

        {/* Alert Illustration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-destructive/10 border-2 border-destructive/30 rounded-2xl">
            <AlertTriangle className="w-10 h-10 text-destructive" />
            <p className="text-xl font-semibold text-foreground">
              Selective logging: The invisible threat
            </p>
          </div>
        </div>

        {/* CTA to Solution */}
        <div className="mt-20 text-center">
          <button 
            onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary text-xl font-bold uppercase tracking-wider hover:text-accent transition-colors duration-300 flex items-center gap-2 mx-auto group"
          >
            Our Solution: SAR + U-Net
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;
