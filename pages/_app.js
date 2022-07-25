import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return(
    <>
      <NextNProgress color="#F54748" startPosition={0.6} stopDelayMs={500} height={6} />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
