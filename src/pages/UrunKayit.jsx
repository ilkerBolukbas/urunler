import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UrunEklemeSayfasi() {
  const [urun, setUrun] = useState({
    ad: '',
    description: '',
    fiyat: '',
    image: '',  // Yeni alan eklendi
  });

  const [hata, setHata] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUrun({ ...urun, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!urun.ad || !urun.description || !urun.fiyat) {
      setHata('Lütfen tüm alanları doldurunuz.');
      return;
    }

    setHata('');

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(urun),
      });

      if (!response.ok) {
        throw new Error('Sunucudan hata döndü');
      }

      // Başarılıysa formu temizle ve ürünler sayfasına yönlendir
      setUrun({ ad: '', description: '', fiyat: '', image: '' });
      navigate('/urunler');
    } catch (error) {
      setHata('Ürün eklenirken bir hata oluştu.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Ürün Ekle</h2>
      {hata && <p className="text-red-500 mb-2">{hata}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Ürün Adı</label>
          <input
            type="text"
            name="ad"
            value={urun.ad}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Açıklama</label>
          <textarea
            name="description"
            value={urun.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Fiyat</label>
          <input
            type="number"
            name="fiyat"
            value={urun.fiyat}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Resim URL</label>
          <input
            type="text"
            name="image"
            value={urun.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Ekle
        </button>
      </form>
    </div>
  );
}
