'use client'

import { Toaster } from 'react-hot-toast'

export default function Providers({ children }) {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: '#4CAF50',
              color: '#fff',
              padding: '16px',
            },
          },
          error: {
            duration: 3000,
            style: {
              background: '#f44336',
              color: '#fff',
              padding: '16px',
            },
          },
          style: {
            border: '1px solid #ccc',
            padding: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          },
        }}
      />
      {children}
    </>
  )
}