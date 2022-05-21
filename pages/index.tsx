import Head from 'next/head'
// import Navigation from '../components/navigation/Navigation'
// import Landing from '../components/landing/Landing'
import Hero from '../components/hero/Hero'
import Projects from '../components/projects/Projects'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

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

			{/* <Navigation /> */}
			{/* <Landing /> */}
			<Hero />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home
