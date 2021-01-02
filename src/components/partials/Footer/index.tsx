import { Typography } from '@material-ui/core';
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
