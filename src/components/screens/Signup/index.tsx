import { styled } from '@material-ui/core';

export const StyledPaper = styled('div')((theme) => ({
    marginTop: theme.theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

export const StyledForm = styled('form')((theme) => ({
    width: '100%',
    marginTop: theme.theme.spacing(3)
}));
