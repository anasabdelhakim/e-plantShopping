import { useDispatch, useSelector } from "react-redux";
import { ShoppingBag, Check } from "lucide-react";
import { addItem } from "../store/CartSlice";

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.cart.items.map((i) => i.id));
  const isAdded = addedItems.includes(plant.id);

  const handleAddToCart = () => {
    if (!isAdded) {
      dispatch(
        addItem({
          id: plant.id,
          name: plant.name,
          price: plant.price,
          image: plant.image,
        })
      );
    }
  };

  return (
    <div className="card-plant group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-2">
          {plant.category}
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground">
          {plant.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {plant.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-forest">
            ${plant.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`btn-cart flex items-center gap-2 ${
              isAdded ? "bg-leaf" : ""
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
