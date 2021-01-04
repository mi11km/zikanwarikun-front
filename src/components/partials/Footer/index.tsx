import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import React from 'react';

import { LinkInnerAnchor } from '../../ui/Anchor';

export const Copyright: React.FC = () => {
    return (
        <React.Fragment>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link href="/">
                    <LinkInnerAnchor>時間割くん</LinkInnerAnchor>
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </React.Fragment>
    );
};

const userStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4),
        borderTop: 'solid 1px #DFDFDF',
        marginTop: '128px'
    },
    info: {
        marginBottom: theme.spacing(1)
    }
}));

const Footer: React.FC = () => {
    const classes = userStyles();

    return (
        <footer className={classes.footer}>
            <Grid
                container
                spacing={2}
                justify="center"
                color="textSecondary"
                className={classes.info}>
                <Grid item>
                    <Typography variant="body1" color="textSecondary">
                        利用規約
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" color="textSecondary">
                        プライバシー
                    </Typography>
                </Grid>
            </Grid>
            <Copyright />
        </footer>
    );
};

export default Footer;
