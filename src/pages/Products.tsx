import { Container, Paper, Table, TableBody, TableCell, TableContainer, 
         TableHead, TableRow, Button } from '@mui/material';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Produto A", price: 59.90, image: "https://via.placeholder.com/50" },
  { id: 2, name: "Produto B", price: 120.00, image: "https://via.placeholder.com/50" },
  // ... outros produtos
];

const ProductsList = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TableContainer component={Paper} elevation={3}>
        <Table aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell>Imagem</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((prod) => (
              <TableRow key={prod.id}>
                <TableCell>
                  <img src={prod.image} alt={prod.name} width="50" />
                </TableCell>
                <TableCell>{prod.name}</TableCell>
                <TableCell>
                  {prod.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    Detalhes
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
