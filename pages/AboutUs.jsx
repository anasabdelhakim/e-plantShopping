import { Leaf, Heart, Users, TreePine, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../src/components/Navbar";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Plants",
      description:
        "Every plant in our collection is hand-picked with love and care.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "We believe in building a community of plant lovers who support each other.",
    },
    {
      icon: TreePine,
      title: "Sustainability First",
      description:
        "Eco-friendly packaging and sustainable growing practices guide everything we do.",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Every plant comes with our 30-day health guarantee.",
    },
  ];

  const team = [
    {
      name: "Sarah Green",
      role: "Founder & Plant Expert",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Head of Horticulture",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      name: "Emily Woods",
      role: "Customer Experience",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="pt-28 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4">
            🌿 Our Story
          </span>
          <h1 className="section-heading text-4xl md:text-6xl mb-6">
            About Paradise Nursery
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Founded in 2020, Paradise Nursery was born from a simple idea:
            everyone deserves to experience the joy and tranquility that plants
            bring into our lives. What started as a small passion project has
            grown into a thriving community of plant lovers.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="section-heading text-3xl mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At Paradise Nursery, we're on a mission to make the joy of plant
                ownership accessible to everyone. Whether you're a seasoned
                plant parent or just starting your green journey, we're here to
                help you create your own indoor paradise.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We carefully source our plants from trusted growers who share
                our commitment to quality and sustainability. Each plant is
                inspected and nurtured before it finds its way to your home.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=300&h=400&fit=crop"
                alt="Plants collection"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?w=300&h=400&fit=crop"
                alt="Succulents"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading text-3xl mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These core principles guide everything we do at Paradise Nursery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-forest" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading text-3xl mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The passionate plant lovers behind Paradise Nursery.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="card-plant p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-secondary"
                />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-cream mb-6">
            Join Our Plant Family
          </h2>
          <p className="text-cream/80 text-lg mb-8 max-w-xl mx-auto">
            Start your plant journey today and experience the Paradise
            difference.
          </p>
          <Link to="/plants" className="btn-hero inline-block">
            Shop Now
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

export default AboutUs;
