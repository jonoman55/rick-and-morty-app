// Rick And Morty Portal Green: #58e500 / #6fca12 / #53ff11
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=f2f2f2&secondary.color=424242
const custom = {
    main: '#53ff11',
    orange: '#ffa500',
    white: '#fff',
    black: '#000',
    disabled: 'rgba(0, 0, 0, 0.26)',
    divider: '#484848',
    gray: '#f2f2f2',
    error: '#d32f2f',
    green: '#0cfa1c',
    red: '#ff0000',
    yellow: '#fff700',
    myth: '#ffeb3b',
    humanoid: '#f44336',
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
    thumbBlue: '#00b1c9',
    robot: '#cddbdd',
    cron: '#ecbd75',
    animal: '#bd6e15'
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
  
  // MUIv5 themes
  export const lightTheme = {
    palette: {
      mode: 'light',
      primary: {
        main: '#f2f2f2',
        light: '#ffffff',
        dark: '#bfbfbf',
        contrastText: '#000000',
      },
      secondary: {
        main: '#424242',
        light: '#6d6d6d',
        dark: '#1b1b1b',
        contrastText: '#ffffff',
      },
      custom: custom,
    },
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
      primary: {
        main: '#424242',
        light: '#6d6d6d',
        dark: '#1b1b1b',
        contrastText: '#fff',
      },
      secondary: {
        main: '#eceff1',
        light: '#ffffff',
        dark: '#babdbe',
        contrastText: '#000',
      },
      custom: custom,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: scrollBodyDark,
        },
      },
    },
  };