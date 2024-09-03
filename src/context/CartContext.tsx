import { createContext, useMemo, useReducer } from "react";

export interface CartItem {
  name: string;
}

interface CartContextType {
  cartItems: CartItem[];
  dispatch: React.Dispatch<Action>;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  dispatch: () => {},
});

type Action =
  | { type: "added"; name: string }
  | { type: "deleted"; name: string };

function cartReducer(state: CartItem[], action: Action) {
  switch (action.type) {
    case "added": {
      const { name } = action;

      if (state.some((prevState) => prevState.name === name)) {
        return state;
      }

      return [{ name }, ...state];
    }
    case "deleted": {
      const { name } = action;

      return state.filter((prevState) => prevState.name !== name);
    }
    default: {
      throw new Error(`Unkown action: ${action}`);
    }
  }
}

export function CartProvider({ children }: React.PropsWithChildren) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const cartContextValue = useMemo(
    () => ({ cartItems, dispatch }),
    [cartItems]
  );

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}
