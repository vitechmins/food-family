"use client"
import Image from "next/image"
import { Link as LinkScroll } from 'react-scroll';

const Vizitka = () => {
	return (
		<section className='bg-secondary sd:py-20 xz:py-12 relative'>
			<div className='container mx-auto'>
				<div className='bg-white rounded-badge py-10 sd:px-20 xz:px-6 text-center'>
					<h1 className='sd:text-5xl xz:text-3xl font-bold mx-auto'>
						Кафе в Минске
					</h1>
					<p className='mt-6'>
						Заказать стол можно по телефону
					</p>

					<div className='flex justify-center mt-4'>
						<Image src='/svg/phone.svg'
							alt='Телефон кафе для заказа'
							width={50} height={50}
							className="mr-2 xz:w-7 sd:w-12"
						/>
						<a href="tel:80257773473" className="font-bold sd:text-5xl xz:text-xl xy:text-2xl">
							+375 25 777-34-73
						</a>

					</div>
					<div className='flex justify-center mt-4'>
						<Image src='/svg/phone.svg'
							alt='Телефон кафе для заказа'
							width={50} height={50}
							className="mr-2 xz:w-7 sd:w-12"
						/>
						<a href="tel:80447775828" className="font-bold sd:text-5xl xz:text-xl xy:text-2xl">
							+375 44 777-58-28
						</a>

					</div>
					<p className='mt-4'>
						также в нашем кафе есть
					</p>
					<div className='flex sd:flex-row xz:flex-col space-x-3 justify-center mt-4'>
						<div className='px-3'>
							<p className='text-xl font-bold'>
								Доставка
							</p>

						</div>
						<div className='px-3 sd:mt-0 xz:mt-4'>
							<p className='text-xl font-bold'>
								Самовывоз
							</p>
							<p className=''>
								(ул. Киселёва, 12 )
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Vizitka