import { Cloud, CloudOff, AlertTriangle } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          <span className="text-foreground">Nubosidad, Tala Sutil y el Fracaso del</span>
          <br />
          <span className="text-primary">Monitoreo Óptico</span>
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            El 80% de la Amazonía Madre de Dios está bajo una cobertura de nubes que inutiliza la data óptica (Landsat/Sentinel-2). 
            La deforestación tradicional ha sido reemplazada por la <span className="text-primary font-semibold">tala selectiva y degradación sutil</span>, 
            imperceptible a simple vista, creando un vacío de monitoreo crítico.
          </p>
        </div>

        {/* Highlighted Quote */}
        <div className="max-w-3xl mx-auto mb-20 p-8 bg-card border-2 border-primary/30 rounded-2xl shadow-lg shadow-primary/10">
          <blockquote className="text-2xl md:text-3xl font-bold text-center text-foreground italic">
            "Monitorear la degradación forestal sutil con datos ópticos es como intentar conducir con los ojos vendados."
          </blockquote>
        </div>

        {/* Comparison Icons */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Optical Monitoring - Blocked */}
          <div className="text-center p-8 bg-card rounded-2xl border border-border hover:border-destructive/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-destructive/10 rounded-full">
              <Cloud className="w-12 h-12 text-destructive" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-destructive">Monitoreo Óptico</h3>
            <p className="text-muted-foreground text-lg">
              Bloqueado por nubes el 80% del tiempo. Incapaz de detectar degradación sutil en el sub-dosel.
            </p>
          </div>

          {/* SAR Monitoring - Clear Vision */}
          <div className="text-center p-8 bg-card rounded-2xl border-2 border-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-primary/10 rounded-full animate-pulse-glow">
              <CloudOff className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Visión SAR</h3>
            <p className="text-muted-foreground text-lg">
              Penetra nubes 24/7. Detecta cambios sutiles en la estructura del bosque a nivel de píxel.
            </p>
          </div>
        </div>

        {/* Alert Illustration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-destructive/10 border-2 border-destructive/30 rounded-2xl">
            <AlertTriangle className="w-10 h-10 text-destructive" />
            <p className="text-xl font-semibold text-foreground">
              Tala selectiva: La amenaza invisible
            </p>
          </div>
        </div>

        {/* CTA to Solution */}
        <div className="mt-20 text-center">
          <button 
            onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary text-xl font-bold uppercase tracking-wider hover:text-accent transition-colors duration-300 flex items-center gap-2 mx-auto group"
          >
            Nuestra Solución: SAR + U-Net
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;
