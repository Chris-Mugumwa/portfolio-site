import '../styles/globals.scss'
import type { AppProps } from 'next/app'

{
	/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kreon:wght@300;400;600&family=Libre+Franklin:wght@400;600;700&family=Manrope:wght@400;600&family=Poppins:wght@400;600&family=Ropa+Sans:ital@0;1&display=swap" rel="stylesheet"></link> */
}

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default MyApp
