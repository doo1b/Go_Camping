import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from 'zustand/middleware';

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
  },
  campsite: {},
  campsites: [],
};

export const useLocationStore = create(
  immer(
    persist((set) => ({
      ...initialState,
      setLocation: (updateLocation) =>
        set((state) => ({ location: { ...state.location, ...updateLocation } })),
      setCampsites: (campsites) => set(() => ({campsites: [ ...campsites ]})),
      setCampsite: (campsite) => set(() => ({campsite: { ...campsite }})),
    }), {name: "campsitesInfomation"})
  )
);
