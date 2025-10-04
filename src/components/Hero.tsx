import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-amazon.jpg";

const Hero = () => {
  const scrollToMap = () => {
    const mapSection = document.getElementById('impact');
    mapSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Amazon Rainforest under cloud cover" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="text-primary">SAR INSIGHTS:</span>
          <br />
          <span className="text-foreground">La IA que ve lo oculto</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          Sistema de Alerta Temprana para la Degradación Forestal Sutil en la Amazonía Peruana.
        </p>

        <Button 
          onClick={scrollToMap}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 font-bold uppercase tracking-wider shadow-lg hover:shadow-[var(--glow-green)] transition-all duration-300"
        >
          Ver el Mapa MVP
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
