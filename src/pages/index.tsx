import { Grid, styled, Typography } from '@material-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { SiteButton } from '../components/partials/Buttons';

export const siteTitle = '時間割くん';
export const urls = {
    home: '/',
    signup: '/signup',
    login: '/login'
};

const TextCenter = styled(Typography)({
    textAlign: 'center'
});

const Home: React.FC = () => {
    const router = useRouter();
    const handleRoute = (e: React.MouseEvent<HTMLButtonElement>, urlPath: string) => {
        e.preventDefault();
        router.push(urlPath).then((r) => console.log(`go to ${urlPath}: ${r}`));
    };

    return (
        <React.Fragment>
            <Head>
                <title>{siteTitle} | zoomが自動で開く時間割アプリ</title>
            </Head>

            <TextCenter variant="h2">{siteTitle}</TextCenter>
            <TextCenter variant="h5">授業が始まる前にzoomが自動で開く時間割アプリ</TextCenter>
            <Grid container justify="center" spacing={2}>
                <Grid item>
                    <SiteButton variant="contained" onClick={(e) => handleRoute(e, urls.signup)}>
                        はじめる
                    </SiteButton>
                </Grid>
                <Grid item>
                    <SiteButton variant="contained" onClick={(e) => handleRoute(e, urls.login)}>
                        ログインする
                    </SiteButton>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Home;
