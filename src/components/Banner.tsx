import * as React from 'react';
import Button from '@mui/material/Button';
import BannerDiabloImage from '../assets/banner-hero/games/diablo-bg.png';
import BannerHeartImage from '../assets/banner-hero/games/hearthstone-bg.png';
import BannerWowImage from '../assets/banner-hero/games/wow-bg.png';
import BannerDiablo2Image from '../assets/banner-hero/games/diablo-2-bg.jpg';
import BannerStarcraftImage from '../assets/banner-hero/games/starcraft-bg.png';

import LogoDiablo4Image from '../assets/banner-hero/games/diablo-logo.png';
import LogoHeartImage from '../assets/banner-hero/games/hearthstone-logo.png';
import LogoWowImage from '../assets/banner-hero/games/wow-logo.png';
import LogoDiablo2Image from '../assets/banner-hero/games/diablo-2-logo.png';
import LogoStarcraftImage from '../assets/banner-hero/games/starcraft-logo.png';

import Diablo4Image from '../assets/banner-hero/icons/game-1.png';
import HearthStoneImage from '../assets/banner-hero/icons/game-2.png';
import WowImage from '../assets/banner-hero/icons/game-3.png';
import DiabloImage from '../assets/banner-hero/icons/game-4.png';
import StarcraftImage from '../assets/banner-hero/icons/game-5.png';

import { IconButton, Typography, Box } from '@mui/material';

