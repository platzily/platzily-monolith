import { createTheme } from '@platzily-ui/styling';
import { ThemeProvider } from '@platzily-ui/styling';

export const theme = createTheme();

function ProviderMock({ children }) {
    
    return (
            <>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </> 
        )
}

export default ProviderMock