import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BannerImage from '../assets/banner-hero/games/diablo-bg.png';

const Banner = () => {
  return (
    <Box
      sx={{
        height: '100vh', // Altura ocupando toda a viewport
        width: '100%', // Largura ocupando toda a largura disponível
        position: 'relative',
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        flexDirection: 'column',
        padding: '0 20px',
      }}
    >

      <Typography variant="h1" gutterBottom>
        Retorna à escuridão com o game Diablo IV
      </Typography>
      <Typography variant="h4" gutterBottom>
        O retorno de Lilith traz uma era de escuridão e sofrimento
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: '#00aeff',
          textTransform: 'none',
          mt: 2,
          '&:hover': {
            backgroundColor: '#0080ff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        Jogue agora
      </Button>
    </Box>
  );
};

export default Banner;
