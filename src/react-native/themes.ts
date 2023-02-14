const common = {
  white: '#fff',
  transparent: 'transparent',
  black: '#000',
  blue: 'blue',
  placeHolderGray: 'rgba(216, 216, 216, 0.6)',
  borderInputError: '#ff0000',
  green: 'green',
  grey: 'grey',
  silverChalice: '#A0A0A0',
  mercury: '#E7E7E7',
};

const Light = {
  COLORS: {
    ...common,
    primary: '#E46125',
    secondary: '#EFEFEF',
    textPrimary: '#000000',
    textSecondary: '#24264E',
  },
  fonts: {
    normal: 'AvertaStdCY',
    bold: 'AvertaStdCY-Bold',
    semiBold: 'AvertaStdCY-Semibold',
    regular: 'AvertaStdCY-Regular',
    light: 'AvertaStdCY-Light',
  },
};

const Dark = {
  colors: {
    ...common,
    primary: '#607d8b',
    secondary: '#607d8b',
    textPrimary: '#607d8b',
    textSecondary: '#607d8b',
  },
  fonts: {
    bold: 'AvertaStdCY-Bold',
    semiBold: 'AvertaStdCY-Semibold',
    regular: 'AvertaStdCY-Regular',
    light: 'AvertaStdCY-Light',
  },
};

export const Themes = Light;

export const ThemesDark = Dark;
