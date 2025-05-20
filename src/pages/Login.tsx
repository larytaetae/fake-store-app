import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('mor_2314'); // valor de teste
  const [password, setPassword] = useState('83r5^_');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    const success = await login(username, password);
    if (success) {
      navigate('/products');
    } else {
      setError('Usuário ou senha inválido');
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(to bottom right, #dbeafe, #93c5fd)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={4} sx={{ padding: 4, width: 350, borderRadius: 3 }}>
        <Typography variant="h5" align="center" mb={3}>
          Login - ReactShop
        </Typography>

        <TextField
          fullWidth
          label="Usuário"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 3 }}
        />

        {error && (
          <Typography color="error" fontSize="0.875rem" mb={2}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#1e3a8a',
            '&:hover': { backgroundColor: '#1e40af' },
            borderRadius: '20px',
            paddingY: 1,
          }}
          onClick={handleLogin}
          disabled={loading}
        >
          Entrar
        </Button>
      </Paper>
    </Box>
  );
}
