"use client";

import { createContext, useContext, useReducer } from "react";
import ring from "../assets/images/ring.png";

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  isSidebarOpen: boolean; // ✅ Fixed incorrect syntax
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "CLOSE_SIDEBAR" };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const initialState: CartState = {
  items: [
    {
      id: "1",
      name: "Health Ring",
      price: 32,
      size: "M",
      quantity: 1,
      image: ring,
    },
    // {
    //   id: "2",
    //   name: "Uniqlu Chino Pants - Black Stone",
    //   price: 124,
    //   size: "S",
    //   quantity: 1,
    //   image: ring,
    // },
  ],
  subtotal: 156,
  tax: 15,
  shipping: 27,
  total: 198,
  isSidebarOpen: false, // ✅ Properly initialized
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen }; // ✅ Toggle sidebar
    case "CLOSE_SIDEBAR":
      return { ...state, isSidebarOpen: false }; // ✅ Close sidebar
    case "ADD_ITEM": {
      const updatedItems = [...state.items, action.payload];
      return calculateCartTotals({ ...state, items: updatedItems });
    }
    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      return calculateCartTotals({ ...state, items: updatedItems });
    }
    case "UPDATE_QUANTITY": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      return calculateCartTotals({ ...state, items: updatedItems });
    }
    default:
      return state;
  }
}

// ✅ Function to recalculate totals
function calculateCartTotals(state: CartState): CartState {
  const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  return { ...state, subtotal, tax, shipping, total };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
