import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { addItem, countItems, removeLine, sanitizeLines, setQty, subtotal } from './cart-logic.js'
import { readJson, writeJson } from './storage.js'

const STORAGE_KEY = 'boutique.cart'
const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [lines, setLines] = useState(() => sanitizeLines(readJson(STORAGE_KEY, [])))
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => writeJson(STORAGE_KEY, lines), [lines])

  const value = useMemo(
    () => ({
      lines,
      isOpen,
      count: countItems(lines),
      subtotal: subtotal(lines),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add: (item) => {
        setLines((current) => addItem(current, item))
        setIsOpen(true)
      },
      updateQty: (key, qty) => setLines((current) => setQty(current, key, qty)),
      remove: (key) => setLines((current) => removeLine(current, key)),
      clear: () => setLines([]),
    }),
    [lines, isOpen],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
