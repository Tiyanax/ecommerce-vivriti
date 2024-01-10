import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div>
      <div className="product-list">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} {...product} image={product.thumbnail} name={product.title} />
        ))}
      </div>
      <div className="pagination">
        <div className='pagination-number'>
        <button onClick={prevPage} disabled={currentPage === 1}>
          {`<`}
        </button>
        {renderPaginationNumbers()}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
         {`>`}
        </button>

        </div>
      </div>
    </div>
  );
};

export default ProductList;
