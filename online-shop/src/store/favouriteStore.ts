import {create} from "zustand"
interface FavouriteStore{
   favourite:any;
   addToTheFavourite:(product:any)=>void;
}
export const useFavouriteStore= create<FavouriteStore>((set)=>({
    favourite: [],
    addToTheFavourite: (product) => 
    set((state) => ({
      favourite: [...state.favourite, product] 
    })),
}))

