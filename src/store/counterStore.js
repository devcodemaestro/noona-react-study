import { create } from "zustand";

const counterStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  increaseBy: (value) => set((state) => ({ count: state.count + value })),
  decrease: () => set((state) => ({ count: state.count + -1 })),
  decreaseBy: (value) => set((state) => ({ count: state.count - value })),
}));

export default counterStore;
