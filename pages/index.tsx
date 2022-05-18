import React, { Suspense } from 'react'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import Navigation from '../components/navigation/Navigation'

const Landing = React.lazy(() => import('../components/landing/Landing'))
const Skills = React.lazy(() => import('../components/skills/Skills'))
const About = React.lazy(() => import('../components/about/About'))
const Contact = React.lazy(() => import('../components/contact/Contact'))
const Footer = React.lazy(() => import('../components/footer/Footer'))

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
				<Skills />
				<About />
				<Contact />
				<Footer />
			</AnimatePresence>
		</div>
	)
}

export default Home
