import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import Layout from '@/components/shared/Layout';
import CreateEmotionCache from '../utils/createEmotionCache';
import { theme } from '../theme/theme';
import '../styles/globals.css';
import ErrorBoundary from '@/components/shared/ErrorBoundry';
import { Provider } from 'react-redux';
import { store, persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = CreateEmotionCache();

const lightTheme = createTheme(theme);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  if (process.env.NODE_ENV === 'production') {
    console.log = () => {};
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <ErrorBoundary>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ErrorBoundary>
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
