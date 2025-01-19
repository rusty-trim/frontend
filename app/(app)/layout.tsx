import ChannelList from '@/components/ChannelList'
import GuildList from '@/components/GuildList'
import Main from '@/components/Main'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='app__layout'>
            <GuildList />
            <ChannelList />
            <Main>{children}</Main>
        </div>
    )
}
