import React, { FC } from 'react'
import Stats from '../Stats/Stats'
import Heronav from '../Heronav/Heronav'
// @ts-ignore
const Hero = () => {
	// @ts-ignore
	return (
		<>
			<section className='relative w-full pb-6 bg-black sm:pb-8 lg:pb-12 h-screen'>
			<div className='relative z-20 px-10 mx-auto max-w-screen-2xl h-full'>
				<Heronav />
					<section className='max-w-2xl lg:max-w-screen-2xl xl:px-8 mx-auto items-center flex lg:flex-row flex-col h-full'>
						<div className='flex flex-col max-w-screen-2xl md:px-0 mx-auto lg:flex-row'>
							<div className='flex flex-col items-start justify-center w-full pr-10 mb-0 lg:w-2/3'>
								<div className='relative'>
									<p className='mb-2 text-gv-gold font-bold'>
										Exclusive Security for Digital and
										Real-world Assets
									</p>
									<h1 className='text-4xl font-extrabold tracking-wide text-white sm:text-5xl xl:text-6xl'>
										<span className='block xl:inline uppercase'>
											The world's{' '}
										</span>
										<span className='block text-gv-gold xl:inline'>
											ONLY
										</span>
										<span className='block xl:inline uppercase'>
											{' '}
											non-fungible watch (NFW)
											marketplace.
										</span>
									</h1>
								</div>
								<p className='my-8 text-sm text-white md:text-xl'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Tristique posuere nisl,
									odio amet, aliquam tortor pulvinar
									tincidunt. At quis lorem egestas aliquet
									amet, orci tellus.
								</p>
								<Stats />
							</div>

							<div className='flex flex-col items-center justify-center w-full lg:w-1/3'>
								<img
									src='/images/watch_hero.png'
									className='object-fill h-full w-full'
								/>
							</div>
						</div>
					</section>
				</div>
				<div className='absolute inset-0 z-10 flex items-end w-full h-full bg-cover opacity-50'>
					<img
						src='/images/hero_bg.png'
						className='object-cover w-full h-full'
					/>
				</div>
			</section>
		</>
	)
}

export default Hero
