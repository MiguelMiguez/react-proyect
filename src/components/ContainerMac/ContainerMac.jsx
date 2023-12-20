import React from 'react'
import './ContainerMac.css'
import ProductCard from '../ProductCard/ProductCard';

const ContainerMac = () => {
    const products = [
      {
          id: 1,
          name: 'Macbook Air 13.6"',
          image: 'https://f.fcdn.app/imgs/c1e428/www.covercompany.com.uy/coveuy/12a4/webp/catalogo/2-3240_11463_1/1200x1200/macbook-air-13-6-chip-m2-256gb-ssd-8gb-ram-2022-espanol-midnight.jpg',
          color: 'Blue',
          price: 1000,
          description: 'Chip M2 256GB SSD / 8GB RAM MQKR3CI/A - Space grey'
        },
      {
          id: 2,
          name: 'MacBook Air 15.3"',
          image: 'https://f.fcdn.app/imgs/c1bdf2/www.covercompany.com.uy/coveuy/3c76/webp/catalogo/2-4454_11368_1/1200x1200/apple-macbook-air-notebook-15-3-m2-8gb-256gb-ssd-mqkw3ci-a-midnight.jpg',
          color: 'Rojo',
          price: 1500,
          description: 'Chip M2 256GB SSD / 8GB RAM MQKR3CI/A - Space grey'
        },
      {
          id: 3,
          name: 'MacBook Air 15.3"',
          image: 'https://f.fcdn.app/imgs/442800/www.covercompany.com.uy/coveuy/3dd7/webp/catalogo/2-4455_11369_1/1200x1200/apple-macbook-air-15-3-chip-m2-256gb-ssd-8gb-ram-mqkr3ci-a-space-grey.jpg',
          color: 'Rojo',
          price: 2000,
          description: 'Chip M2 256GB SSD / 8GB RAM MQKR3CI/A - Space grey'
        },  
      
    ];
  
    return (
      <div className='ContainerMac'>
        {products.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </div>
    );
  };

export default ContainerMac