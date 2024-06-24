import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/logo-blizzard.png';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import '@fontsource/roboto/400.css';
import Divider from '@mui/material/Divider';

const pages = ['Jogos', 'Esportes', 'Loja', 'Notícias', 'Suporte'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <AppBar
        position="static"
        sx={{
          bgcolor: 'transparent',
          boxShadow: 'none',
          padding: '10px 5%',
          
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <img src={logo} alt="Blizzard Logo" style={{ maxWidth: 160}} />
            </Box>

            {/* Ícone de Menu para dispositivos móveis */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  bgcolor: 'transparent',
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="inherit" sx={{ textTransform: 'none' }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Botões de navegação para desktops */}
            <Box sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' ,mr:'5%'}}
              >
                {page}
              </Button>
            ))}
          </Box>

            {/* Botões à direita */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', textTransform: 'none', mr: 1 }}>
                Criar Conta
              </Button>
              <Button variant="contained" sx={{ background: '#00aeff', textTransform: 'none' }}>
                <PersonOutlineIcon sx={{ mr: 1 }} />
                Logar
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider sx={{ borderBottomWidth: 2, borderColor: '#232323', my: 1 }} />

    </header>
  );
}

export default ResponsiveAppBar;
