import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('mor_2314');
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
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          ClickCart
        </Typography>
        <Typography variant="body2" gutterBottom>
          Bem-vindo! Faça seu login para continuar.
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
          onClick={handleLogin}
          disabled={loading}
          sx={{
            backgroundColor: '#1e3a8a',
            '&:hover': { backgroundColor: '#1e40af' },
            borderRadius: '25px',
            py: 1,
            fontWeight: 600,
            fontSize: '1rem',
          }}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
      </Paper>
    </Box>
  );
}
