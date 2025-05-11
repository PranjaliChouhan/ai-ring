"use client";

import { createContext, useContext, useReducer } from "react";
import ring from "../assets/images/ring.png";

// Available ring sizes
export const RING_SIZES = ["7", "8", "9", "10", "11", "12"] as const;
export type RingSize = typeof RING_SIZES[number];

// Available ring colors
export const RING_COLORS = ["black", "gold", "silver"] as const;
export type RingColor = typeof RING_COLORS[number];

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: RingSize;
  color: RingColor;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  isSidebarOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "UPDATE_SIZE"; payload: { id: string; size: RingSize } }
  | { type: "UPDATE_COLOR"; payload: { id: string; color: RingColor } }
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
      price: 31.99,
      size: "7" as RingSize,
      color: "black" as RingColor,
      quantity: 1,
      image: ring,
    }
  ],
  subtotal: 31.99,
  tax: 3.2,
  shipping: 10,
  total: 31.99,
  isSidebarOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "CLOSE_SIDEBAR":
      return { ...state, isSidebarOpen: false };
    case "ADD_ITEM": {
      // Check if item already exists
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // Update existing item with new size and color
        const updatedItems = state.items.map(item =>
          item.name === action.payload.name
            ? { ...item, size: action.payload.size, color: action.payload.color }
            : item
        );
        return calculateCartTotals({ ...state, items: updatedItems });
      }
      // If item doesn't exist, add it
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
    case "UPDATE_SIZE": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, size: action.payload.size } : item
      );
      return calculateCartTotals({ ...state, items: updatedItems });
    }
    case "UPDATE_COLOR": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, color: action.payload.color } : item
      );
      return calculateCartTotals({ ...state, items: updatedItems });
    }
    default:
      return state;
  }
}

function calculateCartTotals(state: CartState): CartState {
  const subtotal = parseFloat(state.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2));
  const tax = parseFloat((subtotal * 0.1).toFixed(2));
  const shipping = subtotal > 100 ? 0 : 10;
  const total = parseFloat(subtotal.toFixed(2));

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
