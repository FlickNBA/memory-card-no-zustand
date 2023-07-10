import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

export default function Header({ height }) {
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
          variant='h4'
          color='primary'
          sx={{
            fontWeight: 500,
          }}
        >
          {/* temp: {store.temp}
          <br />
          test: {store.test}
          <br />
          all: {store.all.join(', ')}
          <br />
          shown: {store.shown.join(', ')}
          <br />
          left: {store.left.join(', ')}
          <br />
          clicked: {store.clicked.join(', ')} */}
          Yu-Gi-Oh! Memory Card Game!
        </Typography>
        <Typography
          variant='h6'
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
          variant='h5'
          color='primary'
          sx={{
            textAlign: 'right',
            fontWeight: 500,
          }}
        >
          Score: 777
        </Typography>
        {/* <Button variant='contained' onClick={handleClick}>
          Contained
        </Button> */}
      </Grid>
    </Grid>
  );
}
