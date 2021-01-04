import { Grid, styled, TextField, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';

import { isLoggedInVar } from '../../../apollo/cache';
import { useSignupMutation } from '../../../graphql/__generated__/generated-types-and-hooks';
import { urls } from '../../../pages';
import { StyledForm } from '../../partials/Accounts';
import { AccountSubmitButton } from '../../partials/Buttons';
import Loading from '../../ui/Loading';

const StyledTextField = styled(TextField)({
    backgroundColor: 'white',
    borderRadius: '2%'
});

export const SignupForm: React.FC = () => {
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
        <StyledForm noValidate style={{ maxWidth: '320px' }}>
            {error && (
                <Typography variant="h3" color="error">
                    エラーが発生しました。{error}
                </Typography>
            )}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <StyledTextField
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
                    <StyledTextField
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
                    <StyledTextField
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
                    <StyledTextField
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

            <AccountSubmitButton type="submit" fullWidth variant="outlined" onClick={handleSignup}>
                登録する
            </AccountSubmitButton>
        </StyledForm>
    );
};

/**/

export const HomeBackground: React.FC = ({ children }) => {
    return (
        <React.Fragment>
            <div>{children}</div>
            <style jsx>{`
                div {
                    background: #ffe259;
                    background: -webkit-linear-gradient(to right, #ffa751, #ffe259);
                    background: linear-gradient(to right, #ffa751, #ffe259);
                    height: 70vh;
                    border-bottom-right-radius: 2000px 300px;
                    border-bottom-left-radius: 2000px 300px;
                    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.2));
                }
            `}</style>
        </React.Fragment>
    );
};
