import { ReactNode } from "react";
import { Background, Wrapper } from 'react-ui';

import { Header } from '../Header';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => (
  <Background>
    <Header />
    <Wrapper>
      {children}
    </Wrapper>
  </Background>
);
