import React, {useState} from 'react'
import ProductForm from "./ProductForm";
import Produc from "./Product";

let ProductList = () => {
    const [products, setProducts] = useState([])

    const addProducts = product => {
        if (!product.text || /^\s*$/.test(product.text)) {
            return
        }

        const newProducts = [product, ...products]

        setProducts(newProducts)
    }

    const updateProduct = (productId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setProducts(prev => prev.map(item => (item.id === productId ? newValue : item))
        )
    }

    const removeProduct = id => {
        const removeArr = [...products].filter(todo => todo.id !== id)
        setProducts(removeArr)
    }

    const compleateProduct = id => {
        let updatedProducts = products.map(product => {
            if (product.id === id) {
                product.isCompleate = !product.isCompleate
            }
            return product
        })
        setProducts(updatedProducts)
    }


    return (
        <div>
            <h1>products to buy</h1>
            <ProductForm onSubmit={addProducts}/>
            <Produc
                products={products} compleateProduct={compleateProduct} removeProduct={removeProduct}
                updateProduct={updateProduct}
            />
        </div>
    )
}

export default ProductList