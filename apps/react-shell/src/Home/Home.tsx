import { Link } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';

import { Paths } from '@/routes';

export const Home = () => (
  <>
    <Box mb={2}>
      <Typography variant='h4'>
        Welcome to Turbo Examples.
      </Typography>
    </Box>
    <Box mb={6}>
      <Typography variant='body1'>
        Pick a project you want to discover.
      </Typography>
    </Box>
    <Grid container spacing={2}>
      <Grid item>
        <Button component={Link} to={Paths.ReactTodo} variant="contained" color="primary">
          Go to React TODO App
        </Button>
      </Grid>
      <Grid item>
        <Button component={Link} to={Paths.SvelteTodo} variant="contained" color="primary">
          Go to Svelte TODO App
        </Button>
      </Grid>
    </Grid>
  </>
);
