import Image from "next/image"


const BusinessLunch = () => {
	return (
		<section className='py-16'>
			<div className='container mx-auto'>
				<div className={`relative rounded-3xl z-0 h-[85vh] shadow-xl`}>
					<Image src='/fon/fon4.webp' alt='Обеды в нашем кафе'
						// width={1500} height={807}
						className="rounded-3xl"
						layout="fill"
						objectFit="cover"
						objectPosition="right"
					/>
					<div className='absolute top-8 sd:left-8 xz:left-3 xz:w-56 xz:h-56 sd:w-64 sd:h-64 rounded-full bg-secondary p-8 flex flex-col justify-center items-center'>
						<p className='font-extrabold sd:text-7xl xz:text-5xl'>
							-15%
						</p>
						<p className='mt-4 font-bold uppercase text-2xl text-center'>
							Бизнес ланч
						</p>
					</div>
					<div className='absolute top-1/2 sd:left-8 xz:left-3 max-w-lg'>
						<p className='font-extrabold sd:text-7xl xz:text-3xl xy:text-4xl text-white text-shadow tracking-wider'>
							Разнообразное <br /> обеденное  <br /> меню
						</p>
						<p className='text-white mt-10 xz:text-base xy:text-xl'>
							Только  <span className="text-secondary">натуральные</span> ингредиенты
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BusinessLunch