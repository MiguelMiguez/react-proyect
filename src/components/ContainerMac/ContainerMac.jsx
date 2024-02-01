import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ContainerMac.css';
import { useMyContext } from '../MyContext/MyContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/config';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const ContainerMac = () => {
  const { setCategory, selectedCategory, sortOrder, addToCart } = useMyContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'mac');
        const querySnapshot = await getDocs(productsCollection);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredProducts = selectedCategory
          ? productsData.filter((product) => product.category === selectedCategory)
          : productsData;

        const sortedProducts = sortOrder === 'MenToMay'
          ? filteredProducts.sort((a, b) => a.price - b.price)
          : sortOrder === 'MayToMen'
          ? filteredProducts.sort((a, b) => b.price - a.price)
          : filteredProducts;

        setProducts(sortedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory, sortOrder]);

  return (
    <div>
      <div className='ContainerAll'>
        <ItemListContainer />
      </div>
      <div className='ContainerMac'>
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

export default ContainerMac;
