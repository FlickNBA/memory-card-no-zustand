import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Header from './Header';
import Game from './Game';
import Start from './Start';
import { useState } from 'react';

export default function App() {
  const [cardsClicked, setCardsClicked] = useState([]);
  const [score, setScore] = useState('0');
  const [bestScore, setBestScore] = useState('0');
  const [gameStarted, setGameStarted] = useState(false);
  const [CC, setCC] = useState([]);

  return gameStarted ? (
    <Grid
      container
      sx={{
        height: '100vh',
      }}
    >
      <Header
        height={10}
        cards={CC[1]}
        cardsClicked={cardsClicked}
        score={score}
        bestScore={bestScore}
      />
      <Game
        height={90}
        columns={CC[0]}
        cards={CC[1]}
        cardsClicked={cardsClicked}
        setCardsClicked={setCardsClicked}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </Grid>
  ) : (
    <Start height={100} setGameStarted={setGameStarted} setCC={setCC} />
  );
}
