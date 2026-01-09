import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Truck, Shield } from "lucide-react";
import Navbar from "../src/components/Navbar";

const Index = () => {
  const features = [
    {
      icon: Leaf,
      title: "Hand-Selected Plants",
      description: "Every plant is carefully chosen for health and beauty.",
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description: "Plants arrive in perfect condition, guaranteed.",
    },
    {
      icon: Shield,
      title: "30-Day Guarantee",
      description: "Not happy? We'll replace your plant for free.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="./assests/hero-plants.jpg"
            alt="Paradise Nursery plants collection"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-sage/30 text-cream text-sm font-medium mb-6">
              🌿 Welcome to Paradise Nursery
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
              Bring Nature
              <br />
              <span className="text-sage">Into Your Home</span>
            </h1>
            <p className="text-cream/90 text-lg md:text-xl mb-8 max-w-lg">
              Discover our curated collection of beautiful houseplants.
              Transform your space into a lush paradise.
            </p>
            <Link
              to="/plants"
              className="btn-hero inline-flex items-center gap-3"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading mb-4">
              Why Choose Paradise Nursery?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're passionate about plants and committed to helping you create
              your perfect indoor garden.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-plant p-8 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-forest" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-cream/80 text-lg mb-8 max-w-xl mx-auto">
            Browse our collection of over 18 beautiful houseplants, from
            tropical statement pieces to easy-care succulents.
          </p>
          <Link
            to="/plants"
            className="btn-hero inline-flex items-center gap-3"
          >
            Shop All Plants
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-forest">
              Paradise Nursery
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Paradise Nursery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
