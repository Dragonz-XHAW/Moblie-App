import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Course } from '@/constants/Data';

interface CartState {
  items: Course[];
  total: number;
  discount: number;
  finalTotal: number;
}

interface CartContextType {
  state: CartState;
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  clearCart: () => void;
  isInCart: (courseId: number) => boolean;
}

type CartAction = 
  | { type: 'ADD_TO_CART'; payload: Course }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateDiscount = (itemCount: number, subtotal: number): number => {
  if (itemCount >= 4) return subtotal * 0.15; // 15% for 4+ courses
  if (itemCount === 3) return subtotal * 0.10; // 10% for 3 courses
  if (itemCount === 2) return subtotal * 0.05; // 5% for 2 courses
  return 0;
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex > -1) return state;
      
      const newItems = [...state.items, action.payload];
      const subtotal = newItems.reduce((sum, item) => sum + item.price, 0);
      const discount = calculateDiscount(newItems.length, subtotal);
      
      return {
        items: newItems,
        total: subtotal,
        discount,
        finalTotal: subtotal - discount
      };
    }
    
    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const subtotal = newItems.reduce((sum, item) => sum + item.price, 0);
      const discount = calculateDiscount(newItems.length, subtotal);
      
      return {
        items: newItems,
        total: subtotal,
        discount,
        finalTotal: subtotal - discount
      };
    }
    
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        discount: 0,
        finalTotal: 0
      };
    
    default:
      return state;
  }
};

const initialState: CartState = {
  items: [],
  total: 0,
  discount: 0,
  finalTotal: 0
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (course: Course) => {
    dispatch({ type: 'ADD_TO_CART', payload: course });
  };

  const removeFromCart = (courseId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: courseId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isInCart = (courseId: number) => {
    return state.items.some(item => item.id === courseId);
  };

  const value: CartContextType = {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 