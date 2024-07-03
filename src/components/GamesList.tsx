import React, { useEffect, useState } from 'react';
import { fetchGames, Game } from '../apiService.tsx';
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import XboxIcon from '../assets/icons/xbox-icon.svg';
import GrayBlocksIcon from '../assets/icons/gray-blocks-icon.svg';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import NintendoSwitchIcon from '../assets/icons/nintendo-switch-icon.svg';
import BattleNetIcon from '../assets/icons/battlenet-icon.svg';
import PlaystationIcon from '../assets/icons/playstation-icon.svg';
import logo from '../assets/logo-blizzard.png';

const GamesList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('Erro desconhecido'));
        }
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  if (loading) return <Typography>Carregando...</Typography>;
  if (error) return <Typography>Erro ao carregar jogos: {error.message}</Typography>;

  return (
    <Box sx={{ padding: '20px' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{
        marginBottom: '5%', marginTop: '5%', marginLeft: '10%', marginRight: '10%', position: 'relative',
        '@media (max-width: 768px)': {
          marginLeft: '0%'
        },
      }}>
        <Typography variant="caption" sx={{
          fontWeight: 'bold', color: '#8f9099', marginBottom: '3%', '@media (max-width: 768px)': {
            display: 'none', // oculta o componente em resoluções menores que 768px
          },
        }}>GAMES</Typography>
        <Box sx={{ marginLeft: '10%' }}>
          <Typography variant="h4" sx={{
            fontWeight: 'bold',
            marginLeft: '10%',
            '@media (max-width: 376px)': {
              fontSize: '20px'
            },
            '@media (min-width: 377px) and (max-width: 768px)': {
              fontSize: '20px'
            },

          }}>Jogos exclusivos</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{
          flex: 1,
          '@media (max-width: 376px)': {
            display: 'none',
          },
          '@media (min-width: 377px) and (max-width: 768px)': {
            display: 'none',
          },
        }}>
          <Box display="flex" alignItems="center" gap={2} sx={{ marginRight: '50%' }}>
            <img src={BattleNetIcon} alt="BattleNet Icon" style={{ width: '24px', height: '24px' }} />
            <img src={NintendoSwitchIcon} alt="Nintendo Switch Icon" style={{ width: '24px', height: '24px' }} />
            <img src={XboxIcon} alt="Xbox Icon" style={{ width: '24px', height: '24px' }} />
            <img src={PlaystationIcon} alt="Playstation Icon" style={{ width: '24px', height: '24px' }} />
          </Box>
        </Box>
        <Button variant='text' startIcon={<GridViewRoundedIcon sx={{ width: '10px', height: '10px' }} />} sx={{ textTransform: 'none' }} >
          <Typography variant="caption" sx={{ color: '#00BFFF', fontWeight: 'bold' }}>
            Ver todos jogos
          </Typography>
        </Button>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginLeft: '10%',
          marginRight: '10%',
          '@media (max-width: 768px)': {
            gridTemplateColumns: 'repeat(3, 1fr)', // ajusta para 3 colunas por linha
          },
          '@media (max-width: 376px)': {
            gridTemplateColumns: 'repeat(2, 1fr)', // ajusta para 2 colunas por linha em dispositivos menores
          },
          '@media (min-width: 377px) and (max-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
        }}
      >
        {games.map((game, index) => (
          <Card
            key={index}
            sx={{
              width: '100%',
              backgroundColor: 'transparent',
              boxShadow: 'none',
              position: 'relative',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={game.image}
                alt={game.name}
                sx={{
                  height: '350px', objectFit: 'cover', borderRadius: '8px',
                  '@media (max-width: 376px)': {
                    height: '150px'
                  },
                }}
              />
              <Box
                component="img"
                src={game.logo}
                alt={game.name}
                sx={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  backgroundColor: 'transparent',
                  padding: '5px',
                  borderRadius: '4px',
                }}
              />
            </Box>
            <CardContent sx={{
              backgroundColor: '#09090b', color: 'white', padding: '10px', '@media (max-width: 376px)': {
                display: 'none',
              },
            }}>
              <Typography variant="h6" component="h2" gutterBottom>
                {game.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#8f9099' }}>
                {game.category}
              </Typography>
            </CardContent>
          </Card>
        ))}
        <Card sx={{
          width: '100%',
          height: '80%',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          position: 'relative',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          border: '3px solid #15171a',
          '@media (max-width: 768px)': {
            height: '75%'
          },
          '@media (max-width: 376px)': {
            height: '150px'
          },
        }}>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '350px',
              borderRadius: '8px',
              '@media (max-width: 376px)': {
                height: '150px'
              },
            }}
          >
            <Stack direction="column" alignItems="center" spacing={4}>
              <img
                src={logo}
                alt='logo'
                style={{ width: '60%', height: 'auto' }}
              />
              <Stack direction="row" alignItems="center" spacing={1}>
                <img src={GrayBlocksIcon} alt="GreyBlocks Icon" style={{ marginRight: '5px' }} />
                <Typography sx={{
                  color: 'white',
                  '@media (max-width: 376px)': {
                    fontSize: '10px'
                  },
                }} > Ver todos os jogos</Typography>
              </Stack>
            </Stack>
          </Box>
        </Card>
      </Box >
    </Box >
  );
};

export default GamesList;
