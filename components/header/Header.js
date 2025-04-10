"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { usePathname } from 'next/navigation'
import {
	MyContext
} from '@/contexts/MyContextProvider';
import { useContext, useState } from "react";

export default function Header() {
	const pathname = usePathname()
	const { count } = useContext(MyContext);
	const [isActive, setIsActive] = useState(false)

	// sticky top-0
	return (
		<header className={`z-50 ${pathname === '/korzina/' ? 'bg-[#333333]' : 'bg-transparent'} absolute top-0 left-0 right-0`}>
			<div className='container mx-auto'>
				<div className="navbar px-0">

					<div className="navbar-start">
						<div className="drawer w-10 mr-4 sd:hidden xz:block">
							<input id="my-drawer" type="checkbox" className="drawer-toggle" />
							<div className="drawer-content">
								<label htmlFor="my-drawer" className="">
									<Image src='/svg/menu.svg' alt='Кнопка меню' width={30} height={30} />
								</label>
							</div>
							<div className="drawer-side z-50">
								<label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">
								</label>
								{
									pathname !== '/korzina/' ?
										<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content pt-10 text-lg relative">
											<li className='mb-4 text-xl font-bold'>
												<a>
													Меню
												</a>
											</li>
											<li>
												<LinkScroll
													to="main"
													smooth={true}
													offset={-100}
													duration={800}
													className="cursor-pointer"
													rel="nofollow"
													href='#/'
												>
													Главная
												</LinkScroll>
											</li>
											<li>
												<LinkScroll
													to="menu"
													smooth={true}
													offset={-100}
													duration={800}
													className="cursor-pointer"
													rel="nofollow"
													href='#/'
												>
													Меню
												</LinkScroll>
											</li>
											<li>
												<LinkScroll
													to="about"
													smooth={true}
													offset={-100}
													duration={800}
													className="cursor-pointer"
													rel="nofollow"
													href='#/'
												>
													О нас
												</LinkScroll>
											</li>
											<li>
												<LinkScroll
													to="otzyvy"
													smooth={true}
													offset={-100}
													duration={800}
													className="cursor-pointer"
													rel="nofollow"
													href='#/'
												>
													Отзывы
												</LinkScroll>
											</li>
											<li>
												<LinkScroll
													to="contacts"
													smooth={true}
													offset={-100}
													duration={800}
													className="cursor-pointer"
													rel="nofollow"
													href='#/'
												>
													Контакты
												</LinkScroll>
											</li>

											<li className='mt-16'>
												<div className='flex flex-col items-start justify-start'>
													<p className='uppercase text-gray-400 text-xs font-bold'>
														телефон администратора кафе
													</p>
													<a href='tel:80257773473'
														className='link link-hover flex'
													>
														+375 25 777-34-73
														<Image src='/svg/life-blue.svg' alt='Телефон оператора Life' width={35} height={35} className='ml-1.5' />
													</a>
													<a href='tel:80447775828'
														className='link link-hover flex'
													>
														+375 44 777-58-28
														<Image src='/svg/a1.svg' alt='Телефон оператора A1' width={15} height={15} className='ml-1.5' />
													</a>
												</div>
											</li>

											<div className='absolute bottom-3'>
												<p className='text-xl tracking-widest font-semibold leading-3'>
													food&family.by
												</p>
												<span className='block pl-1 font-extralight uppercase text-[9px] tracking-[0.5em]'>
													cafe minsk
												</span>
											</div>
										</ul>
										:
										<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content pt-10 text-lg relative">
											<li className='mb-4 text-xl font-bold'>
												<a>
													Меню
												</a>
											</li>
											<li>
												<Link
													href='/'
												>
													Главная
												</Link>
											</li>
											<li>
												<Link
													href='/'
												>
													Меню
												</Link>
											</li>
											<li>
												<Link
													href='/'
												>
													О нас
												</Link>
											</li>
											<li>
												<Link
													href='/'
												>
													Отзывы
												</Link>
											</li>
											<li>
												<Link
													href='/'
												>
													Контакты
												</Link>
											</li>

											<li className='mt-16'>
												<div className='flex flex-col items-start justify-start'>
													<p className='uppercase text-gray-400 text-xs font-bold'>
														телефон администратора кафе
													</p>
													<a href='tel:80257773473'
														className='link link-hover flex'
													>
														+375 25 777-34-73
														<Image src='/svg/life-blue.svg' alt='Телефон оператора Life' width={35} height={35} className='ml-1.5' />
													</a>
													<a href='tel:80447775828'
														className='link link-hover flex'
													>
														+375 44 777-58-28
														<Image src='/svg/a1.svg' alt='Телефон оператора A1' width={15} height={15} className='ml-1.5' />
													</a>
												</div>
											</li>

											<div className='absolute bottom-3'>
												<p className='text-xl tracking-widest font-semibold leading-3'>
													food&family.by
												</p>
												<span className='block pl-1 font-extralight uppercase text-[9px] tracking-[0.5em]'>
													cafe minsk
												</span>
											</div>
										</ul>
								}
							</div>
						</div>
						<Link
							className="cursor-pointer"
							href='/'
						>
							<div className='text-white'>
								<p className='sd:text-xl xz:text-sm sd:tracking-widest xz:tracking-normal font-semibold'>
									food&family.by
								</p>
								<span className='block pl-1 font-extralight uppercase sd:text-[9px] xz:text-[7px] sd:tracking-[0.5em] xz:tracking-[0.3em]'>
									cafe minsk
								</span>
							</div>
						</Link>
					</div>

					<div className="navbar-center hidden sd:flex">
						{
							pathname !== '/korzina/' ?

								<ul className="menu menu-horizontal p-0 font-light text-lg text-white tracking-widest">
									<li>
										<LinkScroll
											to="main"
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
											rel="nofollow"
											href='#/'
										>
											Главная
										</LinkScroll>
									</li>
									<li>
										<LinkScroll
											to="menu"
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
											rel="nofollow"
											href='#/'
										>
											Меню
										</LinkScroll>
									</li>
									<li>
										<LinkScroll
											to="about"
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
											rel="nofollow"
											href='#/'
										>
											О нас
										</LinkScroll>
									</li>
									<li>
										<LinkScroll
											to="otzyvy"
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
											rel="nofollow"
											href='#/'
										>
											Отзывы
										</LinkScroll>
									</li>
									<li>
										<LinkScroll
											to="contacts"
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
											rel="nofollow"
											href='#/'
										>
											Контакты
										</LinkScroll>
									</li>
								</ul>
								:
								<ul className="menu menu-horizontal p-0 font-light text-lg text-white tracking-widest">
									<li>
										<Link
											className=""
											href='/'
										>
											Главная
										</Link>
									</li>
									<li>
										<Link
											className=""
											href='/'
										>
											Меню
										</Link>
									</li>
									<li>
										<Link
											className=""
											href='/'
										>
											О нас
										</Link>
									</li>
									<li>
										<Link
											className=""
											href='/'
										>
											Отзывы
										</Link>
									</li>
									<li>
										<Link
											className=""
											href='/'
										>
											Контакты
										</Link>
									</li>
								</ul>
						}
					</div>
					<div className="navbar-end">
						{/* <div className='text-xs mr-10 xz:hidden sd:block'>
							<p className='font-semibold text-white/65'>
								Режим работы:
							</p>
							<p className='text-white'>
								8:00-20:00
							</p>
							<p className='text-white'>
								Выходной: <span className='text-red-500'>ВС</span>
							</p>
						</div> */}

						<div className='sd:flex xz:hidden flex-col text-white'>
							<a href='tel:80257773473'
								className='link link-hover flex sd:text-xl xz:text-base'
							>
								+375 25 777-34-73
								<Image src='/svg/life.svg' alt='Телефон оператора Life' width={35} height={35} className='ml-1.5 sd:block xz:hidden pt-0.5' />
							</a>
						</div>

						<Link
							href='/korzina'
							className="flex flex-col 
                                    items-center text-gray-500 rounded-lg
                                     p-2 min-w-[4rem] gap-1 hover:opacity-80 
                                     transition-opacity"
						>
							<div className="indicator">
								<span className="indicator-item px-1 text-xs font-semibold badge badge-secondary">
									{count ? count : 0}
								</span>
								<Image src='/svg/cart.svg' alt='Корзина' width={28} height={28} />
							</div>

						</Link>

					</div>
				</div>
			</div>
		</header >
	)
}