import { Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Head>
                <title>時間割くん | zoomが自動で開く時間割アプリ</title>
            </Head>
            <Typography variant="h2">時間割くん</Typography>
            <h1>こんにちは、世界。</h1>
            <h1>Hello, world!</h1>
        </React.Fragment>
    );
};

export default Home;
