import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/config';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useMyContext } from '../MyContext/MyContext';

const ItemDetailContainer = () => {
  const { collection, productId } = useParams();
  const { setProduct, productInfo } = useMyContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, collection, productId));
        if (productDoc.exists()) {
          setProduct({ id: productDoc.id, ...productDoc.data() });
        } else {
          console.log('No se encontró el producto');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [collection, productId, setProduct]);

  return (
    <div className='ItemDetailContainer'>
      {productInfo ? <ItemDetail product={productInfo} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;