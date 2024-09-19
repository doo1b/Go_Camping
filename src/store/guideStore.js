import { create } from "zustand";

const useGuideStore = create((set) => ({
  isOpen: false,
  selectedVideo: "",
  modalOpen: () => set({ isOpen: true }),
  modalClose: () => set({ isOpen: false }),
  setSelectedVideo: (id) => set({ selectedVideo: id })
}));

export default useGuideStore;
