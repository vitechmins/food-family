import Image from "next/image"


const Social = () => {
	return (
		<div className="fixed sd:bottom-10 xz:bottom-10 sd:right-6 xz:right-2 flex flex-col items-center z-40">
			<a href='https://t.me/+37529' className='mx-2.5 lg:tooltip' data-tip="telegram">
				<Image src='/svg/telegram.svg' className='mb-4' alt='Телеграмм для заказа перевозки пассажиров' width={25} height={25} />
			</a>

			<a href="viber://chat?number=%2B37529" target="_blank" className='mx-2.5 lg:tooltip' data-tip="viber">
				<Image src='/svg/viber.svg' className='mb-4' alt='Вайбер для заказа перевозки пассажиров' width={25} height={25} />
			</a>

			<a href="http://wa.me/37529?text=Нужна%" target="_blank" className='mx-2.5 lg:tooltip' data-tip="whatsApp">
				<Image src='/svg/whatsapp.svg' className='mb-4' alt='whatsapp для заказа перевозки пассажиров' width={25} height={25} />
			</a>

			<a href="https://www.instagram.com//" target="_blank" className='mx-2.5 lg:tooltip text-white' data-tip="instagram">
				<Image src='/svg/instagram.svg' className='mb-4' alt='instagram для заказа перевозки пассажиров' width={25} height={25} />
			</a>
		</div>
	)
}

export default Social