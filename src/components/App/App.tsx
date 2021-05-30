import React from 'react';
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter as Router } from 'react-router-dom'
import { EaptekaTheme } from '../../common/GlobalTheme'

const App = () => (
  <EaptekaTheme>
    <BreakpointProvider>
      <Router>

      </Router>
    </BreakpointProvider>
  </EaptekaTheme>
)

export default App;
