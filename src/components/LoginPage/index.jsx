"use client"

import { Lock, User } from 'lucide-react';
import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div className='w-[338px] h-[330px] p-4 shadow-2xl' >

                <div className='text-center mb-4'>
                    <div className='flex justify-center'><Lock style={{backgroundColor : "#155DFC", color: "white", padding: "8px", borderRadius: "50%" }} size={40}/></div>
                    <div>eCOM</div>
                    <div>Sign in to access the dashboard</div>
                </div>

                <div className=''>


                    <div>
                        <label>Username</label>
                    </div>
                    <div className='flex my-2 px-2 py-1 rounded-[8px]' style={{ border: "1px solid lightgray" }}>
                        <div><User /></div>
                        <div >
                            <input type='text' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email'
                                className='focus:outline-none ml-2'
                            />
                        </div>

                    </div>

                    <div className=''>
                        <label>Password</label>
                    </div>
                    <div className='flex my-2 px-2 py-1 rounded-[8px]' style={{ border: "1px solid lightgray" }}>
                        <div><User /></div>
                        <div>
                            <input type='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password'
                                className='focus:outline-none ml-2 '
                            />
                        </div>

                    </div>

                    <button className='bg-blue-500 w-full text-white px-2 py-1 rounded-[8px] my-3'>Sign In</button>
                </div>


            </div>
        </div>

    )
}

export default Login