import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { login } from '@/controllers/auth.controller'
import React from 'react'

export default function Login() {
    return (
        <div className='auth'>
            <div className="auth__form">
                <h1 className="auth__title">Login</h1>
                <form onSubmit={login}>
                    <div className="auth__field">
                        <label htmlFor="email">Email</label>
                        <Input type='email' id='email' name='email' />
                    </div>
                    <div className="auth__field">
                        <label htmlFor="password">Password</label>
                        <Input type='password' id='password' name='password' />
                    </div>
                    <Button className="auth__button" variant={"secondary"} type='submit'>Login</Button>
                </form>
            </div>
        </div>
    )
}
