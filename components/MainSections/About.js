import Image from "next/image"
import BtnComp from "../btn/BtnComp"


const About = () => {
	return (
		<section className='py-12' id="about">
			<div className='container mx-auto'>

				<div className='bg-white rounded-3xl py-8 sd:px-8 xz:px-4 flex sd:flex-row xz:flex-col-reverse items-center shadow-xl'>

					<div className='sd:w-1/2 xz:w-full sd:mr-10 xz:mr-0 sd:mt-0 xz:mt-8'>
						<p className='uppercase font-semibold'>
							Наша миссия
						</p>
						<h5 className='sd:text-6xl xz:text-5xl font-bold mt-2'>
							О нас
						</h5>

						<p className='mt-8 font-light'>
							В нашем кафе мы стремимся создать уютное и дружелюбное пространство, где каждый гость может наслаждаться вкусной едой и приятной атмосферой. Мы гордимся тем, что используем только свежие и качественные ингредиенты в наших блюдах, чтобы порадовать вас самыми изысканными вкусами. Наша миссия - делать ваше время в кафе незабываемым и приятным, чтобы вы возвращались снова и снова
						</p>

						<BtnComp title='Напишите нам' index={1005} red />
					</div>

					<div className='sd:w-1/2 xz:w-full'>
						<Image src='/images/about.webp' alt='О кафе' className="rounded-3xl" width={1000} height={1000} />
					</div>

				</div>
			</div>
		</section>
	)
}

export default About