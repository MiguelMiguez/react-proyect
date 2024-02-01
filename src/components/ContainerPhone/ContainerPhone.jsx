import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ContainerPhone.css';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../services/config';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { useMyContext } from '../MyContext/MyContext';

const ContainerPhone = ({ forwardedRef }) => {
  const { sortOrder, addToCart } = useMyContext();
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

      const sortedProducts = sortOrder === 'MenToMay'
        ? [...productsData].sort((a, b) => a.price - b.price)
        : sortOrder === 'MayToMen'
        ? [...productsData].sort((a, b) => b.price - a.price)
        : productsData;

      setProducts(sortedProducts);
    };

    fetchProducts();
  }, [sortOrder]);

  return (
    <div>
      <div className='ContainerAll'>
        <ItemListContainer />
      </div>
      <div className='ContainerPhone' ref={forwardedRef}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productData={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ContainerPhone;