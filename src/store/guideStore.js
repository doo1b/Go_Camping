import { create } from "zustand";

const useGuideStore = create((set) => ({
  isOpen: false,
  searchKeyword: "",
  modalOpen: () => set({ isOpen: true }),
  modalClose: () => set({ isOpen: false }),
  setSearchKeyword: (key) => set({ searchKeyword: key })
}));

export default useGuideStore;
