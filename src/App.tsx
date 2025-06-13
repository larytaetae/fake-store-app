import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#e0f2ff'
    },
    primary: {
      main: '#1e3a8a'
    }
  }
});

const AppLayout = () => (
  <Box sx={{ width: '100%', px: 2 }}>
    <Outlet />
  </Box>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <ProductDetails /> },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
