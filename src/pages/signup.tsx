import { Box, Container, Grid, TextField, Typography } from '@material-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { isLoggedInVar } from '../apollo/cache';
import { AccountNav, IconAndText, StyledForm } from '../components/partials/Accounts';
import { AccountSubmitButton } from '../components/partials/Buttons';
import { Copyright } from '../components/partials/Footer';
import { StyledDiv } from '../components/screens/Signup';
import Loading from '../components/ui/Loading';
import { useSignupMutation } from '../graphql/__generated__/generated-types-and-hooks';
import { siteTitle, urls } from './index';

const Signup: React.FC = () => {
    let email: HTMLInputElement,
        password: HTMLInputElement,
        school: HTMLInputElement,
        name: HTMLInputElement;
    const router = useRouter();
    const [signupMutation, { error, loading }] = useSignupMutation();

    const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (email.value === '' || password.value === '') return;
        signupMutation({
            variables: {
                input: {
                    email: email.value,
                    password: password.value,
                    name: name.value,
                    school: school.value
                }
            }
        }).then((r) => {
            if (process.browser && r.data?.signup) {
                sessionStorage.setItem('token', r.data?.signup.token);
                isLoggedInVar(true);
                router.push(urls.home).then((r) => console.log(`go to ${urls.home}: ${r}`));
            }
        });
    };

    if (loading) return <Loading />;

    return (
        <Container component="main" maxWidth="xs">
            <Head>
                <title>{siteTitle} | 新規登録</title>
            </Head>
            <StyledDiv>
                <IconAndText>新規登録</IconAndText>
                {error && (
                    <Typography variant="h3" color="error">
                        エラーが発生しました。{error}
                    </Typography>
                )}
                <StyledForm noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="email"
                                label="メールアドレス"
                                type="email"
                                autoComplete="email"
                                inputRef={(node: HTMLInputElement) => {
                                    email = node;
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
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
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="school"
                                label="学校名"
                                type="text"
                                inputRef={(node: HTMLInputElement) => {
                                    school = node;
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="name"
                                label="ニックネーム"
                                type="text"
                                inputRef={(node: HTMLInputElement) => {
                                    name = node;
                                }}
                            />
                        </Grid>
                    </Grid>

                    <AccountSubmitButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleSignup}>
                        登録する
                    </AccountSubmitButton>

                    <Grid container justify="flex-end">
                        <AccountNav href={urls.login}>
                            すでにアカウントを持っている方はこちらへ
                        </AccountNav>
                    </Grid>
                </StyledForm>
            </StyledDiv>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Signup;
