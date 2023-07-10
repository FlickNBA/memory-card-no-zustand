import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { generateAll, shuffleArray } from './helperFunctions';

function Card({ image, height, setCardsClicked, resetBoard }) {
  function handleClick(e) {
    setCardsClicked((prev) => [
      ...prev,
      e.target.src.replace('.png', '').split('yu-')[1],
    ]);
    resetBoard();
  }

  return (
    <Grid
      xs={1}
      sx={{
        height: `${height}%`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        cursor: 'pointer',
      }}
    >
      <Box
        component='img'
        sx={{
          objectFit: 'contain',
          width: '100%',
          height: '100%',
        }}
        onClick={(e) => handleClick(e)}
        src={`../cards/yu-${image}.png`}
      />
    </Grid>
  );
}

export default function Game({
  height,
  columns,
  cards,
  cardsClicked,
  setCardsClicked,
  setScore,
  bestScore,
  setBestScore,
}) {
  const [allCards, setAllCards] = useState([]);
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    setAllCards(generateAll(cards));
  }, []);

  useEffect(() => {
    setBoard();
  }, [allCards]);

  useEffect(() => {
    checkScore();
  }, [cardsClicked]);

  function checkScore() {
    let uniqueClicked = [...new Set(cardsClicked)];
    if (uniqueClicked.length == cards) {
      setScore('MAX');
      setBestScore('MAX');
      setScore(0);
      setCardsClicked([]);
      return;
    }
    if (cardsClicked.length == uniqueClicked.length) {
      setScore(cardsClicked.length);
      if (cardsClicked.length > bestScore) {
        setBestScore(cardsClicked.length);
      }
    } else {
      setBestScore(cardsClicked.length - 1);
      setScore(0);
      setCardsClicked([]);
    }
  }

  function CIHelper() {
    let CI = [];
    for (let i = 0; i < cards; i++) {
      CI.push(
        <Card
          key={i}
          image={allCards[i]}
          height={100 / (cards / columns)}
          setCardsClicked={setCardsClicked}
          resetBoard={resetBoard}
        />
      );
    }
    return CI;
  }

  function setBoard() {
    setCardItems([]);
    setCardItems(CIHelper);
  }

  function resetBoard() {
    setAllCards(shuffleArray(allCards));
    setCardItems([]);
    setCardItems(CIHelper);
  }

  return (
    <Grid
      container
      id='board'
      columns={columns}
      sx={{
        paddingX: '1rem',
        width: '100%',
        height: `${height}%`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {cardItems}
    </Grid>
  );
}
