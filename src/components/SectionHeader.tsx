interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeader = ({ title, subtitle, light }: Props) => (
  <div className="text-center mb-12">
    <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className={`w-20 h-1 mx-auto mt-6 rounded-full ${light ? "bg-ocean-surface" : "bg-turquoise"}`} />
  </div>
);

export default SectionHeader;
