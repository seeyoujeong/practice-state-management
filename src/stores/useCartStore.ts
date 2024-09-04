import { create } from "zustand";
import { CartItem } from "@/types";

type State = {
  cartItems: CartItem[];
};

type Actions = {
  addCartItem: (name: string) => void;
  deleteCartItem: (name: string) => void;
};

const useCartStore = create<State & Actions>((set) => ({
  cartItems: [],
  addCartItem: (name: string) =>
    set((state) => ({
      cartItems: state.cartItems.some((prevState) => prevState.name === name)
        ? state.cartItems
        : [{ name }, ...state.cartItems],
    })),
  deleteCartItem: (name: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((prevState) => prevState.name !== name),
    })),
}));

export default useCartStore;
