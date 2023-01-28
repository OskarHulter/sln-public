// const defaultColors: {
//   // generic colors
//   white: '#ffffff'
//   black: '#000000'

//   // background colors (light)
//   background: '$white'
//   backgroundAlpha: 'rgba(255, 255, 255, 0.8)' // used for semi-transparent backgrounds like the navbar
//   foreground: '$black'
//   backgroundContrast: '$white'

//   //semantic colors (light)
//   blue50: '#EDF5FF'
//   // ...
//   blue900: '#00254D'
//   // ...

//   // brand colors
//   primaryLight: '$blue200'
//   primaryLightHover: '$blue300' // commonly used on hover state
//   primaryLightActive: '$blue400' // commonly used on pressed state
//   primaryLightContrast: '$blue600' // commonly used for text inside the component
//   primary: '$blue600'
//   primaryBorder: '$blue500'
//   primaryBorderHover: '$blue600'
//   primarySolidHover: '$blue700'
//   primarySolidContrast: '$white' // commonly used for text inside the component
//   primaryShadow: '$blue500'

//   // ... rest of colors (secondary, success, warning, error, etc)
// }
export const defaultSpacing = {
  0: '0rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.375rem',
  xl: '2.25rem',
  '2xl': '3rem',
  '3xl': '5rem',
  '4xl': '10rem',
  '5xl': '14rem',
  '6xl': '18rem',
  '7xl': '24rem',
  '8xl': '32rem',
  '9xl': '40rem',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  screen: '100vw',
  full: '100%',
  px: '1px',
  1: '0.125rem',
  2: '0.25rem',
  3: '0.375rem',
  4: '0.5rem',
  5: '0.625rem',
  6: '0.75rem',
  7: '0.875rem',
  8: '1rem',
  9: '1.25rem',
  10: '1.5rem',
  11: '1.75rem',
  12: '2rem',
  13: '2.25rem',
  14: '2.5rem',
  15: '2.75rem',
  16: '3rem',
  17: '3.5rem',
  18: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

export const halcyonColors = {
  hiContrast: 'hsl(206,10%,5%)',
  loContrast: 'white',

  link: '#54b9ff',
  linkLight: '#007ac',
  selection: '',
  code: '',

  background: 'hsl(206,22%,99%)',
  backgroundAlpha: 'hsl(206,12%,97%)',
  backgroundContrast: 'hsl(206,11%,92%)',
  foreground: '#4bf3c8',
  //  foreground: '#cccccc',

  text: 'hsl(206,10%,76%)',
  textLight: 'hsl(206,10%,44%)',
  border: '#697177',
  white: '#F5F5F5',
  black: '#252121',
  fffuelCccolor: 'hsla(219.53,100%,16.67%,1)',
  fffuelCccolorBlue: 'hsl(219.53,100%,16.67%)',
  fffuelCccolorRgb: 'rgb(0,29,85)',

  accents100: 'hsl(206,22%,99%)',
  accents200: 'hsl(206,12%,97%)',
  accents300: 'hsl(206,11%,92%)',
  accents400: 'hsl(206,10%,84%)',
  accents500: 'hsl(206,10%,76%)',
  accents600: 'hsl(206,10%,44%)',
  accents700: 'hsl(206,10%,44%)',
  accents800: 'hsl(206,10%,44%)',
  accents900: 'hsl(206,10%,44%)',

  whiteContrast: '#ffffff',
  blackContrast: 'hsl(206,10%,5%)',
  grayContrast: '#DAE5E6',
  widgetforeground: '#d4d4d4',

  gray100: '#343841',
  gray200: '#80808059',
  gray300: '#454545',
  gray400: '#545864',
  gray500: '#ffffff40',
  gray600: '#cccccc80',
  gray700: '#697177',
  gray800: '#858b98',
  gray900: '#c6c6c6',

  black100: 'hsl(206,10%,5%)',
  black200: '#a9904000',
  black300: '#17191e',
  black400: '#252121',
  black500: '#252526',
  black600: '#23262d',
  black700: '#007acc1a',
  black800: '#2d4860',
  black900: 'hsl(206,10%,44%)',

  white100: 'hsl(206,22%,99%)',
  white200: 'hsl(206,12%,97%)',
  white300: 'hsl(206,11%,92%)',
  white400: 'hsl(206,10%,84%)',
  white500: 'hsl(206,10%,76%)',
  white600: 'hsl(206,10%,44%)',
  white700: 'hsl(206,10%,44%)',
  white800: '#eef0f9',
  white900: '#fafafa',

  blue100: '#007acc66',
  blue200: '#157efb88',
  blue300: '#2b7eca',
  blue400: '#007acc',
  blue500: '#0087ff',
  blue600: '#0097fb',
  blue700: '#179fff',
  blue800: '#54b9ff',
  blue900: '#27b3ff',

  purple100: 'hsl(206,22%,99%)',
  purple200: 'hsl(206,12%,97%)',
  purple300: 'hsl(206,11%,92%)',
  purple400: 'hsl(206,10%,84%)',
  purple500: ' #956ed4',
  purple600: '#ad5dca',
  purple700: '#cc75f4',
  purple800: '#da70d6',
  purple900: ' #f195f0',

  green100: '#001f33',
  green200: '#062f4a',
  green300: 'hsl(206,11%,92%)',
  green400: 'hsl(206,10%,84%)',
  green500: 'hsl(206,10%,76%)',
  green600: 'hsl(206,10%,44%)',
  green700: '#23d18b',
  green800: '#4bf3c8',
  green900: 'hsl(206,10%,44%)',

  yellow100: '#ee931e',
  yellow200: ' #ffc612',
  yellow300: '#fbc23b',
  yellow400: '#ffd700',
  yellow500: '#ffd700',
  yellow600: '#ffc368',
  yellow700: '#ffd493',
  yellow800: '#ffd493',
  yellow900: '#ffd493',

  red100: 'hsl(206,22%,99%)',
  red200: 'hsl(206,12%,97%)',
  red300: 'hsl(206,11%,92%)',
  red400: 'hsl(206,10%,84%)',
  red500: 'hsl(206,10%,76%)',
  red600: 'hsl(206,10%,44%)',
  red700: '#dc3657',
  red800: '#f4587e',
  red900: 'hsl(206,10%,44%)',

  cyan100: 'hsl(206,22%,99%)',
  cyan200: 'hsl(206,12%,97%)',
  cyan300: 'hsl(206,11%,92%)',
  cyan400: 'hsl(206,10%,84%)',
  cyan500: 'hsl(206,10%,76%)',
  cyan600: 'hsl(206,10%,44%)',
  cyan700: '#24c0cf',
  cyan800: '#00daef',
  cyan900: 'hsl(206,10%,44%)',

  pink100: 'hsl(206,22%,99%)',
  pink200: 'hsl(206,12%,97%)',
  pink300: 'hsl(206,11%,92%)',
  pink400: 'hsl(206,10%,84%)',
  pink500: 'hsl(206,10%,76%)',
  pink600: 'hsl(206,10%,44%)',
  pink700: 'hsl(206,10%,44%)',
  pink800: 'hsl(206,10%,44%)',
  pink900: ' #f195f0',
}

// 50	UI element background
// 100	Hovered UI element background
// 200	Active / Selected UI element background
// 300	Subtle borders and separators
// 400	UI element border and focus rings
// 500	Hovered UI element border
// 600	Solid backgrounds
// 700	Hovered solid backgrounds
// 800	Low - contrast text
// 900	High - contrast text

export const colors = {
  // generic colors
}

export const awesomeGradient = `linear-gradient(0deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), linear-gradient(80.52deg, #ffc612 8.87 %, #f195f0 27.48 %,#956ed4 60.07 %,#27b3ff 89.47 %)`

export const textGradient = `80.52deg,#ffc612 8.87%,#f195f0 27.48%,#956ed4 60.07%,#27b3ff 89.47%`

export const buttonGradient = `316deg, rgb(75, 161, 252) 3 %, rgb(236, 42, 237) 100 %`

export default colors

// "editorWidget.foreground": "#ffffff",
// "#ffffff00",
// "editorWarning.background": "#a9904000",
// ".ansiBlack": "#17191e",
// "editorMarkerNavigation.background": "#23262d",
//"editorActiveLineNumber.foreground": "#c6c6c6",
// "editorSuggestWidget.foreground": "#d4d4d4",
// "editorLineNumber.activeForeground": "#858b98",
// "foreground": "#cccccc",
//"editorCommentsWidget.resolvedBorder": "#cccccc80",
// "editorWhitespace.foreground": "#23262d",
// "editorWidget.background": "#343841",
// "editorSuggestWidget.background": "#252526",
// "editorSuggestWidget.border": "#454545",
// "editorLineNumber.foreground": "#545864",
//"editorBracketHighlight.foreground3": "#179fff",
// "editorSuggestWidget.highlightForeground": "#0097fb",
// "peekView.border": "#007acc",
// "terminal.ansiBlue": "#2b7eca",
// "terminalCursor.background": "#0087ff",
//"editorCommentsWidget.rangeActiveBackground": "#007acc1a",
// "peekViewEditor.background": "#001f33",
//"bookmarks.overviewRuler": "#157efb88",
//"editorCommentsWidget.rangeActiveBorder": "#007acc66",
// "editorSuggestWidget.selectedBackground": "#062f4a",
// "gitDecoration.addedResourceForeground": "#4bf3c8",
// "terminal.ansiBrightBlack": "#545864",
// "focusBorder": "#00daef",
// "terminal.ansiBrightBlue": "#54b9ff",
// "terminal.ansiBrightWhite": "#fafafa",
// "terminal.ansiWhite": "#eef0f9",
//"editorBracketHighlight.foreground2": "#da70d6",
// "terminal.ansiBrightMagenta": "#cc75f4",
// "terminal.ansiMagenta": "#ad5dca",
// "terminal.ansiBrightCyan": "#00daef",
// "terminal.ansiCyan": "#24c0cf",
// "terminal.ansiBrightGreen": "#4bf3c8",
// "terminal.ansiGreen": "#23d18b",
// "terminal.ansiBrightRed": "#f4587e",
// "terminal.ansiRed": "#dc3657",
//"editorBracketHighlight.foreground1": "#ffd700",
// "terminal.ansiBrightYellow": "#ffd493",
// "terminal.ansiYellow": "#ffc368",
// "editorWarning.foreground": "#fbc23b",
// "peekViewEditor.matchHighlightBorder": "#ee931e",
// "textLink.foreground": "#54b9ff",
//"banner.background": "#2d4860",
//"banner.iconForeground": "#54b9ff",
//"breadcrumbPicker.background": "#343841",
//"button.separator": "#17191e66",
// "terminal.border": "#80808059",
// "terminal.foreground": "#cccccc",
// "terminal.selectionBackground": "#ffffff40",
//"charts.foreground": "#cccccc",
//"charts.green": "#89d185",
//"charts.lines": "#cccccc80",
//"charts.orange": "#515c6a",
//"charts.purple": "#b180d7",
//"charts.red": "#f4587e",
//"charts.yellow": "#fbc23b",

//"debugConsole.errorForeground": "#f48771",
//"debugConsole.infoForeground": "#54b9ff",
//"debugConsole.sourceForeground": "#cccccc",
//"debugConsole.warningForeground": "#fbc23b",
//"debugConsoleInputIcon.foreground": "#cccccc",
//"debugIcon.breakpointCurrentStackframeForeground": "#ffcc00",
