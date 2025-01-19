import React from 'react'

export default function AppHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className='app__header'>{children}</div>
    )
}
