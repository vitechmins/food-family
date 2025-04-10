import Image from "next/image"


const VizitkaBlack = () => {
	return (
		<section className='py-16 bg-black'>
			<div className='container mx-auto'>
				<div className='sd:max-w-2xl xz:max-w-full text-white mx-auto text-center'>
					<p className='sd:text-5xl xz:text-3xl font-bold'>
						Заказать кафе для проведения мероприятия
					</p>
					<p className='mt-6 text-primary'>
						можно по телефону
					</p>

					<div className='flex justify-center mt-4'>
						<Image src='/svg/phoneGreen.svg'
							alt='Телефон кафе для заказа'
							width={50} height={50}
							className="mr-2 xz:w-7 sd:w-12"
						/>
						<a href="tel:80257773473" className="font-bold sd:text-4xl xz:text-xl xy:text-2xl">
						+375 25 777-34-73
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default VizitkaBlack