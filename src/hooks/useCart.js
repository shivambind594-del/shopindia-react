import { useState, useEffect } from 'react'

function useCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (productId) => {
    setCart((prev) => [...prev, productId])
    alert('✨ Added to cart!')
  }

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((id) => id !== productId))
  }

  return { cart, addToCart, removeFromCart, cartCount: cart.length }
}

export default useCart