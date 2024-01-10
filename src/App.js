import { useState, useEffect } from 'react';

import { Navbar } from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import ProductCard from './Components/ProductCard/ProductCard';



import './App.css';
import Dropdown from './Components/Dropdown/Dropdown';


function App() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedProduct, setSelectedProduct] = useState('')

  console.log(selectedCategory, 'from child')

  const fetchProducts = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => { setProducts(data.products) })
  }
  const fetchCategories = () => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => { setCategories(data) })
  }

  const searchProductsByCategory = (data) => {
    fetch(`https://dummyjson.com/products/category/${data}`)
      .then((res) => res.json())
      .then((data) => { setProducts(data.products) })
  }

  const searchProductsByProduct = (data) => {
    fetch(`https://dummyjson.com/products/search?q=${data}`)
      .then((res) => res.json())
      // .then(res => console.log(res, 'from childprod'))
      .then((data) => setProducts(data.products))
  }

  
  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, [])

  useEffect(() => {
    if (selectedCategory === '' || selectedCategory === null) {
      fetchProducts()
    } else {
      searchProductsByCategory(selectedCategory)
    }

  }, [selectedCategory])

  useEffect(() => {
    if (selectedProduct === '' || selectedProduct === null) {
      fetchProducts()
    } else {
      searchProductsByProduct(selectedProduct)
    }
  }, [selectedProduct])

  return (
    <div>
      <Navbar productSelection={prod => setSelectedProduct(prod)} />
      <Banner />
      {categories && <Dropdown categories={categories}
        categorySelection={cat => setSelectedCategory(cat)} />}
      <div className='product-container'>

        {products && products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            name={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
