import Head from 'next/head'
import { Box } from '@mui/material'
import LoginPage from './login'
import DashBoardPage from './dashboard'


export default function Home() {
  return (
    <>
      <Head>
        <title>Time Tracker App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <AdminLayOut> */}
        <Box sx={{mx:"auto"}}>
      <DashBoardPage />
        </Box>

      {/* </AdminLayOut> */}
      
    </>
  )
}

