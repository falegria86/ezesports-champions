"use client";
import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ChampionsProvider } from '@/context';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const DarkThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ChampionsProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ChampionsProvider>
    )
}