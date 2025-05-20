import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CircularProgress
} from '@mui/material';
import axios from 'axios';
import Layout from '../components/Layout';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`https://fakestoreapi.com/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProduct(res.data))
      .catch(() => navigate('/products'));
  }, [id, navigate]);

  if (!product) {
    return (
      <Layout>
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box display="flex" justifyContent="center" mt={5}>
        <Card sx={{ maxWidth: 600, width: '100%', p: 2 }}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{ height: 300, objectFit: 'contain' }}
          />
          <CardContent>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Detalhes do Produto
            </Typography>

            <Typography variant="h6" gutterBottom>
              {product.title}
            </Typography>

            <Typography variant="body1" color="text.secondary" gutterBottom>
              {product.description}
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              R$ {product.price.toFixed(2)}
            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate('/products')}
              sx={{
                backgroundColor: '#1e3a8a',
                '&:hover': { backgroundColor: '#1e40af' },
                borderRadius: '20px',
              }}
            >
              Voltar
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
}
