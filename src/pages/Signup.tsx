import React, { useState } from 'react'
import Quetos from '../components/Quetos'
import InputBox from '../components/InputBox'
import { signValidation } from '@pattari/medium-types'

const Signup = () => {
    const [signupForm, setSingupForm] = useState({
        name: '',
        email: '',
        password: ""
    })

    return (
        <div className='grid grid-cols-2 '>
            <div className='h-screen bg-white'>
                <InputBox name={"name"} values={signupForm.name} setValues={setSingupForm} />
            </div>
            <div>
                <Quetos />
            </div>
        </div>
    )
}

export default Signup