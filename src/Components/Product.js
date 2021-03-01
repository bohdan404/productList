import React, {useState} from 'react'
import ProductForm from "./ProductForm";
import {RiCloseCircleFill, TiEdit} from "react-icons/all";

let Produc = ({products, compleateProduct, removeProduct, updateProduct}) => {

    const [edit, setEdith] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateProduct(edit.id, value)
        setEdith({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <ProductForm edith={edit} onSubmit={submitUpdate}/>
    }

    return products.map((product, index) => (
        <div className={product.isCompleate ? 'todo-row coplete' : 'todo-row'}
             key={index}>
            <div key={product.id} onClick={() => compleateProduct(product.id)}>
                {product.text}
            </div>
            <div className="icons">
                <RiCloseCircleFill className='delete-icon'
                                   onClick={() => removeProduct(product.id)}
                />
                <TiEdit className='edith-icon'
                        onClick={() => setEdith({id: product.id, value: product.text})}
                />

            </div>
        </div>
    ))
}

export default Produc