const Banner = () => {
  const [selectedGame, setSelectedGame] = React.useState('Diablo4');
  const [hoveredGame, setHoveredGame] = React.useState('');

  const handleGameClick = (gameName) => {
    setSelectedGame(gameName);
  };

  const handleMouseEnter = (gameName) => {
    setHoveredGame(gameName);
  };

  const handleMouseLeave = () => {
    setHoveredGame('');
  };

  // Objeto com os caminhos das imagens de fundo para cada jogo
  const gameBackgrounds = {
    Diablo4: BannerDiabloImage,
    HeartStone: BannerHeartImage,
    Wow: BannerWowImage,
    Diablo: BannerDiablo2Image,
    Starcraft: BannerStarcraftImage,
  };

  // Objeto com os caminhos dos logos para cada jogo
  const gameLogos = {
    Diablo4: LogoDiablo4Image,
    HeartStone: LogoHeartImage,
    Wow: LogoWowImage,
    Diablo: LogoDiablo2Image,
    Starcraft: LogoStarcraftImage,

  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        flexDirection: 'row-reverse',
        padding: '0 20px',
        backgroundImage: `url(${gameBackgrounds[selectedGame] || BannerDiabloImage})`, // Seleciona dinamicamente a imagem de fundo com base no jogo selecionado
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1300,
        boxShadow:
          'inset 500px 50px 50px -50px rgba(0, 0, 0, 0.3), inset -500px -500px 50px -50px rgba(0, 0, 0, 0.3)',
        transition: 'background-image 0.3s ease-in-out', // Transição suave para a mudança de imagem de fundo
      }}
    >
      {/* Menu lateral com botões de jogos */}
      <Box sx={{ marginLeft: '25%' }}>
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            marginLeft: '10%'
          }}
        >
          <IconButton
            aria-label="image-diablo4"
            style={{
              marginBottom: '10px',
              opacity: selectedGame === 'Diablo4' ? 1 : hoveredGame === 'Diablo4' ? 0.8 : 0.5,
              filter: selectedGame !== 'Diablo4' ? 'grayscale(100%)' : 'none',
              transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
            }}
            onClick={() => handleGameClick('Diablo4')}
            onMouseEnter={() => handleMouseEnter('Diablo4')}
            onMouseLeave={handleMouseLeave}
          >
            <img src={Diablo4Image} alt="Diablo 4 Button" style={{ width: '50px', height: 'auto' }} />
          </IconButton>
          <IconButton
            aria-label="image-heart"
            style={{
              marginBottom: '10px',
              opacity: selectedGame === 'HeartStone' ? 1 : hoveredGame === 'HeartStone' ? 0.8 : 0.5,
              filter: selectedGame !== 'HeartStone' ? 'grayscale(100%)' : 'none',
              transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
            }}
            onClick={() => handleGameClick('HeartStone')}
            onMouseEnter={() => handleMouseEnter('HeartStone')}
            onMouseLeave={handleMouseLeave}
          >
            <img src={HearthStoneImage} alt="HeartStone Button" style={{ width: '50px', height: 'auto' }} />
          </IconButton>
          <IconButton
            aria-label="image-wow"
            style={{
              marginBottom: '10px',
              opacity: selectedGame === 'Wow' ? 1 : hoveredGame === 'Wow' ? 0.8 : 0.5,
              filter: selectedGame !== 'Wow' ? 'grayscale(100%)' : 'none',
              transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
            }}
            onClick={() => handleGameClick('Wow')}
            onMouseEnter={() => handleMouseEnter('Wow')}
            onMouseLeave={handleMouseLeave}
          >
            <img src={WowImage} alt="Wow Button" style={{ width: '50px', height: 'auto' }} />
          </IconButton>
          <IconButton
            aria-label="image-diablo"
            style={{
              marginBottom: '10px',
              opacity: selectedGame === 'Diablo' ? 1 : hoveredGame === 'Diablo' ? 0.8 : 0.5,
              filter: selectedGame !== 'Diablo' ? 'grayscale(100%)' : 'none',
              transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
            }}
            onClick={() => handleGameClick('Diablo')}
            onMouseEnter={() => handleMouseEnter('Diablo')}
            onMouseLeave={handleMouseLeave}
          >
            <img src={DiabloImage} alt="Diablo Button" style={{ width: '50px', height: 'auto' }} />
          </IconButton>
          <IconButton
            aria-label="image-star"
            style={{
              marginBottom: '10px',
              opacity: selectedGame === 'Starcraft' ? 1 : hoveredGame === 'Starcraft' ? 0.8 : 0.5,
              filter: selectedGame !== 'Starcraft' ? 'grayscale(100%)' : 'none',
              transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
            }}
            onClick={() => handleGameClick('Starcraft')}
            onMouseEnter={() => handleMouseEnter('Starcraft')}
            onMouseLeave={handleMouseLeave}
          >
            <img src={StarcraftImage} alt="Starcraft Button" style={{ width: '50px', height: 'auto' }} />
          </IconButton>
        </Box>

        {/* Conteúdo principal do banner */}
        <Box sx={{ flex: 1, textAlign: 'left', marginRight: '60%', marginBottom: '-5%' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
            {selectedGame === 'Diablo4' && (
              <>
                Retorna à escuridão com o game Diablo IV
              </>
            )}
            {selectedGame === 'HeartStone' && (
              <>
                Novo pacote de expansão de Hearthstone
              </>
            )}
            {selectedGame === 'Wow' && (
              <>
                Desbrave as Terras Sombrias em Shadowlands!
              </>
            )}
            {selectedGame === 'Diablo' && (
              <>
                Prepare-se para o retorno de Diablo
              </>
            )}
            {selectedGame === 'Starcraft' && (
              <>
                Comande a guerra em Starcraft
              </>
            )}
            {!selectedGame && (
              <>
                Retorna à escuridão com o game Diablo IV
              </>
            )}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {selectedGame === 'Diablo4' && 'O retorno de Lilith traz uma era de escuridão e sofrimento'}
            {selectedGame === 'HeartStone' && 'A Horda e a Aliança se encontraram no Vale Alterac para lutar'}
            {selectedGame === 'Wow' && 'O que jaz além do mundo que você conhece?'}
            {selectedGame === 'Diablo' && 'Prepare-se para enfrentar as trevas mais uma vez'}
            {selectedGame === 'Starcraft' && 'Domine o campo de batalha com estratégia e precisão'}
            {!selectedGame && 'O retorno de Lilith traz uma era de escuridão e sofrimento'}
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginRight: '5%',

            height: '100%',
          }}
        >
          {selectedGame && (
            <img
              src={gameLogos[selectedGame] || LogoDiablo4Image}
              alt={`${selectedGame || 'Diablo4'} Logo`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                marginRight: '10px',
              }}
            />
          )}
        </Box>

      </Box>

    </Box >

  );
};

export default Banner;
