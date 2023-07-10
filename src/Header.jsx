import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

export default function Header({ height, cards, score, bestScore }) {
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
          variant='h3'
          color='primary'
          sx={{
            fontWeight: 500,
          }}
        >
          Yu-Gi-Oh! Memory Card Game! ({cards} cards)
        </Typography>
        <Typography
          variant='h5'
          color='primary'
          sx={{
            fontWeight: 400,
          }}
        >
          Get points by clicking on card, but don't click on any more than once!
        </Typography>
      </Grid>
      <Grid xs={4}>
        <Typography
          variant='h4'
          color='primary'
          sx={{
            textAlign: 'right',
            fontWeight: 500,
          }}
        >
          Score: {score}
        </Typography>
        <Typography
          variant='h4'
          color='primary'
          sx={{
            textAlign: 'right',
            fontWeight: 500,
          }}
        >
          Best score: {bestScore}
        </Typography>
      </Grid>
    </Grid>
  );
}
