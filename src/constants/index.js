export const fontFamily = 'GT Walsheim Pro, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
export const layoutPadding = 15
export const maxWidth = 1200 + layoutPadding * 2

export const theme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      grey: '#9D9D9D',
      lightGrey: '#E5E5E5',
      yellow: '#FEEA52',
      pink: '#F5A5A3',
      primary: '#3BA3F6',
      secondary: '#232323',
    },
    background: {
      paper: 'rgba(250, 250, 250, 1)',
      default: 'rgba(250, 250, 250, 1)',
    },
    primary: {
      light: 'rgba(124, 212, 255, 1)',
      main: 'rgba(59, 163, 246, 1)',
      dark: 'rgba(0, 117, 195, 1)',
      contrastText: 'rgba(250, 250, 250, 1)',
    },
    secondary: {
      light: 'rgba(75, 75, 75, 1)',
      main: 'rgba(35, 35, 35, 1)',
      dark: 'rgba(0, 0, 0, 1)',
      contrastText: 'rgba(250, 250, 250, 1)',
    },
    error: {
      light: 'rgba(230, 110, 126, 1)',
      main: 'rgba(208, 86, 101, 1)',
      dark: 'rgba(150, 52, 62, 1)',
      contrastText: 'rgba(250, 250, 250, 1)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily,
  },
}
