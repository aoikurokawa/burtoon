import React from 'react'
import SubNavbar from '../../Components/Navbar/SubNavbar'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'
import Hero from '../../Components/Hero/Hero'
import HomeHeadLine from './HomeHeadLine'
import './Home.css'
import WatchCard from '../../Components/Card/Card'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import Banner from '../../Components/Banner/Banner'
import Promotion from '../../Components/Promotion/Promotion'

const Home = () => {
	const itemSelector = useSelector((state: any) => {
		return state.watchReducer.items
	})

	return (
		<div>
			<Hero />
			<Banner />
			<div className='watch_container'>
				<div className='watch_card_container max-w-screen-2xl mx-auto px-2 md:px-32 py-20 flex-col'>
					<div className='flex justify-between items-center text-white text-semibold text-2xl'>
						<p className=''>Most Desired Watches</p>
						<Link
							to='/dashboard'
							className='text-white cursor-pointer'
						>
							View All
						</Link>
					</div>
					<Row className='flex-wrap'>
						{itemSelector.length
							? itemSelector.map(
									(items: any, index: any) =>
										index < 3 &&
										(console.log('items', items),
										(
											<Col
												className='px-4'
												xs={12}
												sm={12}
												md={4}
												lg={4}
												key={items.key}
											>
												<WatchCard data={items} />
											</Col>
										))
							  )
							: null}
					</Row>
				</div>
			</div>
			<Promotion />
			<Footer />
		</div>
	)
}

export default Home
