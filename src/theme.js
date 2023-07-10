import { createTheme } from '@mui/material/styles';
import * as colors from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.indigo['900'],
    },
    secondary: {
      main: colors.indigo['700'],
    },
    background: {
      default: colors.indigo['100'],
      primary: colors.indigo['200'],
      secondary: colors.indigo['300'],
    },
    error: {
      main: colors.red['700'],
    },
  },
});

export default theme;
