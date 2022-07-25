import create from 'zustand';
import {persist} from 'zustand/middleware';

const store = persist((set) => ({
    food: [],
    addFood: (food) => set((state) => ({ food: [...state.food, food] })),
    removeFood: (food) => set((state) => ({ food: state.food.filter((f) => f !== food) })),
    updateQuantity: (foodName, quantity) => set((state) => ({food:state.food.map((f) => {
        if(f.name === foodName){
            return {...f, quantity: f.quantity + quantity}
        }
        return f;
        
    })}))
}));

const useStore = create(store);

export default useStore;