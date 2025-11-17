import { CheckCircle, Flame, Zap, Truck } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Flame,
      title: '100% Cajun Authentic',
      description: 'Crafted using traditional Louisiana recipes and authentic spice blends',
    },
    {
      icon: Zap,
      title: 'Bold, Fresh Spices',
      description: 'Carefully selected premium ingredients for maximum flavor impact',
    },
    {
      icon: Truck,
      title: 'Ships Fast',
      description: 'Quick processing and reliable shipping to your doorstep',
    },
    {
      icon: CheckCircle,
      title: 'Perfect for Seafood & More',
      description: 'Versatile blends that elevate any dish to restaurant quality',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-12">
          Why Choose Jazzyjeatz
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="p-6 bg-muted rounded-lg hover:bg-primary/5 transition">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
