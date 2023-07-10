import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';

export default function Card({ height }) {
  return (
    <Grid
      xs={1}
      sx={{
        height: `${height}%`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <Box
        component='img'
        sx={{
          objectFit: 'contain',
          width: '100%',
          height: '100%',
        }}
        src='../cards/yu-1.png'
      />
    </Grid>
  );
}
