import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft, Leaf } from "lucide-react";
import { toast } from "sonner";
import Navbar from "../src/components/Navbar";
import CartItemCard from "../src/components/CartItemCard";
import { selectCartItems, selectCartTotal } from "../src/store/CartSlice";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleCheckout = () => {
    toast.info("Checkout Coming Soon!", {
      description: "Our secure checkout will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <header className="pt-28 pb-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4">
            🛒 Your Selection
          </span>
          <h1 className="section-heading text-4xl md:text-5xl mb-4">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground text-lg">
            {cartItems.length > 0
              ? `You have ${cartItems.length} item${
                  cartItems.length > 1 ? "s" : ""
                } in your cart`
              : "Your cart is empty"}
          </p>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <CartItemCard key={item.id} item={item} />
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="card-plant p-6 sticky top-32">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-muted-foreground">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span>Shipping</span>
                      <span className="text-leaf font-medium">Free</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-forest">
                      <span>Total</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="btn-hero w-full justify-center mb-4"
                  >
                    Checkout
                  </button>

                  <Link
                    to="/plants"
                    className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* Empty Cart State */
            <div className="text-center py-16 animate-fade-in">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Looks like you haven't added any plants yet. Browse our
                collection and find your perfect green companion!
              </p>
              <Link
                to="/plants"
                className="btn-hero inline-flex items-center gap-3"
              >
                Browse Plants
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border mt-auto">
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

export default Cart;
