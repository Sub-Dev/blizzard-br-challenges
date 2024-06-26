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
      <Typography variant="h4" gutterBottom>Jogos Exclusivos</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginLeft: '10%',
          marginRight: '10%',
          alignItems: 'center',
        }}
      >
        <img src={BattleNetIcon} alt="BattleNet Icon" style={{ marginRight: '10px' }} />
        <img src={NintendoSwitchIcon} alt="Nintendo Switch Icon" style={{ marginRight: '10px' }} />
        <img src={XboxIcon} alt="Xbox Icon" style={{ marginRight: '10px' }} />
        <img src={PlaystationIcon} alt="Playstation Icon" style={{ marginRight: '10px' }} />
        <Button variant="text" startIcon={<GridViewRoundedIcon />}>Ver todos jogos</Button>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginLeft: '10%',
          marginRight: '10%',
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
                sx={{ height: '350px', objectFit: 'cover', borderRadius: '8px' }}
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
            <CardContent sx={{ backgroundColor: '#09090b', color: 'white', padding: '10px' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                {game.name}
              </Typography>
              <Typography variant="body2">
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
                <Typography sx={{ color: 'white' }} > Ver todos os jogos</Typography>
              </Stack>
            </Stack>
          </Box>
        </Card>
      </Box >
    </Box >
  );
};

export default GamesList;
