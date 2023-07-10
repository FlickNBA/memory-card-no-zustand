import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Header from './Header';
import Game from './Game';

export default function App() {
  return (
    <Grid
      container
      sx={{
        height: '100vh',
      }}
    >
      <Header height={10} />
      <Game height={90} columns={4} cards={12} />
    </Grid>
  );
}
