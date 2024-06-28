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

import Diablo4Gif from '../assets/banner-hero/games/diablo-animation.gif';
import HeartGif from '../assets/banner-hero/games/hearthstone-animation.gif';
import WowGif from '../assets/banner-hero/games/wow-animation.gif';
import Diablo2Gif from '../assets/banner-hero/games/diablo-2-animation.gif';
import StarcraftGif from '../assets/banner-hero/games/starcraft-animation.gif';

import Diablo4GifCover from '../assets/banner-hero/games/diablo-animation-cover.png';
import HeartGifCover from '../assets/banner-hero/games/hearthstone-animation-cover.png';
import WowGifCover from '../assets/banner-hero/games/wow-animation-cover.png';
import Diablo2GifCover from '../assets/banner-hero/games/diablo-2-animation-cover.png';
import StarcraftGifCover from '../assets/banner-hero/games/starcraft-animation-cover.png';

import Diablo4Image from '../assets/banner-hero/icons/diablo_iv.png';
import HearthStoneImage from '../assets/banner-hero/icons/hearthstone.png';
import WowImage from '../assets/banner-hero/icons/wow.png';
import DiabloImage from '../assets/banner-hero/icons/diablo_ressurected.png';
import StarcraftImage from '../assets/banner-hero/icons/starcraft_2.png';

import { IconButton, Typography, Box, LinearProgress } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const Banner = () => {
  const [selectedGame, setSelectedGame] = React.useState('Diablo4');
  const [hoveredGame, setHoveredGame] = React.useState('');
  const [hovered, setHovered] = React.useState(false);
  const [progress, setProgress] = React.useState(0);


  const games = [
    'Diablo4',
    'HeartStone',
    'Wow',
    'Diablo',
    'Starcraft',
  ];

  React.useEffect(() => {
    const intervalTime = 5000; // Tempo de troca em milissegundos
    const progressStep = 100 / (intervalTime / 100); // Atualiza a cada 100ms

    // Atualiza o progresso e verifica a troca de jogo
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          // Troca de jogo quando o progresso atinge 100%
          setSelectedGame((prevGame) => {
            const currentIndex = games.indexOf(prevGame);
            const nextIndex = (currentIndex + 1) % games.length;
            return games[nextIndex];
          });
          return 0; // Reseta o progresso
        } else {
          return prevProgress + progressStep;
        }
      });
    }, 100); // Atualiza a cada 100ms

    return () => {
      clearInterval(interval);
    };
  }, [setSelectedGame]);

  const handleGameClick = (gameName) => {
    setSelectedGame(gameName);
  };

  const handleMouseEnter = (gameName) => {
    setHoveredGame(gameName);
  };

  const handleMouseLeave = () => {
    setHoveredGame('');
  };

  // Objetos com os caminhos das imagens de fundo, logos, GIFs e covers para cada jogo
  const gameBackgrounds = {
    Diablo4: BannerDiabloImage,
    HeartStone: BannerHeartImage,
    Wow: BannerWowImage,
    Diablo: BannerDiablo2Image,
    Starcraft: BannerStarcraftImage,
  };

  const gameLogos = {
    Diablo4: LogoDiablo4Image,
    HeartStone: LogoHeartImage,
    Wow: LogoWowImage,
    Diablo: LogoDiablo2Image,
    Starcraft: LogoStarcraftImage,
  };

  const gameGifCover = {
    Diablo4: Diablo4GifCover,
    HeartStone: HeartGifCover,
    Wow: WowGifCover,
    Diablo: Diablo2GifCover,
    Starcraft: StarcraftGifCover,
  };

  const gameGif = {
    Diablo4: Diablo4Gif,
    HeartStone: HeartGif,
    Wow: WowGif,
    Diablo: Diablo2Gif,
    Starcraft: StarcraftGif,
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
        backgroundImage: `url(${gameBackgrounds[selectedGame] || BannerDiabloImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1300,
        boxShadow: 'inset 500px 50px 50px -50px rgba(0, 0, 0, 0.3), inset -500px -500px 50px -50px rgba(0, 0, 0, 0.3)',
        transition: 'background-image 0.3s ease-in-out',

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
            marginLeft: '10%',
          }}
        >
          {['Diablo4', 'HeartStone', 'Wow', 'Diablo', 'Starcraft'].map((game) => (
            <IconButton
              key={game}
              aria-label={`image-${game.toLowerCase()}`}
              style={{
                marginBottom: '10px',
                opacity: selectedGame === game ? 1 : hoveredGame === game ? 0.8 : 0.5,
                filter: selectedGame !== game ? 'grayscale(100%)' : 'none',
                transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
              }}
              onClick={() => handleGameClick(game)}
              onMouseEnter={() => handleMouseEnter(game)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={{
                  Diablo4: Diablo4Image,
                  HeartStone: HearthStoneImage,
                  Wow: WowImage,
                  Diablo: DiabloImage,
                  Starcraft: StarcraftImage,
                }[game]}
                alt={`${game} Button`}
                style={{ width: '50px', height: 'auto' }}
              />
            </IconButton>
          ))}
        </Box>

        {/* Conteúdo principal do banner */}
        <Box sx={{ flex: 1, textAlign: 'left', marginRight: '60%', marginBottom: '-5%' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
            {selectedGame === 'Diablo4' && <>Retorna à escuridão com o game Diablo IV</>}
            {selectedGame === 'HeartStone' && <>Novo pacote de expansão de Hearthstone</>}
            {selectedGame === 'Wow' && <>Desbrave as Terras Sombrias em Shadowlands!</>}
            {selectedGame === 'Diablo' && <>Prepare-se para o retorno de Diablo e enfrente o passado</>}
            {selectedGame === 'Starcraft' && <>Comande a guerra em Starcraft 2 entre na batalha</>}
            {!selectedGame && <>Retorna à escuridão com o game Diablo IV</>}
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
            startIcon={<PlayArrowIcon />}
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
            position: 'absolute',
            right: '10%',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            textAlign: 'right',
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
                marginBottom: '40%'
              }}
            />
          )}
          <Typography variant="body1" sx={{ marginBottom: '5%' }} gutterBottom>
            ASSISTA O TRAILER
          </Typography>
          {selectedGame && (
            <div style={{
              position: 'relative', width: '280px', height: '158px',
            }}>
              <img
                src={hovered ? gameGif[selectedGame] || Diablo4Gif : gameGifCover[selectedGame] || Diablo4GifCover}
                alt={`${selectedGame || 'Diablo4'} Gif`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                  width: '280px',
                  height: '158px',
                  objectFit: 'cover',
                  transition: 'opacity 0.3s ease-in-out',
                }}
              />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <PlayArrowIcon style={{
                  fontSize: 64, color: '#00aeff', backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '50%',
                  padding: '10px'
                }} />
              </div>
            </div>
          )}

        </Box>
      </Box>
      {/* Barra de Progresso */}
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Box>
  );
};

export default Banner;
