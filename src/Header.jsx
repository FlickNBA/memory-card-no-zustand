import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

export default function Header({ height, cardsClicked }) {
  console.log('callin header');
  return (
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
      <Grid xs={8}>
        <Typography
          variant='p'
          color='primary'
          sx={{
            fontWeight: 500,
          }}
        >
          clicked: {cardsClicked.join(', ')}
          {/* Yu-Gi-Oh! Memory Card Game! */}
        </Typography>
        <Typography
          variant='h6'
          color='primary'
          sx={{
            fontWeight: 400,
          }}
        >
          {/* Get points by clicking on card, but don't click on any more than once! */}
        </Typography>
      </Grid>
      <Grid xs={4}>
        <Typography
          variant='h5'
          color='primary'
          sx={{
            textAlign: 'right',
            fontWeight: 500,
          }}
        >
          Score: 0
        </Typography>
      </Grid>
    </Grid>
  );
}
