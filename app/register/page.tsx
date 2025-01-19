"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { register } from '@/controllers/auth.controller';
import React, { useReducer } from 'react';

export default function Login() {

    const [data, setData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        email: "", username: "", password: ""
    });

    return (
        <div className='auth'>
            <div className="auth__form">
                <h1 className="auth__title">Register</h1>
                <form onSubmit={(event) => register(event, data)}>
                    <div className="auth__field">
                        <label htmlFor="email">Email</label>
                        <Input type='email' id='email' name='email' value={data.email} onChange={(event) => setData({ email: event.target.value })} />
                    </div>
                    <div className="auth__field">
                        <label htmlFor="username">Username</label>
                        <Input type='text' id='username' name='username' value={data.username} onChange={(event) => setData({ username: event.target.value })} />
                    </div>
                    <div className="auth__field">
                        <label htmlFor="password">Password</label>
                        <Input type='password' id='password' name='password' value={data.password} onChange={(event) => setData({ password: event.target.value })} />
                    </div>
                    <Button className="auth__button" variant={"secondary"} type='submit'>Register</Button>
                </form>
            </div>
        </div>
    )
}
