import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  Box,
  Button,
  Chip,
  TablePagination
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('https://fakestoreapi.com/products', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProducts(res.data));
  }, []);

  const getStatus = (id: number) => {
    const statuses = ['shipped', 'completed', 'processing'];
    return statuses[id % statuses.length];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'processing':
        return 'info';
      case 'shipped':
      default:
        return 'error';
    }
  };

  const getRandomDate = (id: number) => {
    const base = new Date(2023, 0, 1);
    base.setDate(base.getDate() + id);
    return base.toLocaleDateString('pt-BR');
  };

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: 2,
          p: { xs: 2, sm: 3 },
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Lista de Produtos
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Imagem</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Criado em</TableCell>
              <TableCell>Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => {
                const status = getStatus(product.id);
                const color = getStatusColor(status);
                const date = getRandomDate(product.id);

                return (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Avatar
                        src={product.image}
                        variant="square"
                        sx={{ width: 56, height: 56 }}
                      />
                    </TableCell>
                    <TableCell sx={{ maxWidth: 200 }}>{product.title}</TableCell>
                    <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Chip label={status} color={color as any} size="small" />
                    </TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          backgroundColor: '#1e3a8a',
                          '&:hover': { backgroundColor: '#1e40af' },
                          borderRadius: '12px',
                          px: 2,
                          py: 0.5
                        }}
                        onClick={() => navigate(`/products/${product.id}`)}
                      >
                        Detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={products.length}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          rowsPerPageOptions={[10]}
          labelRowsPerPage="Produtos por página"
        />
      </Box>
    </Layout>
  );
}
