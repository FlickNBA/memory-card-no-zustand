import Grid from '@mui/material/Unstable_Grid2';
import Card from './Card';

export default function Game({ height, columns, cards }) {
  console.log('callin game');
  let cardItems = [];
  for (let i = 0; i < cards; i++) {
    cardItems.push(<Card height={100 / (cards / columns)} />);
  }
  console.log(columns);
  console.log(cards);
  console.log('rows', cards / columns);

  return (
    <Grid
      container
      columns={columns}
      sx={{
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
