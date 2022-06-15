import { ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';

interface IBackgroundProps {
  children: ReactNode;
}

export const Background = ({ children }: IBackgroundProps) => {
  const { palette } = useTheme();

  const styles = {
    background: {
      backgroundColor: palette.grey[100],
      minHeight: '100vh',
    },
  }
  return <Box data-testid="background" sx={styles.background}>{children}</Box>;
};
