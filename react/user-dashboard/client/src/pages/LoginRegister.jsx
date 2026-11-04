import React, { useState } from 'react'
import OtpInput from 'react-otp-input';

import scenceImage from "../../public/media/graphics/18697.jpg"

const LoginRegister = () => {

    const [otp, setOtp] = useState('');

    const [otpScreen, setOtpScreen] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        setOtpScreen(!otpScreen)
    }

    return (
        <div className='w-full h-[100vh] bg-card p-10'>
            <div className='w-full h-full grid grid-cols-2 items-center justify-center'>
                <div className='scene'>
                    <img className='rounded-2xl w-fit' src={scenceImage} alt="s" />
                </div>
                <div className='form p-10'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white text-5xl font-bold'>Create An Account</h1>
                        <span className='font-semibold text-[var(--color-text-muted)]'>Already have an account ?</span>
                    </div>
                    {
                        !otpScreen ?
                            <form onSubmit={handleSubmit} action="">
                                <div className='flex flex-col gap-3 my-5'>
                                    <div className='flex gap-3'>
                                        <input className='grow bg-[var(--color-input)] p-3 ring-2 rounded ring-[var(--color-text-muted)] text-white' type="text" placeholder='First Name' />
                                        <input className='grow bg-[var(--color-input)] p-3 ring-2 rounded ring-[var(--color-text-muted)] text-white' type="text" placeholder='Last Name' />
                                    </div>
                                    <div className='flex gap-3'>
                                        <input className='grow bg-[var(--color-input)] p-3 ring-2 rounded ring-[var(--color-text-muted)] text-white' type="Email" placeholder='Email' />
                                        <input className='bg-[var(--color-input)] p-3 ring-2 rounded ring-[var(--color-text-muted)] text-white' type="tel" placeholder='Phone Number' />
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <div>
                                            <label className='text-white font-semibold text-2xl me-3' htmlFor="">D.O.B.</label>
                                            <input className='bg-[var(--color-input)] p-3 ring-2 rounded ring-[var(--color-text-muted)] text-white' type="Date" placeholder='D.O.B.' />
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <label className='text-white font-semibold text-2xl me-3' htmlFor="">Gender</label>
                                            <div className='flex gap-3'>
                                                <input id='gender-male' className='p-3 text-white' type="radio" name='gender' />
                                                <label className='text-white' htmlFor="gender-male">Male</label>
                                                <input id='gender-female' className='p-3 text-white' type="radio" name='gender' />
                                                <label className='text-white' htmlFor="gender-female">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type='submit' className='p-3 bg-white rounded-2xl'>Register</button>
                                </div>
                            </form>
                            :
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={5}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} style={{ ...props.style, color: "black", background: "", padding: "2rem" }} />}
                            />
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginRegister