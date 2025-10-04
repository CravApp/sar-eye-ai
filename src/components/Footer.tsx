const Footer = () => {
  const teamMembers = ["Benjamín Saavedra", "Irwin", "Cristhian", "Diego", "César", "Edú"];
  
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-primary">SAR Insights</h3>
          <p className="text-muted-foreground">Hackathon 2025</p>
          
          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            {teamMembers.map((member, index) => (
              <span key={index}>
                {member}
                {index < teamMembers.length - 1 && <span className="mx-1">•</span>}
              </span>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Agradecemos a los organizadores de la Hackathon y los datos de ESA Sentinel
          </p>
          
          <div className="pt-6 border-t border-border mt-6">
            <p className="text-xs text-muted-foreground">
              © 2025 SAR Insights. Sistema de Alerta Temprana para la Degradación Forestal en la Amazonía Peruana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
