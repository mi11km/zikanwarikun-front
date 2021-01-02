import { Grid, styled } from '@material-ui/core';

export const RootGrid = styled(Grid)({
    height: '100vh'
});

export const ImageGrid = styled(Grid)((theme) => ({
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
        theme.theme.palette.type === 'light'
            ? theme.theme.palette.grey[50]
            : theme.theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}));

export const StyledDiv = styled('div')((theme) => ({
    margin: theme.theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));
