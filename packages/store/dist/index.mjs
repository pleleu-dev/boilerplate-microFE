"use strict";

// index.tsx
import create from "zustand";
var useStore = create((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  reset: () => set({ counter: 0 })
}));
export {
  useStore
};
