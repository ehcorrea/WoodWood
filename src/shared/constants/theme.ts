import { rfvalue, rhvalue, rwvalue } from '../utils/responsive/responsive';

const COLORS_SCHEMES = {
  light: {
    primary: {
      main: '#EA5B0C',
      80: '#EF7A39',
      50: '#F4A273',
      20: '#F9D2B6',
    },
    secondary: {
      main: '#004ABE',
      80: '#336ECC',
      50: '#7FA5E0',
      20: '#CCD9F5',
    },
  },
};

export const THEME = {
  colors: {
    black: {
      main: '#1A1D26',
      80: '#2A2F3D',
      50: '#4D5364',
      20: '#6E7489',
    },
    white: {
      main: '#FFFFFF',
      80: '#FFFFFF',
      50: '#FFFFFF',
      20: '#FFFFFF',
    },
    gray: {
      main: '#9A9FAE',
      80: '#A8ACB9',
      50: '#C4C7D0',
      20: '#EBEBEB',
    },
    error: {
      main: '#F30000',
      80: '#F34C4C',
      50: '#F38585',
      20: '#F3BEBE',
    },
    transparent: {
      main: 'transparent',
      80: 'transparent',
      50: 'transparent',
      20: 'transparent',
    },
    ...COLORS_SCHEMES.light,
  },
  fonts: {
    weight: {
      light: 'SofiaPro-Light',
      regular: 'SofiaPro-Regular',
      medium: 'SofiaPro-Medium',
      semibold: 'SofiaPro-SemiBold',
      bold: 'SofiaPro-Bold',
    },
    size: {
      small: rfvalue(12).toString(),
      medium: rfvalue(15).toString(),
      large: rfvalue(18).toString(),
      xlarge: rfvalue(24).toString(),
      huge: rfvalue(30).toString(),
      xhuge: rfvalue(36).toString(),
    },
    height: {
      small: rfvalue(12).toString(),
      medium: rfvalue(18).toString(),
      large: rfvalue(20).toString(),
      xlarge: rfvalue(30).toString(),
      huge: rfvalue(50).toString(),
      xhuge: rfvalue(55).toString(),
    },
  },
  rfvalue,
  rwvalue,
  rhvalue,
} as const;

export type ThemeType = typeof THEME;
