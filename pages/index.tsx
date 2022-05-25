import Head from 'next/head'
import Hero from '../components/hero/Hero'
// import Projects from '../components/projects/Projects'
import MyDash from '../components/my-dash/MyDash'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import MediaFlyx from '../components/media-flyx/MediaFlyx'
import SnapFlyx from '../components/snap-flyx/SnapFlyx'

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

			<Hero />
			{/* <Projects /> */}
			<MyDash />
			<MediaFlyx />
			<SnapFlyx />
			<About />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home
