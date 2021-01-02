import { Button, styled } from '@material-ui/core';

export const SiteButton = styled(Button)((theme) => ({
    backgroundColor: theme.theme.palette.warning.light,
    color: 'white'
}));

export const AccountSubmitButton = styled(SiteButton)((theme) => ({
    margin: theme.theme.spacing(3, 0, 2)
}));
