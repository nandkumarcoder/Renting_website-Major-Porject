import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string
  productId: string
  name: string
  description: string
  image: string
  price: number
  period: string
  startDate: string
  endDate: string
  totalDays: number
  owner: {
    id: string
    name: string
    avatar: string
    initials: string
  }
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  getTotalAmount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
      clearCart: () => set({ items: [] }),
      getTotalAmount: () => {
        return get().items.reduce((total, item) => total + (item.price * item.totalDays), 0)
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)