// import colors from './configs/theme/colors';
import { theme as _theme } from './configs/theme/tokens';

/** @type {import('tailwindcss').Config} */
export const theme = {
  extend: {
    ..._theme.extend,
    textColor: {
      light: '#00003c',
      dark: '#FFFFFF',
      button: {
        light: '#FFFFFF',
        dark: '#002a67'
      }
    },
    backgroundColor: {
      lighter: '#2563eb',
      light: '#FFFFFF',
      dark: '#002a67',
      button: {
        light: '#002a67',
        dark: '#FFFFFF'
      }
    }
    // colors: {
    //   ...colors.theme.extend.colors,
    //   primary: {
    //     lighter: '#0a6eff',
    //     light: '#005be1',
    //     main: '#002a67',
    //     dark: '#00003c',
    //     contrastText: '#fff'
    //   },
    //   secondary: {
    //     light: '#ffe674',
    //     main: '#f6b443',
    //     dark: '#bf8506',
    //     contrastText: '#fff'
    //   },
    // }
  }
};
