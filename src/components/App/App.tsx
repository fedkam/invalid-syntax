import React from 'react';
import styled from 'styled-components';
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter as Router } from 'react-router-dom';
import { EaptekaTheme } from '../../common/GlobalTheme';
import { Routing as Body } from '../../routing';
import { NavBar } from '../NavBar';
import { ReactComponent as ShoppingСartIcon } from '../../assets/images/icons/24/shopping-cart.svg';

const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 375px;
  position: relative;
`;

const App = () => (
  <EaptekaTheme>
    <BreakpointProvider>
      <Router>
        <AppStyle>
          <NavBar />
          <Body />
        </AppStyle>
      </Router>
    </BreakpointProvider>
  </EaptekaTheme>
);

export default App;
