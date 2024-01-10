import { useState, useEffect } from 'react';

import { Navbar } from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import ProductCard from './Components/ProductCard/ProductCard';
import ProductList from './Components/ProductList/ProductList';



import './App.css';
import Dropdown from './Components/Dropdown/Dropdown';
import { Footer } from './Components/Footer/Footer';


function App() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedProduct, setSelectedProduct] = useState('')


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


      <ProductList products={products} />
<Footer />
    </div>
  );
}

export default App;
