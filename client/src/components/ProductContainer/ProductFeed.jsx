import { useEffect, useState } from "react"
import axios from 'axios'
import ProductCard from "../ProductCard/ProductCard";
import styles from './ProductFeed.module.css'

export default function ProductFeed({ displaySideBar }) {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts()
    console.log(products)
  },[])

  return (
    <div className={`${styles.productContainer} ${displaySideBar ? '' : styles.fullWidth}`}>
      {products.map((item) => (
          <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}
