import { Card, Grid, styled, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';

import Header from '../components/partials/Header';
import { HomeBackground, SignupForm } from '../components/screens/Home';

export const siteTitle = 'Clable';
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

const NavCard = styled(Card)({
    maxWidth: '960px',
    margin: '32px auto 0',
    height: '480px',
    filter: 'drop-shadow(10px 10px 10px rgba(0,0,0,0.2))'
});

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Head>
                <title>{siteTitle} | zoomが自動で開く時間割アプリ</title>
            </Head>

            <Header />
            <HomeBackground>
                <InnerGrid container justify="space-between" alignItems="center">
                    <Grid item xs={12} sm={8} md={5} style={{ marginLeft: '3%' }}>
                        <WhiteText variant="h2">{siteTitle}</WhiteText>
                        <WhiteText variant="h5" style={{ marginTop: '8px' }}>
                            授業が始まる前にzoomが自動で開く時間割アプリ
                        </WhiteText>
                    </Grid>
                    <Grid item style={{ marginRight: '3%' }}>
                        <SignupForm />
                    </Grid>
                </InnerGrid>
            </HomeBackground>

            <NavCard>説明がはいりますー</NavCard>
            <NavCard>説明がはいりますー</NavCard>
            <NavCard>説明がはいりますー</NavCard>
        </React.Fragment>
    );
};

export default Home;
