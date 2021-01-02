import { styled } from '@material-ui/core';

export const StyledDiv = styled('div')((theme) => ({
    marginTop: theme.theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));
