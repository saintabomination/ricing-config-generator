import { ThemeProvider } from '@xstyled/styled-components';
import mainTheme from '../theme/mainTheme';
import ResetStyles from '../theme/resetStyles';
import MainStyle from '../theme/mainStyle';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <ResetStyles />
      <MainStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
