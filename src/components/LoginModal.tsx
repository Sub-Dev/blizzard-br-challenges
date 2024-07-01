
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import BattleNetLogo from '../assets/logo-battle-net.png'; // Importe o logo do Battle.net
import backgroundImage from '../assets/login_bg.png'; // Importe a imagem de fundo
import { IconButton, Link, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '../assets/icons/close.svg';


interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth sx={{
      zIndex: 999999,

    }}>
      <DialogContent
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          height: '80vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          padding: '20px',
          boxShadow: 'inset 2000px -200px 0px rgba(0,0,0,0.4),inset -80px -300px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
          <IconButton onClick={onClose}>
            <img src={CloseIcon} alt="Close" />
          </IconButton>
        </Box>

        <Box sx={{ width: '100%', maxWidth: '75%', textAlign: 'center' }}>
          <img src={BattleNetLogo} alt="Battle.net Logo" style={{ marginBottom: '20px' }} />
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="E-mail ou telefone"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: '10px', borderRadius: '5px', backgroundColor: 'white' }}
          />
          <TextField
            margin="dense"
            id="password"
            label="Senha"
            type="password"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: '10px', borderRadius: '5px', backgroundColor: 'white' }}
          />

          <DialogActions>
            <Button variant="contained" sx={{ backgroundColor: '#00aeff', borderRadius: '5px', width: '100%', textTransform: 'none' }}>
              Conectar-se
            </Button>
          </DialogActions>
        </Box>

        <Typography sx={{ color: 'white', marginTop: '20px' }}>ou conecte-se com</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <IconButton
            aria-label="Google"
            color="inherit"
            sx={{
              bgcolor: 'white', marginRight: '10px', borderRadius: '5px',
              transition: 'all 0.3s ease', // Adiciona transição suave
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Cor de fundo ao passar o mouse
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra ao passar o mouse
                color: '#00aeff', // Mudar a cor do texto ao passar o mouse
                borderColor: '#00aeff', // Mudar a cor da borda ao passar o mouse
              },
            }}
          >
            <GoogleIcon />
          </IconButton>
          <IconButton
            aria-label="Apple"
            color="inherit"
            sx={{
              bgcolor: 'white', marginRight: '10px', borderRadius: '5px',
              transition: 'all 0.3s ease', // Adiciona transição suave
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Cor de fundo ao passar o mouse
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra ao passar o mouse
                color: '#00aeff', // Mudar a cor do texto ao passar o mouse
                borderColor: '#00aeff', // Mudar a cor da borda ao passar o mouse
              },
            }}
          >
            <AppleIcon />
          </IconButton>
          <IconButton
            aria-label="Facebook"
            color="inherit"
            sx={{
              bgcolor: 'white', borderRadius: '5px',
              transition: 'all 0.3s ease', // Adiciona transição suave
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Cor de fundo ao passar o mouse
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra ao passar o mouse
                color: '#00aeff', // Mudar a cor do texto ao passar o mouse
                borderColor: '#00aeff', // Mudar a cor da borda ao passar o mouse
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '8%' }}>
          <Link sx={{ color: '#00aeff', marginRight: '10px', cursor: 'pointer' }}>Crie uma conta</Link>
          <Typography sx={{ color: 'white' }}>Battle.net de graça</Typography>
        </Box>
        <Link sx={{ color: '#00aeff', marginTop: '10px', cursor: 'pointer' }}>Não consegue logar?</Link>
      </DialogContent>
    </Dialog >
  );
};

export default LoginModal;
