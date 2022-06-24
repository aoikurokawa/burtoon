import React from 'react'
import logo from '../../Assets/gv-logo.png'
import { ethers } from 'ethers'

import Web3Modal from 'web3modal'

const Heronav = () => {

	const connectWallet = async () => {
		console.log('clicked')
		const web3Modal = new Web3Modal()
		const connection = await web3Modal.connect()
		const provier = new ethers.providers.Web3Provider(connection)
		const signer = provier.getSigner()
	}

	return (
		<div className='relative flex items-center justify-between py-4 mb-8 md:mb-0 border-b md:py-8'>
			<a
				href='#_'
				className='inline-flex items-center text-2xl font-bold text-black-800'
			>
				<img src={logo} alt='logo' />
			</a>
			<nav className='hidden gap-12 ml-12 lg:flex'>
				<a href='#_' className='text-sm font-semibold text-gv-gold'>
					Home
				</a>
				<a
					href='#_'
					className='text-sm font-semibold text-white transition duration-100 hover:text-indigo-500'
				>
					Marketplace
				</a>
				<a
					href='#_'
					className='text-sm font-semibold text-white transition duration-100 hover:text-indigo-500'
				>
					About
				</a>
			</nav>
			<button
				onClick={connectWallet}
				className='hidden px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-gv-gold rounded-md outline-none lg:inline-block hover:bg-gv-blue hover:text-white md:text-base'
			>
				Connect Wallet
			</button>
		</div>
	)
}

export default Heronav
