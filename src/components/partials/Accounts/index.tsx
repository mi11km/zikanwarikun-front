import { Avatar, Grid, styled, Typography } from '@material-ui/core';
import CalenderIcon from '@material-ui/icons/DateRange';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { urls } from '../../../pages';
import { LinkInnerUnderlineAnchor } from '../../ui/Anchor';

export const IconAndText: React.FC = ({ children }) => {
    const router = useRouter();
    const handleClick = (e: React.MouseEvent<HTMLSpanElement | HTMLDivElement>) => {
        e.preventDefault();
        router.push(urls.home).then((r) => console.log(`go to ${urls.home}: ${r}`));
    };
    const StyledAvatar = styled(Avatar)((theme) => ({
        margin: theme.theme.spacing(1),
        backgroundColor: theme.theme.palette.warning.light,
        cursor: 'pointer'
    }));

    return (
        <React.Fragment>
            <StyledAvatar onClick={handleClick}>
                <CalenderIcon />
            </StyledAvatar>
            <Typography
                component="h1"
                variant="h5"
                onClick={handleClick}
                style={{ cursor: 'pointer' }}>
                {children}
            </Typography>
        </React.Fragment>
    );
};

interface AccountAddedNavProps {
    href: string;
}

export const AccountNav: React.FC<AccountAddedNavProps> = ({ children, href }) => {
    return (
        <Grid item>
            <Link href={href}>
                <LinkInnerUnderlineAnchor>{children}</LinkInnerUnderlineAnchor>
            </Link>
        </Grid>
    );
};
