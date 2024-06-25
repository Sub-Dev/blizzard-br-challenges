import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FooterImage from '../assets/footer-background.png';
import AppImage from '../assets/ilustrations/app.png';
import AppMiniImage from '../assets/ilustrations/app-mini.png';
import BattleNetLogoImage from '../assets/logo-battle-net.png';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import AppleIcon from '@mui/icons-material/Apple';
import LinuxIcon from '../assets/icons8-linux-50.png';
import { Link } from '@mui/material';
import PhoneIcon from '../assets/phone-icon.svg';
import BuyIcon from '../assets/buy-icon.svg';
import CircleIcon from '../assets/circles-icon.svg';
import ListIcon from '../assets/listitems-icon.svg';

const Footer = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh', // Altura mínima ocupando toda a viewport
        width: '100%', // Largura ocupando toda a largura disponível
        position: 'relative',
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left', // Alinha o texto à esquerda
        color: 'white',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '50%', marginRight: '60%', marginTop: '10%' }}>
        <img src={BattleNetLogoImage} alt="Battle.net Logo" style={{ maxWidth: '100%', marginBottom: '20px' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8%' }}>
          Baixe agora o Battle.net
        </Typography>
        <Typography variant="h6" sx={{ color: '#737781', display: 'flex', alignItems: 'center', marginBottom: '8%' }}>
          <img src={ListIcon} alt="List Icon" style={{ marginRight: '10px', width: '24px', height: '24px' }} />
          Seus jogos em um só lugar
        </Typography>
        <Typography variant="h6" sx={{ color: '#737781', display: 'flex', alignItems: 'center', marginBottom: '8%' }}>
          <img src={CircleIcon} alt="Circle Icon" style={{ marginRight: '10px', width: '24px', height: '24px' }} />
          Conecte-se aos seus amigos
        </Typography>
        <Typography variant="h6" sx={{ color: '#737781', display: 'flex', alignItems: 'center', marginBottom: '8%' }}>
          <img src={BuyIcon} alt="Buy Icon" style={{ marginRight: '10px', width: '24px', height: '24px' }} />
          Compre jogos e itens digitais
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
            marginBottom: '8%',
            width: '60%'
          }}
          startIcon={<MicrosoftIcon />}
        >
          Baixar para Windows
        </Button>
        <Typography sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={PhoneIcon} alt="Phone Icon" style={{ marginRight: '20px', width: '24px', height: '24px', marginBottom: '-20px' }} />
            Também disponível como
          </div>
          <Typography sx={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', marginLeft: '-20px' }}>
            <Link color="inherit">aplicativo móvel</Link>
          </Typography>
        </Typography>


      </Box>
      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', maxWidth: '80%', marginTop: '20px' }}>
        <img src={AppImage} alt="App Image" style={{ maxWidth: '100%', height: 'auto' }} />
        <img src={AppMiniImage} alt="App Mini Image" style={{ position: 'absolute', top: '45%', right: '20%', maxWidth: '80%' }} />
      </Box>
    </Box >
  );
};

export default Footer;
