import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ error, setError] = useState(null);
   
  const fetchData = () =>{
    setIsLoading(true);
    setError(null);
    fetch('https://dummyjson.com/products')
    .then( (res) => {
      if(!res.ok) {
        throw new Error(' Data could not be fetched.')
      }
      return res.json();
    }
    )
    .then( ( data ) => {
      setIsLoading(false);
      setProducts(data.products);
  }).catch((error) => setError(error.message))
  .finally(() => setIsLoading(false));
    
  }
  useEffect( () =>{
      fetchData();
  }, [])
  return (
    <>
    <div> 
      <h1> All Products </h1>
       {isLoading && <p>Product Loading...</p>}
        {error && <p>{error}</p>}
      <section className="products-section">
        { products && products.length >0 && products.map(( product) =>{
          const { id, title, description, price, category } = product;
          return <article key={id}>
            <h2> Title:{ title}</h2>
            <p> Category: { category}</p>
            <p> Price: { price }</p>
            <p> Description: { description && description.substring(0, 100)} ....</p>
            <Link to={`/product-details/${id}`}>
              Show Details
            </Link>
          </article>
        })}
      </section>
    </div>
    </>
    
  )
}

export default Product