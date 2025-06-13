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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={5}
        px={2}
      >
        <Card
          sx={{
            maxWidth: 500,
            width: '100%',
            p: 2,
            borderRadius: 3,
            boxShadow: 4,
            backgroundColor: '#ffffff',
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              height: { xs: 250, sm: 300 },
              objectFit: 'contain',
              mb: 2,
            }}
          />
          <CardContent>
            <Typography
              variant="h5"
              fontWeight={600}
              mb={2}
              textAlign="center"
            >
              {product.title}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={2}
              sx={{ textAlign: 'justify' }}
            >
              {product.description}
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="primary"
              mb={3}
              textAlign="center"
            >
              R$ {product.price.toFixed(2)}
            </Typography>

            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate('/products')}
              sx={{
                backgroundColor: '#1e3a8a',
                '&:hover': { backgroundColor: '#1e40af' },
                borderRadius: '25px',
                py: 1,
              }}
            >
              Voltar para Produtos
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
}
