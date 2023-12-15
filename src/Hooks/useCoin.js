import { create } from 'zustand'

const useCoin = create((set) => ({
    isLoggedIn: false,
    userId: null,
    role: "",
    setLogin: (isLogin) => set((state) => ({ isLoggedIn: isLogin })),
    setUserId: (userid) => set((state) => ({ userId: userid })),
    setRole: (userRole) => set((state) => ({ role: userRole })),
}))

export default useloginInfo;