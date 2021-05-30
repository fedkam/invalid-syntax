import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { ResetCss } from './ResetCss';
import { InitFonts } from './InitFonts';

export const EaptekaTheme: FC = (props) => (
    <ThemeProvider theme={theme}>
        <ResetCss />
        <InitFonts />
        {props.children}
    </ThemeProvider>
)