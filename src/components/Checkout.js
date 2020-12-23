import React, { useState } from "react"
import getStripe from "../utils/stripejs"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: process.env.GATSBY_BUTTON_PRICE_ID, quantity: 1}],
      successUrl: `${window.location.origin}/page-2/`,
      cancelUrl: `${window.location.origin}`,
    })

    if (error) {
      console.warn('Error:', error)
      setLoading(false)
    }
  }

  return (
    <button 
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
      >
        BUY
      </button>
  )

   
export default Checkout
