import { Box, Grid, Paper, TextField, Typography } from '@material-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { isLoggedInVar } from '../apollo/cache';
import { AccountNav, IconAndText, StyledForm } from '../components/partials/Accounts';
import { AccountSubmitButton } from '../components/partials/Buttons';
import { Copyright } from '../components/partials/Footer';
import { ImageGrid, RootGrid, StyledDiv } from '../components/screens/Login';
import Loading from '../components/ui/Loading';
import { useLoginMutation } from '../graphql/__generated__/generated-types-and-hooks';
import { siteTitle, urls } from './index';

const Login: React.FC = () => {
    let email: HTMLInputElement, password: HTMLInputElement;
    const router = useRouter();
    const [loginMutation, { error, loading }] = useLoginMutation();

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (email.value === '' || password.value === '') return;

        loginMutation({
            variables: {
                input: {
                    email: email.value,
                    password: password.value
                }
            }
        }).then((r) => {
            if (process.browser && r.data?.login) {
                sessionStorage.setItem('token', r.data?.login.token);
                isLoggedInVar(true);
                router.push(urls.home).then((r) => console.log(`go to ${urls.home}: ${r}`));
            }
        });
    };

    if (loading) return <Loading />;

    return (
        <RootGrid container>
            <Head>
                <title>{siteTitle} | ログイン</title>
            </Head>
            <ImageGrid item xs={false} sm={4} md={7} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <StyledDiv>
                    <IconAndText>ログイン</IconAndText>
                    {error && (
                        <Typography variant="h3" color="error">
                            エラーが発生しました。{error}
                        </Typography>
                    )}
                    <StyledForm noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="メールアドレス"
                            autoComplete="email"
                            inputRef={(node: HTMLInputElement) => {
                                email = node;
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="パスワード"
                            type="password"
                            autoComplete="current-password"
                            inputRef={(node: HTMLInputElement) => {
                                password = node;
                            }}
                        />

                        <AccountSubmitButton onClick={handleLogin} fullWidth>
                            ログインする
                        </AccountSubmitButton>

                        <Grid container justify="space-between">
                            <AccountNav href={urls.home}>パスワードをお忘れですか？</AccountNav>
                            <AccountNav href={urls.signup}>
                                アカウントを持ってない方はこちらへ
                            </AccountNav>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </StyledForm>
                </StyledDiv>
            </Grid>
        </RootGrid>
    );
};

export default Login;
