import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        secondary: {
            light: '#2d3c4a',
            main: '#2d3c4a',
            contrastText: '#ffffff'
        },
        button: {
            main: '#eb8736',
            contrastText: '#ffffff'
        }
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
});