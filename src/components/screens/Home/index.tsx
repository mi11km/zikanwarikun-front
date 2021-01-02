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

const Background = styled('div')((theme) => ({
    backgroundColor: theme.theme.palette.warning.light,
    height: '50vh'
}));

export const HomeBackground: React.FC = ({ children }) => {
    return (
        <React.Fragment>
            <Background>{children}</Background>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#FFB74D"
                    fillOpacity="1"
                    d="M0,192L26.7,197.3C53.3,203,107,213,160,218.7C213.3,224,267,224,320,192C373.3,160,427,96,480,101.3C533.3,107,587,181,640,192C693.3,203,747,149,800,133.3C853.3,117,907,139,960,165.3C1013.3,192,1067,224,1120,213.3C1173.3,203,1227,149,1280,122.7C1333.3,96,1387,96,1413,96L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            </svg>
        </React.Fragment>
    );
};
