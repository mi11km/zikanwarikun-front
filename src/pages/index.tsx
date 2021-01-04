import { Grid, styled, Typography } from '@material-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { SiteButton } from '../components/partials/Buttons';
import { HomeBackground, SignupForm } from '../components/screens/Home';

export const siteTitle = '時間割くん';
export const urls = {
    home: '/',
    signup: '/signup',
    login: '/login'
};

const WhiteText = styled(Typography)({
    color: 'white'
});

const InnerGrid = styled(Grid)({
    maxWidth: '960px',
    margin: '0 auto',
    height: '60vh'
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

            <HomeBackground>
                <InnerGrid container justify="space-between" alignItems="center">
                    <Grid item xs={12} sm={8} md={5} style={{ marginLeft: '3%' }}>
                        <WhiteText variant="h2">{siteTitle}</WhiteText>
                        <WhiteText variant="h5" style={{ marginTop: '8px' }}>
                            授業が始まる前にzoomが自動で開く時間割アプリ
                        </WhiteText>
                        <Grid container justify="center" spacing={2}>
                            <Grid item>
                                <SiteButton
                                    variant="outlined"
                                    onClick={(e) => handleRoute(e, urls.signup)}>
                                    ユーザー登録
                                </SiteButton>
                            </Grid>
                            <Grid item>
                                <SiteButton
                                    variant="outlined"
                                    onClick={(e) => handleRoute(e, urls.login)}>
                                    ログインする
                                </SiteButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{ marginRight: '3%' }}>
                        <SignupForm />
                    </Grid>
                </InnerGrid>
            </HomeBackground>
        </React.Fragment>
    );
};

export default Home;
