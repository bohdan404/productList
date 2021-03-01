import React, {useState} from 'react'

let ProductForm = (props) => {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        setInput('')
    }

    return (

        <form className='product-list-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='add a product' value={input}
                   name='text' className='product-list-input'
                   onChange={handleChange}
            />
            <button className='product-list-button'>add product</button>
        </form>

    )
}

export default ProductForm