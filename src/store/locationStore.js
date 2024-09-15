import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialState = {
  location: {
    center: {
      lat: 33.450701,
      lng: 126.570667
    },
    position: {
      lat: 33.450701,
      lng: 126.570667
    },
    isPanto: true,
    errMsg: null,
    isLoading: true
  }
};

export const useLocationStore = create(
  immer((set) => ({
    ...initialState,
    setLocation: (updateLocation) =>
      set((state) => ({ location: { ...state.location, ...updateLocation } }))
  }))
);
