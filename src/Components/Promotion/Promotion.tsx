import React from 'react'
import { MdFollowTheSigns } from 'react-icons/md'
import './promotion.css'
const Promotion = () => {
	return (
		<div className='promotion_container'>
			<section className='relative px-10 py-16 overflow-hidden bg-white'>
				<img
					className='absolute left-0 z-0 object-cover object-center w-full h-full opacity-50 top-24'
					src='https://cdn.devdojo.com/tails/images/swirl-white.svg'
				/>
				<div className='container relative z-10 px-4 mx-auto'>
					<div className='grid w-full grid-cols-1 sm:gap-8 md:gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
						<div className='row-span-2 col-span-full sm:col-span-1 md:col-start-1 sm:row-start-2 md:row-start-3'>
							<a
								href='#_'
								className='promotion_card_img relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group'
							>
								<div className='absolute inset-0 w-full h-full'>
									<div className='absolute bottom-0 left-0 z-10 w-full h-full opacity-30 bg-gradient-to-b from-transparent to-gray-900'></div>
									<img
										className='absolute inset-0 object-cover object-center w-full h-full transition duration-500 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110'
										src='/images/promo_watch_1.png'
										alt=''
									/>
								</div>
								<div className='relative z-10 flex flex-col items-start justify-start w-full px-6 py-7'>
									<span className='px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-gv-blue rounded-md'>
										Pro
									</span>
									<h4 className='text-4xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl'>
										Dashboard
									</h4>
								</div>
							</a>
						</div>
						<div className='row-span-2 col-span-full sm:col-span-1 md:col-start-1 xl:col-start-2 sm:row-start-4 md:row-start-5 xl:row-start-2'>
							<a
								href='#_'
								className='promotion_card_img relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group'
							>
								<div className='absolute inset-0 w-full h-full'>
									<div className='absolute bottom-0 left-0 z-10 w-full h-full opacity-30 bg-gradient-to-b from-transparent to-gray-900'></div>
									<img
										className='absolute inset-0 object-cover object-center w-full h-full transition duration-500 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110'
										src='/images/promo_watch_2.png'
										alt=''
									/>
								</div>
								<div className='relative z-10 flex flex-col items-start justify-start w-full px-6 py-7'>
									<span className='px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-gv-blue rounded-md'>
										Pro
									</span>
									<h4 className='text-4xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl'>
										Member Management
									</h4>
								</div>
							</a>
						</div>
						<div className='row-span-2 col-span-full sm:col-span-1 md:col-start-2 xl:col-start-2 sm:row-start-6 md:row-start-2 xl:row-start-4'>
							<a
								href='#_'
								className='promotion_card_img relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group'
							>
								<div className='absolute inset-0 w-full h-full'>
									<div className='absolute bottom-0 left-0 z-10 w-full h-full opacity-30 bg-gradient-to-b from-transparent to-gray-900'></div>
									<img
										className='absolute inset-0 object-cover object-center w-full h-full transition duration-500 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110'
										src='/images/promo_watch_3.png'
										alt=''
									/>
								</div>
								<div className='relative z-10 flex flex-col items-start justify-start w-full px-6 py-7'>
									<span className='px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-gv-blue rounded-md'>
										Pro
									</span>
									<h4 className='text-4xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl'>
										Custom NFTs
									</h4>
								</div>
							</a>
						</div>

						<div className='promo-blurb '>
							<div className='w-full  sm:-mb-32 md:-mb-24 lg:-mb-36 xl:-mb-28'>
								<p className='my-3 text-5xl font-bold tracking-tighter text-black lg:text-6xl'>
									MINT & SELL YOUR WATCHES
								</p>
								<p className='max-w-sm text-lg text-gray-500'>
									Check out our awesome features including a
									beautiful dashboard, member management,
									integrations center, and much more.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Promotion
