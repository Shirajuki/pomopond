import create from 'zustand';

type State = {
  zen: boolean;
  setZen: (zen: boolean) => void;
};
const useStore = create<State>((set) => ({
  zen: false,
  setZen: (zen) => set({ zen }),
}));

export default useStore;
