import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WishlistItem {
  id: number
  name: string
  description: string
  price: number
  period: string
  image: string
  rating: number
  reviews: number
  location: string
  category: string
  dateAdded: string
  available: boolean
}

interface WishlistStore {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: number) => void
  isItemInWishlist: (id: number) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => 
        set((state) => ({
          items: [...state.items, item]
        })),
      removeItem: (id) => 
        set((state) => ({
          items: state.items.filter((item) => item.id !== id)
        })),
      isItemInWishlist: (id) => 
        get().items.some((item) => item.id === id),
      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: 'wishlist-storage',
    }
  )
)