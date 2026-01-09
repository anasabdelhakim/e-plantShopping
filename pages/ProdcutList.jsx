import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { Leaf } from "lucide-react";
import { categories, plants } from "../data/plantss";
import Navbar from "./../src/components/Navbar";
import PlantCard from "./../src/components/PlantCard";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  // Filter plants by category
  const filteredPlants = selectedCategory
    ? plants.filter((plant) => plant.category === selectedCategory)
    : plants;

  // Add to cart handler
  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        image: plant.image,
        price: plant.price,
        quantity: 1,
      })
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <header className="pt-28 pb-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4">
            🌱 Our Collection
          </span>
          <h1 className="section-heading text-4xl md:text-5xl mb-4">
            Shop Houseplants
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From tropical statement plants to low-maintenance succulents, find
            the perfect green companion.
          </p>
        </div>
      </header>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-5 py-2 rounded-full font-medium ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            All Plants
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <main className="py-12">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                onAdd={() => handleAddToCart(plant)}
              />
            ))
          ) : (
            <p className="text-muted-foreground text-center col-span-full">
              No plants found in this category.
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border text-center">
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
      </footer>
    </div>
  );
};

export default ProductList;
