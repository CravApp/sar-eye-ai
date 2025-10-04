import { Satellite, Brain, TrendingUp } from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
          <span className="text-foreground">Arquitectura SAR Insights:</span>
          <br />
          <span className="text-primary">Fusión de Radar y Deep Learning</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-5xl mx-auto mb-20">
          Desarrollamos un pipeline inteligente en <span className="text-primary font-semibold">Google Earth Engine (GEE)</span> y Python. 
          La serie temporal de Sentinel-1 (VV y VH) alimenta el algoritmo <span className="text-accent font-semibold">CuSum</span> para 
          aislar el cambio rápido (R<sub>sum_max</sub>), y esto es segmentado por nuestra <span className="text-accent font-semibold">CNN (U-TAE)</span> para 
          clasificar la degradación con precisión a nivel de píxel.
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
              <h3 className="text-xl font-bold text-secondary">Mapa de Alerta</h3>
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
            <h3 className="text-2xl font-bold mb-4 text-foreground">📡 Datos SAR</h3>
            <p className="text-muted-foreground leading-relaxed">
              Polarización dual (VV/VH) para máxima sensibilidad a la estructura forestal.
            </p>
          </div>

          {/* AI Model Card */}
          <div className="p-8 bg-background rounded-2xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">🧠 Modelado IA</h3>
            <p className="text-muted-foreground leading-relaxed">
              U-Net para la segmentación semántica precisa de la clase 'Bosque Degradado'.
            </p>
          </div>

          {/* Metrics Card */}
          <div className="p-8 bg-background rounded-2xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">📈 Métrica</h3>
            <p className="text-muted-foreground leading-relaxed">
              CuSum (R<sub>sum_max</sub>) para la detección de anomalías rápidas en la serie de tiempo.
            </p>
          </div>
        </div>

        {/* Success Metric */}
        <div className="text-center">
          <p className="text-sm text-primary font-semibold">
            Métrica de éxito: IoU &gt; 0.80 para la clase 'Degradado Sutil'
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
