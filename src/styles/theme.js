import { ThemeProvider } from 'styled-components';

import themeStyles from '../themes/themeStyles';
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <ThemeProvider theme={themeStyles}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
