import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Urunler = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => {
        if (!res.ok) throw new Error('Sunucu hatası');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Veri çekme hatası: ' + err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Ürünler yükleniyor...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <section>
      <h2>Ürünler</h2>
      {products.length === 0 ? (
        <p>Henüz ürün bulunmamaktadır.</p>
      ) : (
        <div>
          {products.map((urun) => (
            <div key={urun.id} style={{border: '1px solid #ccc', padding: '10px', marginBottom: '10px'}}>
              <h4>{urun.name}</h4>
              <img src={urun.image} alt={urun.name} width={150} style={{marginBottom: '10px'}} />
              <p>{urun.description}</p>
              <p>Fiyat: {urun.fiyat}₺</p>
              <Link to={`/urunler/${urun.id}`}>Detay</Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Urunler;
