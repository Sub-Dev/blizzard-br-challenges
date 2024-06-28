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
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import GrayBlocksIcon from '../assets/icons/gray-blocks-icon.svg';

import Diablo4Image from '../assets/banner-hero/icons/diablo_iv.png';
import HearthStoneImage from '../assets/banner-hero/icons/hearthstone.png';
import WowImage from '../assets/banner-hero/icons/wow.png';
import DiabloImage from '../assets/banner-hero/icons/diablo_immortal.png';
import StarcraftImage from '../assets/banner-hero/icons/starcraft_2.png';
import OverwatchImage from '../assets/banner-hero/icons/overwatch_2.png';
import Diablo2Image from '../assets/banner-hero/icons/diablo_ressurected.png';
import Diablo3Image from '../assets/banner-hero/icons/diablo_3.png';
import ArcadeImage from '../assets/banner-hero/icons/arcade.png';
import WarcraftImage from '../assets/banner-hero/icons/warcraft.png';
import HeroesOfStormImage from '../assets/banner-hero/icons/heroes_of_the_storm.png';
import StarcraftRemasterImage from '../assets/banner-hero/icons/starcraft.png';

import HeartStoneCamp from '../assets/banner-hero/logos-esportes/hearthstone_masters.png';
import WowCamp from '../assets/banner-hero/logos-esportes/wow_championship.png';
import OverwatchMundiCamp from '../assets/banner-hero/logos-esportes/overwatch_world.png';
import OverwatchLigaCamp from '../assets/banner-hero/logos-esportes/overwatch_league.png';
import StarcraftCamp from '../assets/banner-hero/logos-esportes/star_craft.png';

const pages = ['Jogos', 'Esportes', 'Loja', 'Notícias', 'Suporte'];
const jogosItems = [
  { name: 'Diablo® II ressurected', image: Diablo2Image },
  { name: 'Overwatch® 2', image: OverwatchImage },
  { name: 'World of Warcraft®', image: WowImage },
  { name: 'Hearthstone®', image: HearthStoneImage },
  { name: 'Heroes of the storm®', image: HeroesOfStormImage },
  { name: 'Warcraft® III Reforged', image: WarcraftImage },
  { name: 'Diablo® IV', image: Diablo4Image },
  { name: 'Diablo® Immortal', image: DiabloImage },
  { name: 'Diablo® III', image: Diablo3Image },
  { name: 'StarCraft® II', image: StarcraftImage },
  { name: 'StarCraft® Remastered', image: StarcraftRemasterImage },
  { name: 'Arcade da Blizzard®', image: ArcadeImage },
];

const esportesItems = [
  { name: 'Hearthstone® masters', image: HeartStoneCamp },
  { name: 'Campeonato Mundial de Arena WoW®', image: WowCamp },
  { name: 'StarCraft® II WCS', image: StarcraftCamp },
  { name: 'Copa Mundial de Overwatch®', image: OverwatchMundiCamp },
  { name: 'Liga de Overwatch®', image: OverwatchLigaCamp },
];

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
    <Box>
      <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', padding: '10px 5%' }}>
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
                        open={isJogosMenuOpen}
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
                            color: 'white',
                          },
                        }}
                      >
                        <Grid container spacing={2} sx={{ padding: '5%' }}>
                          {jogosItems.map((item, index) => (
                            <Grid item key={index} xs={6} md={4} lg={2}>
                              <MenuItem onClick={handleCloseJogosMenu} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={item.image} alt={item.name} style={{ marginBottom: '5px' }} />
                                {item.name}
                              </MenuItem>
                            </Grid>
                          ))}
                        </Grid>
                        <Stack direction="column" alignItems="flex-start" spacing={1} sx={{ padding: '10px', borderTop: '1px solid #3d4149' }}>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <img src={GrayBlocksIcon} alt="GreyBlocks Icon" style={{ marginRight: '5px' }} />
                            <Typography sx={{ color: '#777878' }}>Ver todos os jogos</Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <img src={GrayBlocksIcon} alt="GreyBlocks Icon" style={{ marginRight: '5px' }} />
                            <Typography sx={{ color: '#777878' }}>Aplicativo Battle.net</Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <img src={GrayBlocksIcon} alt="GreyBlocks Icon" style={{ marginRight: '5px' }} />
                            <Typography sx={{ color: '#777878' }}>Downloads</Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <img src={GrayBlocksIcon} alt="GreyBlocks Icon" style={{ marginRight: '5px' }} />
                            <Typography sx={{ color: '#777878' }}>Fóruns dos jogos</Typography>
                          </Stack>
                        </Stack>
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
                        open={isEsportesMenuOpen}
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
                          <MenuItem key={item.name} onClick={handleCloseEsportesMenu} sx={{ color: '#777878' }}>
                            <img src={item.image} alt={item.name} style={{ marginRight: '10px' }} />
                            {item.name}
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
        <Divider sx={{ borderBottomWidth: 2, borderColor: '#232323', my: 1, zIndex: 1200 }} />
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


    </Box>
  );
}

export default ResponsiveAppBar;
