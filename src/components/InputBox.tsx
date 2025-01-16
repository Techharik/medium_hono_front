import React from 'react'

const InputBox = ({ values, setValues, name }) => {
    return (

        <input type="text"
            className='border border-slate-500 p-2 rounded-lg w-[300px] '
            value={values}
            name='name'
            onChange={(e) => setValues(e)}
        />

    )
}

export default InputBox