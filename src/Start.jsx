import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

export default function Start({ height, setGameStarted, setCC }) {
  function handleClick(e) {
    setCC([e.target.attributes.columns.value, e.target.attributes.cards.value]);
    setGameStarted(true);
  }

  return (
    <Grid
      container
      sx={{
        height: '100vh',
      }}
    >
      <Grid
        container
        sx={{
          width: '100%',
          height: `${height}%`,
          paddingX: '2rem',
          backgroundColor: 'background.primary',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          xs={12}
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant='h2'
            color='primary'
            sx={{
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            Welcome to
          </Typography>

          <Typography
            variant='h1'
            color='primary'
            sx={{
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            Yu-Gi-Oh! Memory Card Game
          </Typography>

          <Typography
            variant='h3'
            color='primary'
            sx={{
              textAlign: 'center',
              fontWeight: 500,
              marginBottom: '1rem',
            }}
          >
            Select difficulty to start playing.
          </Typography>

          <Button
            columns={4}
            cards={8}
            variant='contained'
            size='large'
            sx={{
              fontSize: '1.5rem',
              marginX: '0.75rem',
              marginBottom: '1rem',
            }}
            onClick={handleClick}
          >
            Easy (8 cards)
          </Button>

          <Button
            columns={6}
            cards={12}
            variant='contained'
            size='large'
            sx={{
              fontSize: '1.5rem',
              marginX: '0.75rem',
              marginBottom: '1rem',
            }}
            onClick={handleClick}
          >
            Medium (12 cards)
          </Button>

          <Button
            columns={6}
            cards={18}
            variant='contained'
            size='large'
            sx={{
              fontSize: '1.5rem',
              marginX: '0.75rem',
              marginBottom: '1rem',
            }}
            onClick={handleClick}
          >
            Hard (18 cards)
          </Button>

          <Button
            columns={8}
            cards={24}
            variant='contained'
            size='large'
            sx={{
              fontSize: '1.5rem',
              marginX: '0.75rem',
              marginBottom: '1rem',
            }}
            onClick={handleClick}
          >
            Insane (24 cards)
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
