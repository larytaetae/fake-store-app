import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';

import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function Layout({ children }: { children: React.ReactNode }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleProductsClick = () => {
    navigate('/products');
    if (isMobile) setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={isMobile ? handleDrawerToggle : undefined} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ClickCart
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleProductsClick} sx={{ px: 2 }}>
            <ListItemIcon>
              <InventoryIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Produtos" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar superior */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#1e3a8a',
          zIndex: theme.zIndex.drawer + 1,
          px: 2,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            ClickCart
          </Typography>
          <IconButton color="inherit" edge="end" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <Box component="nav">
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#1e1e2f',
              color: '#fff',
            },
          }}
        >
          <Toolbar />
          {drawer}
        </Drawer>
      </Box>

      {/* Conteúdo principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          mt: 8,
          ml: { sm: `${drawerWidth}px` },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
