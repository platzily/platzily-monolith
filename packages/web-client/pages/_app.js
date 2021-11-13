import { createTheme } from '@platzily-ui/styling';
import { ThemeProvider } from '@platzily-ui/styling';


export const theme = createTheme();


function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>    
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App
