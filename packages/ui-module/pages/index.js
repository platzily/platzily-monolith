import { createTheme } from '@platzily-ui/styling';
import { ThemeProvider } from '@platzily-ui/styling';
import StyledBox from '../components/style';

export const theme = createTheme();


export default function Home() {
    return (    
        <ThemeProvider theme={theme}>
            <StyledBox/>
        </ThemeProvider>
    )
}
