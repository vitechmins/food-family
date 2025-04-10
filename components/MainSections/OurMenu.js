"use client"
import Image from "next/image"
import { useState } from 'react';
import BtnInCard from "../btn/BtnInCard";

const menuDataFilter = [
	{
		id: 1,
		category: "Пицца",
		image: "/menu/menu1.webp",
		alt: "В меню кафе пицца",
	},
	{
		id: 2,
		category: "Салаты",
		image: "/menu/menu2.webp",
		alt: "В меню кафе салаты",
	},
	{
		id: 3,
		category: "Десерты",
		image: "/menu/menu3.webp",
		alt: "В меню кафе десерты",
	},
	{
		id: 4,
		category: "Напитки",
		image: "/menu/menu4.webp",
		alt: "В меню кафе напитки",
	},
	{
		id: 5,
		category: "Венские вафли",
		image: "/menu/menu5.webp",
		alt: "В меню кафе венские вафли",
	},
];

const menuData = [
	{
		id: 1,
		title: 'Пицца',
		children: [
			{
				id: 1,
				title: "Пицца 1",
				description: "соус из протертых томатов, Моцарелла, бекон, курица, соус Барбекю, томаты Черри, приправа к пицце, масло чесночное.",
				price: 25,
				image: "/menu/pizza1.webp",
			},
			{
				id: 2,
				title: "Пицца 2",
				description: "соус из протертых томатов, Моцарелла, курица, бекон, сырный соус, маринованные огурцы, приправа к пицце, масло чесночное.",
				price: 20,
				image: "/menu/pizza2.webp",
			},
			{
				id: 3,
				title: "Пицца 3",
				description: "соус из протертых томатов, Моцарелла, курица, бекон, красный лук, соус барбекю, приправа к пицце, масло чесночное.",
				price: 18,
				image: "/menu/pizza3.webp",
			},
			{
				id: 4,
				title: "Пицца 4",
				description: "соус из протертых томатов, Моцарелла, бекон, свинина, охотничий соус, маринованные огурцы, Халапеньо, приправа к пицце, масло чесночное.",
				price: 17,
				image: "/menu/pizza4.webp",
			},
		]
	},
	{
		id: 2,
		title: 'Салаты',
		children: [
			{
				id: 5,
				title: "Салат 1",
				description: "Салатные листья, помидор, огурец, лук, петрушка, рукола, твердый сыр, масло оливковое, специи",
				price: 16,
				image: "/menu/salad1.webp",
			},
			{
				id: 6,
				title: "Салат 2",
				description: "Сыр, листья салата, помидор, масло, оливки, перец, огурец",
				price: 15,
				image: "/menu/salad2.webp",
			},
			{
				id: 7,
				title: "Салат 3",
				description: "Салатные листья, броколи, лук, помидор, куриное филе, специи, заправка",
				price: 14,
				image: "/menu/salad3.webp",
			},
			{
				id: 8,
				title: "Салат 4",
				description: "Салатные листья, броколи, лук, помидор, перец желтый, перец красный, специи, заправка",
				price: 13,
				image: "/menu/salad4.webp",
			},
		]
	},
	{
		id: 3,
		title: 'Десерты',
		children: [
			{
				id: 9,
				title: "Десерт 1",
				description: "Ванильный бисквит, сливочно-сырный крем, клубничный конфитюр, белый",
				price: 12,
				image: "/menu/dessert1.webp",
			},
			{
				id: 10,
				title: "Десерт 2",
				description: "Ванильный бисквит, сливочно-сырный крем, клубничный конфитюр, белый",
				price: 11,
				image: "/menu/dessert2.webp",
			},
			{
				id: 11,
				title: "Десерт 3",
				description: "Ванильный бисквит, сливочно-сырный крем, клубничный конфитюр, белый",
				price: 10,
				image: "/menu/dessert3.webp",
			},
			{
				id: 12,
				title: "Десерт 4",
				description: "Ванильный бисквит, сливочно-сырный крем, клубничный конфитюр, белый",
				price: 9,
				image: "/menu/dessert4.webp",
			},
		]
	},
	{
		id: 4,
		title: 'Напитки',
		children: [
			{
				id: 13,
				title: "Кофе",
				description: "Кофе, сливки, корица, сахар",
				price: 8,
				image: "/menu/drink1.webp",
			},
			{
				id: 14,
				title: "Чай",
				description: "Шиповник, роза, чайный лист, ромашка",
				price: 7,
				image: "/menu/drink2.webp",
			},
			{
				id: 15,
				title: "Лимонад",
				description: "Сироп ОDК «Ревень», Пюре ОDК «Красный Апельсин», Концентрированный сок ОDК «Лимон Сауэр»",
				price: 6,
				image: "/menu/drink3.webp",
			},
			{
				id: 16,
				title: "Коктель",
				description: "Необходимые ингредиенты Лондонский сухой джин, Красный вермут, Апельсиновая цедра",
				price: 5,
				image: "/menu/drink4.webp",
			},
		]
	},
	{
		id: 5,
		title: 'Венские вафли',
		children: [
			{
				id: 14,
				title: "Вафли со сливками",
				description: "Вафли, сливки, клубника, банан",
				price: 8,
				image: "/menu/vafli1.webp",
			},
			{
				id: 15,
				title: "Вафли с карамелью",
				description: "Вафли, сливки, орехи, карамель, шоколад",
				price: 7,
				image: "/menu/vafli2.webp",
			},
			{
				id: 16,
				title: "Вафли с мороженным",
				description: "Вафли, мороженное, конфеты",
				price: 6,
				image: "/menu/vafli3.webp",
			},
			{
				id: 17,
				title: "Вафли с крамелью",
				description: "Вафли, сливки, орехи, карамель",
				price: 5,
				image: "/menu/vafli7.webp",
			},
			{
				id: 18,
				title: "Вафли с мороженным",
				description: "Вафли, сливки, мороженное",
				price: 5,
				image: "/menu/vafli8.webp",
			},
			{
				id: 19,
				title: "Вафли с сыром",
				description: "Вафли, моцарелла, помидор, залень",
				price: 5,
				image: "/menu/vafli4.webp",
			},
			{
				id: 20,
				title: "Вафли «Гамбургер»",
				description: "Вафли, сыр, зелень, говяжья котлета",
				price: 5,
				image: "/menu/vafli5.webp",
			},
			{
				id: 21,
				title: "Вафли с ветчиной",
				description: "Вафли, зелень, ветчина, сыр",
				price: 5,
				image: "/menu/vafli6.webp",
			},
			
		]
	},
]

