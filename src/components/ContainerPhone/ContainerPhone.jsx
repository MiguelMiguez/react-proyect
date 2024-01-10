import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ContainerPhone.css';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../services/config';

const ContainerPhone = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'celulares');
      const querySnapshot = await getDocs(productsCollection);
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        quantity: 1, 
      }));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div className='ContainerPhone'>
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

export default ContainerPhone;
