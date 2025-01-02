import React from 'react'

const InputBox = ({ values, setValues, name }) => {
    return (

        <input type="text"
            className='border'
            value={values}
            name='name'
            onChange={(e) => setValues(e)}
        />

    )
}

export default InputBox