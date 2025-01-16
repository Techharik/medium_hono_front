import React, { useState } from 'react'
import Quetos from '../components/Quetos'
import InputBox from '../components/InputBox'
import { signValidation } from '@pattari/medium-types'
import axios from 'axios'
import { apiurl } from '../../config/dbconfig'
import { useNavigate } from 'react-router-dom'
console.log(apiurl)
const Signup = () => {
    const [signupForm, setSingupForm] = useState<signValidation>({
        name: '',
        email: '',
        password: ''
    })
    const naviagte = useNavigate()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value)
        setSingupForm((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    const SignUpSubmit = async () => {
        try {
            const { data } = await axios.post(`${apiurl}/signup`, signupForm);
            if (data.success == true) {
                localStorage.setItem('token', data.token);
                naviagte('/blog')
            }
        } catch (e) {
            console.log(e)
        }
    }



    return (
        <div className='grid md:grid-cols-2 '>
            <div className='h-screen items-center flex  flex-col justify-center border gap-3'>
                <div className=' bg-white flex flex-col gap-1'>
                    <label htmlFor="name" className='text-md font-semibold'>
                        First Name :
                    </label>
                    <input name='name' type='text' onChange={handleChange} value={signupForm.name} className='border border-slate-500 p-2 rounded-lg w-[300px] ' />
                </div>
                <div className=' bg-white flex flex-col gap-1'>
                    <label htmlFor="name" className='text-md font-semibold'>
                        Email :
                    </label>
                    <input name='email' type='email' onChange={handleChange} value={signupForm.email} className='border border-slate-500 p-2 rounded-lg w-[300px] ' />
                </div>
                <div className=' bg-white flex flex-col gap-1'>
                    <label htmlFor="name" className='text-md font-semibold'>
                        Password :
                    </label>
                    <input name='password' type='passowrd' onChange={handleChange} value={signupForm.password} className='border border-slate-500 p-2 rounded-lg w-[300px] ' />
                </div>
                <button className='bg-blue-400 p-2 px-5 rounded-lg text-white hover:bg-blue-500'
                    onClick={SignUpSubmit}
                >
                    Submit
                </button>
            </div>


            <div className='md:block hidden'>
                <Quetos />
            </div>
        </div>
    )
}

export default Signup