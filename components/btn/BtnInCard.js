"use client"
import Link from "next/link";
import { useState, useContext } from "react";
import {
	MyContext
} from '@/contexts/MyContextProvider';

const BtnInCard = ({ item, id }) => {
	const { setCount } = useContext(MyContext);
	const [quantity, setQuantity] = useState(1);


	const handleAddToCart = () => {
		const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
		const existingitemIndex = existingCart.findIndex(
			(cartItem) => cartItem.id === item.id
		);
		if (existingitemIndex !== -1) {
			existingCart[existingitemIndex].quantity += quantity;
		} else {
			existingCart.push({
				id: item.id,
				title: item.title,
				quantity,
				price: item.price,
				img: item.image,
			});
		}
		localStorage.setItem("cart", JSON.stringify(existingCart));

		setCount(existingCart.length);

		const modal = document.getElementById(`my_modal_${id}`);
		modal.showModal();
		if (modal) {
			setTimeout(() => {
				modal.close();
			}, 7000);
		};
	}

	const closeModal = () => {
		const modal = document.getElementById(`my_modal_${id}`);
		modal.close();
	}

	return (
		<>
			<button
				className="btn btn-outline rounded-none"
				onClick={handleAddToCart}
			>
				В корзину
			</button>

			<dialog id={`my_modal_${id}`} className="modal">
				<div className="modal-box">
					<p className="font-bold text-lg mb-3">Товар добавлен в корзину</p>
					<p className="font-bold text-lg">
						{item.title}
					</p>
					<div className='flex items-center justify-between'>
						<div className="w-[7rem] h-[7rem] mt-5 mb-3 rounded-lg overflow-hidden border border-gray-300">
							<img src={item.image} alt={item.title} className="w-full h-full object-cover" />
						</div>
						<strong className="text-2xl font-medium text-gray-800">
							{item.price} руб.
						</strong>
					</div>
					<div className="modal-action">
						<Link href='/korzina' className="btn">
							Перейти в корзину
						</Link>
						<form method="dialog">
							<button className="btn">Продолжить покупки</button>
						</form>
					</div>
					<div className='absolute top-3 right-3'>
						<button className="btn text-red-600 text-2xl" onClick={closeModal}>
							x
						</button>
					</div>
				</div>
			</dialog>
		</>
	)
}

export default BtnInCard