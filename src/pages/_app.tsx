import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import client from '../apollo/client';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['"M PLUS Rounded 1c"', 'sans-serif'].join(',')
    }
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c"
                    rel="stylesheet"
                />
            </Head>
            <ApolloProvider client={client}>
                <MuiThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </MuiThemeProvider>
            </ApolloProvider>
        </>
    );
}

export default MyApp;