const OurMenu = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
	};

	const handleResetClick = () => {
		setSelectedCategory(null); // Сброс фильтрации
	};

	const filteredMenuData = selectedCategory ? menuData.find(item => item.title === selectedCategory)?.children : null;

	return (
		<section className='py-14 min-h-screen' id="menu">
			<div className='container mx-auto'>
				<h2 className='font-bold sd:text-5xl xz:text-3xl text-center'>
					Наше меню
				</h2>

				<div className='mt-12 grid sd:grid-cols-5 xz:grid-cols-2 gap-4'>
					{menuDataFilter.map((item) => (
						<div 
							key={item.id} 
							className={`text-center cursor-pointer ${selectedCategory === item.category ? 'border-b-2 border-black' : ''}`} 
							onClick={() => handleCategoryClick(item.category)}
						>
							<Image
								src={item.image}
								alt={item.alt}
								className="rounded-full mx-auto shadow-xl"
								width={200}
								height={200}
							/>
							<p className={`mt-4 font-bold sd:text-2xl xz:text-xl`}>
								{item.category}
							</p>
						</div>
					))}
				</div>

				<div className='mt-8 text-center'>
					{/* Кнопка для сброса фильтрации */}
					{selectedCategory && (
						<button
							onClick={handleResetClick}
							className="btn btn-outline mt-4">
							Все меню
						</button>
					)}
				</div>

				<div className='mt-14'>
					<h3 className='font-semibold text-2xl text-center'>
						{selectedCategory ? `Выбранная категория: ${selectedCategory}` : 'Все блюда'}
					</h3>

					<div className='mt-8'>
						{filteredMenuData ? (
							<div>
								<h3 className="font-semibold text-lg text-center">{selectedCategory}</h3>
								<div className='mt-8 grid sd:grid-cols-4 xz:grid-cols-1 gap-4'>
									{filteredMenuData.map((childItem) => (
										<div key={childItem.id} className="card bg-base-100 shadow-xl">
											<figure>
												<Image src={childItem.image} alt={childItem.title} width={500} height={500} />
											</figure>
											<div className="card-body">
												<h4 className="card-title">{childItem.title}</h4>
												<p>{childItem.description}</p>
												<div className="card-actions justify-end">
													<p className='text-right font-bold text-lg'>{childItem.price} руб.</p>
												</div>
												<BtnInCard item={childItem} id={childItem.id} />
											</div>
										</div>
									))}
								</div>
							</div>
						) : (
							<div className='mt-8'>
								{menuData.map((item) => (
									<div key={item.id} className="mt-12">
										<h3 className="font-semibold text-lg text-center">{item.title}</h3>
										<div className='mt-4 grid sd:grid-cols-4 xz:grid-cols-1 gap-4'>
											{item.children.map((childItem) => (
												<div key={childItem.id} className="card bg-base-100 shadow-xl">
													<figure>
														<Image src={childItem.image} alt={childItem.title} width={500} height={500} />
													</figure>
													<div className="card-body">
														<h4 className="card-title">{childItem.title}</h4>
														<p>{childItem.description}</p>
														<div className="card-actions justify-end">
															<p className='text-right font-bold text-lg'>{childItem.price} руб.</p>
														</div>
														<BtnInCard item={childItem} id={childItem.id} />
													</div>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};



export default OurMenu;
