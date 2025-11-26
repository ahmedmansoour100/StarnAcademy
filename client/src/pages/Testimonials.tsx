import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import sampleData from "@/data/sample-data.json";

export default function Testimonials() {
  const testimonials = sampleData.testimonials;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating / 8);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < fullStars ? "text-secondary" : "text-muted"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6" data-testid="text-testimonials-title">
            آراء أولياء الأمور
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            اكتشف تجارب أولياء الأمور مع Starn Academy
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} data-testid={`card-testimonial-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{testimonial.parentName}</h3>
                    <div className="flex gap-0.5 text-xl">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    التقييم: {testimonial.rating}/40
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
