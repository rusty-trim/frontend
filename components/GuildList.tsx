import { Compass, Plus, Settings } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function GuildList() {
    return (
        <div className='guildlist'>
            <Avatar className='guildlist__avatar'>
                <AvatarImage width={48} height={48} src="avatar.jpg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className='border-sector' />

            <div className="guildlist__guilds">
                <div className='guildlist__guilds__guild-wrapper active'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='guildlist__guilds__guild-wrapper'>
                    <Avatar className='guildlist__guilds__guild'>
                        <AvatarImage width={48} height={48} src="avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            <div className='border-sector' />

            <div className="guildlist__footer">
                <button className='guildlist__footer__button'><Plus /></button>
                <button className='guildlist__footer__button'><Compass /></button>
                <button className='guildlist__footer__button'><Settings /></button>
            </div>
        </div>
    )
}
