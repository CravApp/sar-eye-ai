import { Satellite, Brain, TrendingUp } from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
          <span className="text-foreground">SAR Insights Architecture:</span>
          <br />
          <span className="text-primary">Fusion of Radar and Deep Learning</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-5xl mx-auto mb-20">
          We developed an intelligent pipeline in <span className="text-primary font-semibold">Google Earth Engine (GEE)</span> and Python. 
          The Sentinel-1 time series (VV and VH) feeds the <span className="text-accent font-semibold">CuSum</span> algorithm to 
          isolate rapid change (R<sub>sum_max</sub>), which is then segmented by our <span className="text-accent font-semibold">CNN (U-TAE)</span> to 
          classify degradation with pixel-level precision.
        </p>

        {/* Architecture Flow Diagram */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-background rounded-2xl border-2 border-primary/30">
            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-xl mb-4">
                <Satellite className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Sentinel-1 SAR</h3>
            </div>

            <div className="text-4xl text-primary font-bold">→</div>

            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-xl mb-4">
                <TrendingUp className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent">CuSum (R<sub>sum_max</sub>)</h3>
            </div>

            <div className="text-4xl text-primary font-bold">→</div>

            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-xl mb-4">
                <Brain className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent">U-TAE (U-Net)</h3>
            </div>

            <div className="text-4xl text-primary font-bold">→</div>

            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-xl mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold text-secondary">Alert Map</h3>
            </div>
          </div>
        </div>

        {/* Key Components Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* SAR Data Card */}
          <div className="p-8 bg-background rounded-2xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
              <Satellite className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">📡 SAR Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dual polarization (VV/VH) for maximum sensitivity to forest structure.
            </p>
          </div>

          {/* AI Model Card */}
          <div className="p-8 bg-background rounded-2xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">🧠 AI Modeling</h3>
            <p className="text-muted-foreground leading-relaxed">
              U-Net for precise semantic segmentation of the 'Degraded Forest' class.
            </p>
          </div>

          {/* Metrics Card */}
          <div className="p-8 bg-background rounded-2xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">📈 Metrics</h3>
            <p className="text-muted-foreground leading-relaxed">
              CuSum (R<sub>sum_max</sub>) for rapid anomaly detection in time series.
            </p>
          </div>
        </div>

        {/* Success Metric */}
        <div className="text-center">
          <p className="text-sm text-primary font-semibold">
            Success Metric: IoU &gt; 0.80 for 'Subtle Degradation' class
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
