import { create } from "zustand";

const useMemberStore = create((set) => ({
    member: '손님',
    setMember: (newMember) => set(() => ({member: newMember})),
}));

export default useMemberStore;