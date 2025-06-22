import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UrunDetay = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Detay veri çekme hatası:', err));
  }, [productId]);

  if (!product) return <p>Yükleniyor...</p>;

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1rem' }}>
        {product.ad}
      </h2>
      {product.image && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
            width: '100%',
            height: '250px',
            overflow: 'hidden',
          }}
        >
          <img
            src={product.image}
            alt={product.ad}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
        </div>
      )}
      <p><strong>Açıklama:</strong> {product.description}</p>
      <p><strong>Fiyat:</strong> {product.fiyat} ₺</p>
    </div>
  );
};

export default UrunDetay;
