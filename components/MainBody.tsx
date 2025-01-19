import React from 'react'

export default function MainBody({ children }: { children: React.ReactNode }) {
  return (
    <div className='main__body'>
      {children}
    </div>
  )
}
