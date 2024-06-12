import { create } from "zustand";

export interface CartItem {
  title: string;
  cant: number;
  price: number;
  main_image: string;
}

interface ICart {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (title: string) => void;
  clearToCart: () => void;
  getTotalItems: () => number;
  increaseQuantity: (title: string) => void;
  decreaseQuantity: (title: string) => void;
  removeItem: (title: string) => void;
}

export const cartStore = create<ICart>((set, get) => ({
  cart: [],
  addToCart: (item) => set((state) => {
    const existingItem = state.cart.find((i) => i.title === item.title);
    if (existingItem) {
      return {
        cart: state.cart.map((i) =>
          i.title === item.title ? { ...i, cant: i.cant + item.cant } : i
        ),
      };
    } else {
      return { cart: [...state.cart, item] };
    }
  }),
  removeFromCart: (title) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.title !== title),
    })),
  clearToCart: () => set({ cart: [] }),
  getTotalItems: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + item.cant, 0);
  },
  increaseQuantity: (title) => set((state) => ({
    cart: state.cart.map((item) =>
      item.title === title ? { ...item, cant: item.cant + 1 } : item
    ),
  })),
  decreaseQuantity: (title) => set((state) => ({
    cart: state.cart.map((item) =>
      item.title === title && item.cant > 1 ? { ...item, cant: item.cant - 1 } : item
    ),
  })),
  removeItem: (title) => set((state) => ({
    cart: state.cart.filter((item) => item.title !== title),
  })),
}));
