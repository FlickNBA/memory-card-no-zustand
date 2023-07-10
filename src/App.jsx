import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Header from './Header';
import Game from './Game';
import { useState } from 'react';

export default function App({ columns, cards }) {
  const [cardsClicked, setCardsClicked] = useState([]);

  return (
    <Grid
      container
      sx={{
        height: '100vh',
      }}
    >
      <Header height={10} cardsClicked={cardsClicked} />
      <Game
        height={90}
        columns={columns}
        cards={cards}
        setCardsClicked={setCardsClicked}
      />
    </Grid>
  );
}
