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
import LinuxIcon from '../assets/icons/icons8-linux-50.png';
import { Link } from '@mui/material';
import PhoneIcon from '../assets/icons/phone-icon.svg';
import BuyIcon from '../assets/icons/buy-icon.svg';
import CircleIcon from '../assets/icons/circles-icon.svg';
import ListIcon from '../assets/icons/listitems-icon.svg';

const detectOS = () => {
  const userAgent = window.navigator.userAgent;
  if (userAgent.indexOf('Win') !== -1) return 'Windows';
  if (userAgent.indexOf('Mac') !== -1) return 'MacOS';
  if (userAgent.indexOf('Linux') !== -1) return 'Linux';
  return 'Unknown';
};

const os = detectOS();

const Footer = () => {
  const [osIcon, setOsIcon] = React.useState(<MicrosoftIcon />);

  React.useEffect(() => {
    switch (os) {
      case 'Windows':
        setOsIcon(<MicrosoftIcon />);
        break;
      case 'MacOS':
        setOsIcon(<AppleIcon />);
        break;
      case 'Linux':
        setOsIcon(<img src={LinuxIcon} alt="Linux Icon" style={{ width: '24px', height: '24px' }} />);
        break;
      default:
        setOsIcon(<MicrosoftIcon />); // Default icon
        break;
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh', // Altura mínima ocupando toda a viewport
        width: '100%', // Largura ocupando toda a largura disponível
        position: 'relative',
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Mantém o texto à esquerda e as imagens à direita
        color: 'white',
        padding: '90px',

        '@media (max-width: 768px)': {
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '50px 20px',
        },
      }}
    >
      {/* Texto à esquerda */}
      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '5%',
        '@media (max-width: 768px)': {
          alignItems: 'center',
          textAlign: 'center',
        },
        '@media (max-width: 376px)': {
          alignItems: 'flex-start',
          textAlign: 'left',
          padding: '90px -50px'

        },
      }}>
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
            mt: 1,
            '&:hover': {
              backgroundColor: '#0080ff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            },
            marginBottom: '8%',
            width: '80%',
            fontWeight: '600',
            '@media (max-width: 376px)': {
              width: '100%'
            },

          }}
          startIcon={osIcon}
        >
          Baixar para {os}
        </Button>
        <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '5px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
            <img src={PhoneIcon} alt="Phone Icon" style={{ marginRight: '15px', marginBottom: '-12%', width: '24px', height: '24px' }} />
            Também disponível como
          </Box>
          <Link sx={{ marginLeft: '18%' }} color="inherit">aplicativo móvel</Link>
        </Typography>
      </Box>

      {/* Imagens à direita */}
      <Box sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        maxWidth: '70%',
      }}>
        <img src={AppImage} alt="App Image" style={{ maxWidth: '100%', height: 'auto' }} />
        <img src={AppMiniImage} alt="App Mini Image" style={{
          position: 'absolute',
          top: '50%',
          left: '40%',
          maxWidth: '100%',
          transform: 'translate(-20%, -10%)',
        }} />
      </Box>
    </Box>
  );
};

export default Footer;
