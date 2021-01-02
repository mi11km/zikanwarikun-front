import { styled } from '@material-ui/core';

export const LinkInnerAnchor = styled('a')({
    textDecoration: 'none',
    color: 'inherit'
});

export const LinkInnerUnderlineAnchor = styled(LinkInnerAnchor)({
    '&:hover': {
        textDecoration: 'underline'
    },
    cursor: 'pointer'
});
