import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  AppBar,
  IconButton
} from '@mui/material';

import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function Layout({ children }: { children: React.ReactNode }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProductsClick = () => {
    navigate('/products');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Menu lateral */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1e1e2f',
            color: '#fff',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="h6">ReactShop</Typography>
          <Typography variant="caption">Loja Virtual</Typography>
        </Box>
        <List>
          <ListItem button onClick={handleProductsClick}>
            <ListItemIcon sx={{ color: 'white' }}>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="Produtos" />
          </ListItem>
        </List>
      </Drawer>

      {/* Barra superior com botão de logout */}
      <AppBar
        position="fixed"
        sx={{
          ml: `${drawerWidth}px`,
          width: `calc(100% - ${drawerWidth}px)`,
          backgroundColor: '#1e3a8a', // Azul escuro real para consistência
          display: 'flex',
          alignItems: 'flex-end',
          paddingRight: 2,
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            edge="end"
            color="inherit"
            onClick={logout}
            title="Sair"
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Conteúdo principal */}
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 3 }, mt: 8 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
