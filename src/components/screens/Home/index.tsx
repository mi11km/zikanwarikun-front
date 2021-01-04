import { Grid, styled, TextField } from '@material-ui/core';
import React from 'react';

import { StyledForm } from '../../partials/Accounts';
import { AccountSubmitButton } from '../../partials/Buttons';

const StyledTextField = styled(TextField)({
    backgroundColor: 'white',
    borderRadius: '2%'
});

export const SignupForm: React.FC = () => {
    return (
        <StyledForm noValidate style={{ maxWidth: '320px' }}>
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
                        // inputRef={(node: HTMLInputElement) => {
                        //     email = node;
                        // }}
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
                        // inputRef={(node: HTMLInputElement) => {
                        //     password = node;
                        // }}
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
                        // inputRef={(node: HTMLInputElement) => {
                        //     school = node;
                        // }}
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
                        // inputRef={(node: HTMLInputElement) => {
                        //     name = node;
                        // }}
                    />
                </Grid>
            </Grid>

            <AccountSubmitButton
                type="submit"
                fullWidth
                variant="outlined"
                // onClick={handleSignup}
            >
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
                }
            `}</style>
        </React.Fragment>
    );
};
