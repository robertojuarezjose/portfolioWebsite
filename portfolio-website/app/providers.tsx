'use client';

import {ThemeProvider} from './Theme-Provider';
import React, {ReactNode} from "react";



interface ProvidersProps {
    children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
}

export default Providers;
