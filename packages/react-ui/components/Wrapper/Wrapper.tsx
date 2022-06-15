import { ReactNode } from 'react';
import { Box, Container, Grid } from '@mui/material';

interface IWrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: IWrapperProps) => (
  <Container>
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} lg={6}>
        <Box pt={6} pb={4}>
          {children}
        </Box>
      </Grid>
    </Grid>
  </Container>
)
