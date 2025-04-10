"use client"
import Image from "next/image";
import { Link as LinkScroll } from 'react-scroll';

const Footer = () => {
	return (
		<footer className={`py-4 relative bg-white`} id='contacts'>
			<div className='container mx-auto'>
				<aside className='flex sd:justify-between xz:justify-start items-start py-8 sd:flex-row xz:flex-col'>
					<div>
						<div className='sd:text-xl xz:text-base flex justify-center items-center'>
							<LinkScroll
								to="main"
								smooth={true}
								offset={-100}
								duration={800}
								className="cursor-pointer"
								rel="nofollow"
								href='#/'
							>
								<div className=''>
									<p className='text-xl tracking-widest font-semibold'>
										food&family.by
									</p>
									<span className='block pl-1.5 font-extralight uppercase text-[9px] tracking-[0.5em]'>
										cafe minsk
									</span>
								</div>
							</LinkScroll>
						</div>
					</div>

					<div className='sd:mt-0 xz:mt-10'>
						<div className='flex flex-col items-start sd:justify-center xz:justify-start'>
							<p className='footer-title'>
								Контакты
							</p>
							<div className='mt-2 flex'>
								<a href='tel:80257773473' className="font-semibold sd:text-xl xz:text-xl mr-2">
									+375 25 777-34-73
								</a>
								<Image src='/svg/life.svg' alt='Оператор Life' width={35} height={35} />
							</div>
							<div className='mt-2 flex'>
								<a href='tel:80447775828' className="font-semibold sd:text-xl xz:text-xl mr-2">
								+375 44 777-58-28
								</a>
							</div>
						</div>
					</div>

					<div className='sd:mt-0 xz:mt-4'>
						<p className='footer-title'>
							Адрес (Кафе)
						</p>
						<p className='text-lg'>
							Минск, ул. Уманская, 54 пав.100
							<span className="block font-bold">
								(У главного входа)
							</span>
						</p>
					</div>

					<div className='sd:mt-0 xz:mt-4'>
						<p className='footer-title'>
							Адрес (Пекарня) 
						</p>
						<p className='text-lg'>
							Минск, ул. Киселёва, 12 
							<span className="block font-bold">
								(Самовывоз)
							</span>
						</p>
					</div>

					
					<div className='sd:mt-0 xz:mt-4'>
						<p className='footer-title'>
							Режим работы
						</p>
						<p className='text-lg'>
							8:00-22:00 <span className='block font-bold'>
								Без выходных
							</span>
						</p>
					</div>
				</aside>
			</div>

			<aside className="border-t pt-1">
				<div className='container mx-auto text-center '>
					<p className='text-gray-500 xs:text-xs xz:text-[10px] font-light' >
						Copyright © 2024 Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
					</p>
				</div>
			</aside>
		</footer>
	)
}

export default Footer