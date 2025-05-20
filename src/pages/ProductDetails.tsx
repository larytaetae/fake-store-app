import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  // você pode adicionar mais campos da API se quiser
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    const fetchProduct = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProduct(response.data);
      } catch (err) {
        setError('Erro ao carregar detalhes do produto.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  return (
    <Container sx={{ mt: 4 }}>
      <Button variant="outlined" onClick={() => navigate('/products')} sx={{ mb: 2 }}>
        Voltar
      </Button>
      {loading && <Typography>Carregando detalhes...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {product && (
        <>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <img src={product.image} alt={product.title} width={150} />
          <Typography variant="h5" gutterBottom>
            R$ {product.price}
          </Typography>
          <Typography>{product.description}</Typography>
        </>
      )}
    </Container>
  );
}
