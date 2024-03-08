import '@/styles/globals.css'
import theme from '@/styles/theme/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import '@/services/api/_config';
import Context from '@/context/auth';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const PageComponent = Component as any
  return(
    <QueryClientProvider client={queryClient}>
    <Context>
    <ThemeProvider theme={theme} >
     <PageComponent {...pageProps} />
    </ThemeProvider>
    </Context>
    </QueryClientProvider>
  )
}
