import React from 'react'

const Banner = () => {
	return (
		<section className='relative block py-20 overflow-hidden leading-6 text-left bg-gv-gold'>
			<div className='w-full max-w-7xl px-0 mx-auto leading-6 text-left'>
				<div className='relative w-full leading-6 text-left flex items-center'>
					<div className='flex w-full md:w-1/2'>
						<h2 className='box-border text-3xl font-bold text-white uppercase '>
							The amazing WORLD of LUXURY WATCHES.
						</h2>
					</div>
					<div className='flex w-full md:w-1/2'>
						<div className='flex w-full md:w-1/2'>
							<div className='flex-col'>
								<div className='flex justify-start mb-2'>
									<img
										src='/images/card-tick.png'
										alt=''
										className='w-8 h-8 mr-6'
									/>
									<h3 className='box-border mx-0 mb-0 text-sm font-bold leading-normal text-white sm:text-lg'>
										Fast Transactions
									</h3>
								</div>
								<p className='text-white'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Aliquam.
								</p>
							</div>
						</div>
						<div className='flex w-full md:w-1/2'>
							<div className='flex-col'>
								<div className='flex justify-start mb-2'>
									<img
										src='/images/sheild.png'
										alt=''
										className='w-8 h-8 mr-6'
									/>
									<h3 className='box-border mx-0 mb-0 text-sm font-bold leading-normal text-white sm:text-lg'>
										Extremely Secure
									</h3>
								</div>
								<p className='text-white'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Aliquam.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
