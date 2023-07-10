import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { generateAll, shuffleArray } from './helperFunctions';

function handleClick({ e, setCardsClicked, resetBoard }) {
  setCardsClicked((prev) => [
    ...prev,
    [e.target.src.replace('.png', '').split('yu-')[1]],
  ]);
  resetBoard();
}

function Card({ image, height, setCardsClicked, resetBoard }) {
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
        onClick={(e) =>
          handleClick({
            e: e,
            setCardsClicked: setCardsClicked,
            resetBoard: resetBoard,
          })
        }
        src={`../cards/yu-${image}.png`}
      />
    </Grid>
  );
}

export default function Game({ height, columns, cards, setCardsClicked }) {
  const [allCards, setAllCards] = useState([]);
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    setAllCards(generateAll(cards));
  }, []);

  useEffect(() => {
    setBoard();
  }, [allCards]);

  function setBoard() {
    console.log('im called on start');
    setCardItems([]);
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
    setCardItems(CI);
  }

  function resetBoard() {
    setAllCards(shuffleArray(allCards));
    console.log('im called 2');
    setCardItems([]);
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
    setCardItems(CI);
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
