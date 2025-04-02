const LightTheme = {
  dark: false,
  colors: {
    primary: '#BDB5FA', // color for primary elements
    background: '#FFFFFF',
    card: '#F5F7FB',
    text: '#000',
    greyText: '#9F9FB8',
    border: '#DFF78F',
    fadedWhite: '#DFDEDE',
    toast: 'rgba(244, 244, 245, 0.8)',
    transparentGrey: 'rgba(155, 155, 255, 0.3)',
  },
  fonts: {
    regular: {
      fontFamily: 'DMSans-Regular',
      fontWeight: '400', // Use numeric value for 'normal'
    },
    medium: {
      fontFamily: 'DMSans-Medium',
      fontWeight: '500', // Use numeric value instead of '300'
    },
    bold: {
      fontFamily: 'DMSans-SemiBold',
      fontWeight: '700', // Use numeric value for 'bold'
    },
    heavy: {
      fontFamily: 'DMSans-Bold',
      fontWeight: '900',
    },
  },
};

export default LightTheme;