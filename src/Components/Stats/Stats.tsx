import React from 'react'
import { NavLink } from 'react-router-dom'

const Stats = () => {
	return (
		<div className='relative flex items-start pt-2 space-x-3'>
			<div className='mx-auto container my-2 lg:mt-12 lg:mb-24'>
				<div className='grid grid-cols-3 gap-8 items-center'>
					<div className='flex justify-center w-full py-2'>
						<div className='text-gv-gold w-1/2'>
							<h1 className='font-bold text-2xl lg:text-5xl tracking-1px'>
								98K+
							</h1>
							<h2 className='text-white text-sm lg:text-lg mt-2 leading-8 tracking-wide'>
								Owners.
							</h2>
						</div>
					</div>
					<div className='flex justify-center w-full py-6'>
						<div className='text-gv-gold w-1/2'>
							<h1 className='font-bold text-2xl lg:text-5xl tracking-1px'>
								12K+
							</h1>
							<h2 className='text-white text-sm lg:text-lg mt-2 leading-8 tracking-wide'>
								Auctions
							</h2>
						</div>
					</div>
					<div className='flex justify-center w-full py-6'>
						<div className='text-gv-gold w-1/2'>
							<h1 className='font-bold text-2xl lg:text-5xl tracking-1px'>
								15K+
							</h1>
							<h2 className='text-white text-sm lg:text-lg mt-2 leading-8 tracking-wide'>
								Watches
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stats
