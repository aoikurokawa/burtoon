import './card.css'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WatchCard = ({ data }: { data: any }) => {
	return (
		<Link to={`productDetail/${data?.id}`} className='watch_card_md mt-4'>
			<Card className='watch_card text-white'>
				<Card.Img
					height='250px'
					object-fit='contain'
					variant='top'
					src={data.url}
				/>
				<Card.Body>
					<div className='cHead font-mono'>
						<div className='flex items-start justify-between my-2'>
							<div className=''>
								<Card.Title className='font-bold'>
									{data.inputValues.brand}
									<Card.Text>
										Model: {data.inputValues.model}
									</Card.Text>
								</Card.Title>
							</div>
							<div>
								<Card.Text>
									Ref: {data.inputValues.reference}
								</Card.Text>
							</div>
						</div>
						<div className='flex items-center justify-between'>
							<div className='user flex items-center my-2'>
								<img
									src='/images/blockie.png'
									alt=''
									className='w-6 h-6 rounded-lg mr-4'
								/>
								<Card.Text>
									{data.inputValues.firstName}
								</Card.Text>
							</div>
							<div className='auction'>
								<Card.Text>Auction Soon</Card.Text>
							</div>
						</div>
						<div className='flex items-center justify-between my-2'>
							<Card.Text>
								Reserve Price: ${data.inputValues.price}
							</Card.Text>
							<button className='rounded-sm bg-gv-gold py-2 px-4 cursor-pointer'>
								Place Bid
							</button>
						</div>
					</div>

					{/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
					{/* <Button variant="primary">Go somewhere</Button> */}
				</Card.Body>
			</Card>
		</Link>
	)
}

export default WatchCard
