import Image from "next/image"


const Otzyvy = () => {
	return (
		<section className='sd:py-14 xz:py-8' id="otzyvy">
			<div className='container mx-auto'>


				<div className='grid sd:grid-cols-2 xz:grid-cols-1 gap-4 items-center'>

					<div className='text-center sd:mb-0 xz:mb-8'>
						<h6 className='sd:text-5xl xz:text-3xl font-semibold mb-8'>
							Отзывы
						</h6>
						<Image src='/fon/fon5.webp' alt='Повар на фото - в кафе' className="rounded-full shadow-xl" width={1071} height={1071} />
					</div>


					<div className=''>
						<div className='text-center'>
							<Image src='/svg/kavichki.svg' className="mx-auto" alt='Кавычки - отзвыв клиента кафе' width={50} height={50} />
							<p className='sd:text-xl xz:text-base mt-2'>
								Посетила это кафе с подругами на выходных, и осталась в восторге! Уютная атмосфера, вежливый персонал и потрясающая кухня! Обязательно вернусь сюда еще раз!
							</p>
							<p className='sd:text-3xl xz:text-xl mt-4 font-bold'>
								Наталья Черкун
							</p>
						</div>
						<div className='text-center mt-8'>
							<Image src='/svg/kavichki.svg' className="mx-auto" alt='Кавычки - отзвыв клиента кафе' width={50} height={50} />
							<p className='sd:text-xl xz:text-base mt-2'>
								Отличное место для проведения вечера! Приятная музыка, прекрасная еда и великолепный выбор напитков. Особенно впечатлила их пицца - просто невероятная!
							</p>
							<p className='sd:text-3xl xz:text-xl mt-4 font-bold'>
								Сацук Александр
							</p>
						</div>
						<div className='text-center mt-8'>
							<Image src='/svg/kavichki.svg' className="mx-auto" alt='Кавычки - отзвыв клиента кафе' width={50} height={50} />
							<p className='sd:text-xl xz:text-base mt-2'>
								Здесь прекрасная атмосфера, идеально подходящая для романтического ужина. Обслуживание на высшем уровне, а качество блюд просто поражает! Очень рекомендую!
							</p>
							<p className='sd:text-3xl xz:text-xl mt-4 font-bold'>
								Елена Бакун
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Otzyvy