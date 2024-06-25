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
import logo from '../assets/logo-blizzard.png';
import game1 from '../assets/banner-hero/icons/game-1.png';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import '@fontsource/roboto/400.css';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const pages = ['Jogos', 'Esportes', 'Loja', 'Notícias', 'Suporte'];
const jogosItems = ['Overwatch', 'Diablo', 'StarCraft'];
const esportesItems = ['Overwatch League', 'World of Warcraft Arena'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElJogos, setAnchorElJogos] = React.useState<null | HTMLElement>(null);
  const [anchorElEsportes, setAnchorElEsportes] = React.useState<null | HTMLElement>(null);

  const [isJogosMenuOpen, setIsJogosMenuOpen] = React.useState(false);
  const [isEsportesMenuOpen, setIsEsportesMenuOpen] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenJogosMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElJogos(event.currentTarget);
    setIsJogosMenuOpen(true);
  };

  const handleCloseJogosMenu = () => {
    setAnchorElJogos(null);
    setIsJogosMenuOpen(false);
  };

  const handleOpenEsportesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElEsportes(event.currentTarget);
    setIsEsportesMenuOpen(true);
  };

  const handleCloseEsportesMenu = () => {
    setAnchorElEsportes(null);
    setIsEsportesMenuOpen(false);
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
              <img src={logo} alt="Blizzard Logo" style={{ maxWidth: 160 }} />
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
              {pages.map((page) => {
                if (page === 'Jogos') {
                  return (
                    <React.Fragment key={page}>
                      <Button
                        onClick={handleOpenJogosMenu}
                        endIcon={isJogosMenuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        sx={{
                          my: 2,
                          color: 'white',
                          textTransform: 'none',
                          mr: '5%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 174, 255, 0.2)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            color: '#00aeff',
                          },
                        }}
                      >
                        {page}
                      </Button>

                      <Menu
                        id="jogos-menu"
                        anchorEl={anchorElJogos}
                        open={Boolean(anchorElJogos)}
                        onClose={handleCloseJogosMenu}
                        MenuListProps={{
                          'aria-labelledby': 'jogos-button',
                          sx: {
                            width: '100vw', // Ajustando largura para ocupar a tela
                            maxWidth: '100%',
                          },
                        }}
                        PaperProps={{
                          sx: {
                            width: '100%',
                            maxWidth: '100%',
                            bgcolor: '#0c0f13',
                            borderRadius: 0,
                          },
                        }}
                      >
                        {jogosItems.map((item) => (
                          <MenuItem key={item} onClick={handleCloseJogosMenu} sx={{ color: '#777878' }}>
                            <img src={game1} alt={item} style={{ marginRight: '10px' }} />
                            {item}
                          </MenuItem>
                        ))}
                      </Menu>
                     
                    </React.Fragment>
                  );
                } else if (page === 'Esportes') {
                  return (
                    <React.Fragment key={page}>
                      <Button
                        onClick={handleOpenEsportesMenu}
                        endIcon={isEsportesMenuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        sx={{
                          my: 2,
                          color: 'white',
                          textTransform: 'none',
                          mr: '5%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 174, 255, 0.2)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            color: '#00aeff',
                          },
                        }}
                      >
                        {page}
                      </Button>
                      <Menu
                        id="esportes-menu"
                        anchorEl={anchorElEsportes}
                        open={Boolean(anchorElEsportes)}
                        onClose={handleCloseEsportesMenu}
                        MenuListProps={{
                          'aria-labelledby': 'esportes-button',
                          sx: {
                            width: '100vw', // Ajustando largura para ocupar a tela
                            maxWidth: '100%',
                          },
                        }}
                        PaperProps={{
                          sx: {
                            width: '100%',
                            maxWidth: '100%',
                            bgcolor: '#0c0f13',
                            borderRadius: 0,
                          },
                        }}
                        
                      >
                        {esportesItems.map((item) => (
                          <MenuItem key={item} onClick={handleCloseEsportesMenu} sx={{ color: '#777878' }}>
                            <img src={game1} alt={item} style={{ marginRight: '10px' }} />
                            {item}
                          </MenuItem>
                        ))}
                      </Menu>
                 
                    </React.Fragment>
                  );
                } else {
                  return (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: 'white',
                        display: 'block',
                        textTransform: 'none',
                        mr: '5%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 174, 255, 0.2)',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          color: '#00aeff',
                        },
                      }}
                    >
                      {page}
                    </Button>
                  );
                }
              })}
            </Box>

            {/* Botões à direita */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  textTransform: 'none',
                  mr: 1,
                  '@media (max-width: 600px)': {
                    padding: '5px 10px', // Reduzir o padding para dispositivos móveis
                    fontSize: '0.75rem' // Diminuir o tamanho da fonte
                  },
                  transition: 'all 0.3s ease', // Adiciona transição suave
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Cor de fundo ao passar o mouse
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra ao passar o mouse
                    color: '#00aeff', // Mudar a cor do texto ao passar o mouse
                    borderColor: '#00aeff', // Mudar a cor da borda ao passar o mouse
                  },
                }}
              >
                Criar Conta
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: '#00aeff',
                  textTransform: 'none',
                  transition: 'all 0.3s ease', // Adiciona transição suave
                  '&:hover': {
                    backgroundColor: '#0080ff', // Cor de fundo ao passar o mouse
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra ao passar o mouse
                  },
                }}
              >
                <PersonOutlineIcon sx={{ mr: 1 }} />
                Logar
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ position: 'relative', width: '100%', height: '2px' }}>
        <Divider sx={{ borderBottomWidth: 2, borderColor: '#232323', my: 1,zIndex: 1200}} />
        <Box
          sx={{
            position: 'absolute',
            bottom: '0',
            left: '8%',
            transform: 'translateX(-50%)',
            width: '3%',
            height: '2px',
            backgroundColor: '#00aeff',
          }}
        />
      </Box>
    </header>
  );
}

export default ResponsiveAppBar;
