import {
    AppBar,
    Button,
    CssBaseline,
    Grid,
    Slide,
    Toolbar,
    useScrollTrigger
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { urls } from '../../../pages';

interface Props {
    window?: () => Window;
    children?: React.ReactElement;
}

const HideOnScroll: React.FC<Props> = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: theme.palette.warning.light
        // backgroundColor: 'transparent'
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

const Header: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const router = useRouter();

    const handleRoute = (e: React.MouseEvent<HTMLButtonElement>, urlPath: string) => {
        e.preventDefault();
        router.push(urlPath).then((r) => console.log(`go to ${urlPath}: ${r}`));
    };

    return (
        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                        <Link href={urls.home}>
                            <a>
                                <img src="/logo.png" alt="logo" height="48px" />
                            </a>
                        </Link>
                        <Grid container justify="flex-end" spacing={2}>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    onClick={(e) => handleRoute(e, urls.signup)}
                                    style={{ color: 'white' }}>
                                    ユーザー登録
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    onClick={(e) => handleRoute(e, urls.login)}
                                    style={{ color: 'white' }}>
                                    ログインする
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    );
};

export default Header;
