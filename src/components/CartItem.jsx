import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../store/CartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-card rounded-xl border border-border animate-fade-in">
      <div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground">
            {item.name}
          </h3>
          <p className="text-muted-foreground">${item.price.toFixed(2)} each</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={decreaseQuantity}
            className="quantity-btn"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center font-semibold text-lg">
            {item.quantity}
          </span>
          <button
            onClick={increaseQuantity}
            className="quantity-btn"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="text-right sm:w-24">
          <p className="text-lg font-bold text-forest">
            ${itemTotal.toFixed(2)}
          </p>
        </div>

        <button
          onClick={() => dispatch(removeItem(item.id))}
          className="p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors self-start sm:self-center"
          aria-label="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
