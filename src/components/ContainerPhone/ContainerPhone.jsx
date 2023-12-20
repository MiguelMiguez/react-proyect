import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ContainerPhone.css';

const ContainerPhone = React.forwardRef((props, ref) => {
  const products = [
    {
      id: 1,
      name: 'IPhone 15',
      image: 'https://f.fcdn.app/imgs/02356c/www.covercompany.com.uy/coveuy/7ed8/webp/catalogo/2-4465_11386_1/1500-1500/iphone-15-pro-max-256gb-8gb-ram-5g-6-7-chip-a17-pro-bionic-oled-super-retina-xdr-blue.jpg',
      color: 'Blue',
      price: 200000,
      description: '256Gb, 8Gb RAM, 5G, 6.7", Chip A17 PRO Bionic, OLED Super Retina XDR - Blue'
    },
    {
      id: 2,
      name: 'iPhone 14',
      image: 'https://f.fcdn.app/imgs/bb416b/www.covercompany.com.uy/coveuy/1cc1/webp/catalogo/2-3386_9521_1/1500-1500/iphone-14-128gb-6gb-ram-5g-6-1-chip-a15-bionic-oled-retina-xdr-midnight.jpg',
      color: 'Rojo',
      price: 200000,
      description: '128Gb, 6Gb RAM, 5G, 6.1", Chip A15 Bionic, OLED Retina XDR - Midnight'
    },
    {
      id: 3,
      name: 'iPhone 14',
      image: 'https://f.fcdn.app/imgs/bb416b/www.covercompany.com.uy/coveuy/1cc1/webp/catalogo/2-3386_9521_1/1500-1500/iphone-14-128gb-6gb-ram-5g-6-1-chip-a15-bionic-oled-retina-xdr-midnight.jpg',
      color: 'Rojo',
      price: 200000,
      description: '128Gb, 6Gb RAM, 5G, 6.1", Chip A15 Bionic, OLED Retina XDR - Midnight'
    }
  ];

  return (
    <div ref={ref} className='ContainerPhone'>
      {products.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </div>
  );
});

export default ContainerPhone;
