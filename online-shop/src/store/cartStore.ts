import {create} from "zustand"
interface CartStore{
    cart:any;
    addToCart:(product:any)=>void;
}

export const useCartStore= create<CartStore>((set)=>({
    cart: [],
    addToCart: (product) => 
    set((state) => ({
      cart: [...state.cart, product] 
    })),
}))

