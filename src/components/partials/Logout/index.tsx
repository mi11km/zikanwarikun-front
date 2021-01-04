import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { isLoggedInVar } from '../../../apollo/cache';

const useStyles = makeStyles((theme) => ({
    button: {
        color: 'white',
        background: theme.palette.warning.light
    }
}));

const Logout: React.FC = () => {
    const classes = useStyles();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // todo Evict and garbage-collect the cached user objectをしないといけないらしい

        if (process.browser) {
            sessionStorage.removeItem('token');
            isLoggedInVar(false);
        }
    };

    return (
        <Button variant="outlined" className={classes.button} onClick={handleClick}>
            ログアウト
        </Button>
    );
};

export default Logout;
