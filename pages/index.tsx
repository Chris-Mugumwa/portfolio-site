import React, { Suspense } from 'react'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { Navigation } from '../components/navigation/Navigation'

const Landing = React.lazy(() => import('../components/landing/Landing'))

const Home = () => {
	return (
		<div className='app'>
			<Head>
				<title>Ngoni Mugumwa</title>
				<meta
					name='Ngonidzashe Mugumwa'
					content='Junior Frontend Developer Portfolio'
				/>
				<link rel='icon' href='/Icon.svg' />
			</Head>

			<AnimatePresence exitBeforeEnter>
				<Navigation />
				<Landing />
			</AnimatePresence>
		</div>
	)
}

export default Home
