


const AboutPhone = () => {
	return (
		<section className='py-16 bg-primary'>
			<div className='container mx-auto'>
				<div className='bg-white rounded-3xl py-8 sd:px-10 xz:px-4 shadow-xl'>
					<div className='max-w-2xl mx-auto text-center'>
						<p className='sd:text-5xl xz:text-3xl font-bold'>
							Мы создаём уютное пространство для незабываемой встречи с великолепным вкусом.
						</p>
						<p className='sd:text-xl xz:text-lg font-light mt-6'>
							В нашем кафе каждая деталь заботливо продумана, чтобы сделать ваше пребывание приятным и комфортным. Насладитесь широким выбором блюд, приготовленных с любовью и вниманием к каждой детали, и отдохните в атмосфере теплоты и гостеприимства.
						</p>
						<button className="btn btn-secondary rounded-full hover:rounded-full mt-8">
							<a href="tel:80257773473" className="sd:text-xl xz:text-base">
								+375 25 777-34-73
							</a>
						</button>
					</div>

				</div>
			</div>
		</section>
	)
}

export default AboutPhone