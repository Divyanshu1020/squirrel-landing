import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Read our terms and conditions to understand the terms and conditions of our services.'
}

export default function page() {
  return (
    <div>
      <h1>Terms and Conditions</h1>
      <p>By accessing and using our website, you agree to comply with these terms and conditions.</p>
    </div>
  )
}
