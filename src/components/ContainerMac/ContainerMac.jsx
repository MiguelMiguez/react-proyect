import React, { useEffect, useState } from 'react';
import './ContainerMac.css';
import ProductCard from '../ProductCard/ProductCard';
import { getDocs, collection, query } from 'firebase/firestore';
import { db } from '../../services/config';

const ContainerMac = ({ addToCart }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'mac');
      const querySnapshot = await getDocs(productsCollection);
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  

  return (
    <div className='ContainerMac'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productData={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ContainerMac;
