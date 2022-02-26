// Rick And Morty Portal Green: #58e500 / #6fca12 / #53ff11
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=f2f2f2&secondary.color=424242
const custom = {
  main: '#53ff11',
  orange: '#ffa500',
  white: '#fff',
  black: '#000',
  disabled: 'rgba(0, 0, 0, 0.26)',
  darkDisabled: 'rgb(130 130 130)',
  divider: '#484848',
  gray: '#f2f2f2',
  error: '#d32f2f',
  green: '#0cfa1c',
  red: '#ff0000',
  yellow: '#fff700',
  myth: '#ffeb3b',
  disease: '#f44336',
  notFound: '#2196f3',
  cyborg: '#9bf00b',
  robot2: '#00af00',
  chrome: '#9e9e9e',
  brightGreen: '#0cf223',
  brightRed: '#f50202',
  brightYellow: '#fff700',
  selected: '#f2f2f2cc',
  unknown: '#7f7fda',
  pbh: '#fdc60f',
  blue: '#147af0',
  teal: '#27ebd1',
  pink: '#dc5ffc',
  humanoid: '#ffab55',
  robot: '#cddbdd',
  cron: '#ecbd75',
  animal: '#bd6e15',
  thumbBlue: '#00b1c9',
  seen: '#f2bb1b',
};
  
const scrollBodyLight = {
  scrollbarColor: '#959595 #2b2b2b',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#2b2b2b',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#959595',
    minHeight: 24,
    border: '3px solid #2b2b2b',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#6b6b6b',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#6b6b6b',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#6b6b6b',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#2b2b2b',
  },
};
  
const scrollBodyDark = {
  scrollbarColor: '#6b6b6b #2b2b2b',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#2b2b2b',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#6b6b6b',
    minHeight: 24,
    border: '3px solid #2b2b2b',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#2b2b2b',
  },
};

const light = {
  main: '#f2f2f2',
  light: '#ffffff',
  dark: '#bfbfbf',
  contrastText: '#000000',
};

const dark = {
  main: '#424242',
  light: '#6d6d6d',
  dark: '#1b1b1b',
  contrastText: '#ffffff',
};

const typography = {
  fontFamily: [
    'Inconsolata',
    'monospace',
  ].join(','),
};

export const lightTheme = {
  palette: {
    mode: 'light',
    primary: light,
    secondary: dark,
    custom: custom,
  },
  typography: typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: scrollBodyLight,
      },
    },
  },
};
  
export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: dark,
    secondary: light,
    custom: custom,
  },
  typography: typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: scrollBodyDark,
      },
    },
  },
};