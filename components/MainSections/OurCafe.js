"use client"
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';


const OurCafe = () => {
	return (
		<section className='py-16'>
			<div className='container mx-auto'>

				<div className='grid sd:grid-cols-2 xz:grid-cols-1 sd:gap-8 xz:gap-5'>
					<div className=''>
						<Image src='/images/1.webp' alt='В нашем кафе' className="rounded-3xl shadow-xl" width={996} height={996} />
					</div>

					<div className='bg-secondary w-full text-black shadow-xl rounded-3xl flex justify-center items-center p-7'>
						<div className=''>
							<p className='uppercase font-semibold mb-4'>
								в нашем кафе
							</p>
							<p className='sd:text-6xl xz:text-4xl font-bold'>
								Кулинарное приключение на любой вкус
							</p>

							<button className='btn bg-black border-none sd:btn-lg xz:btn-md rounded-full text-white uppercase mt-8'>
								<LinkScroll
									to="menu"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Наше меню
								</LinkScroll>
							</button>
						</div>
					</div>
				</div>

				<div className='grid sd:grid-cols-2 xz:grid-cols-1 sd:gap-8 xz:gap-5 mt-10'>
					<div className='sd:mt-0 xz:mt-6 sd:order-last xz:order-first'>
						<Image src='/images/2.webp' alt='В нашем кафе' className="rounded-3xl shadow-xl" width={996} height={996} />
					</div>

					<div className='bg-black w-full text-white shadow-xl rounded-3xl flex justify-center items-center p-7'>
						<div className=''>
							<p className='uppercase font-semibold mb-4'>
								в нашем кафе
							</p>
							<p className='sd:text-6xl xz:text-4xl font-bold'>
								Магия вкуса в каждом блюде
							</p>

							<button className='btn bg-secondary border-none sd:btn-lg xz:btn-md rounded-full  uppercase mt-8'>
								<LinkScroll
									to="menu"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Наше меню
								</LinkScroll>
							</button>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default OurCafe