import { Box, BoxProps, CircularProgress } from '@mui/material';

export const Loader = (props: BoxProps) => (
  <Box p={4} display="flex" alignItems="center" justifyContent="center" {...props}>
    <CircularProgress data-testid="loading-icon" />
  </Box>
);
