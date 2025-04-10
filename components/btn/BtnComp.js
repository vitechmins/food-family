"use client"

import { useState } from "react";
import Modal from "../modal/Modal";

const BtnComp = ({ title, index, center, red, name }) => {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleOrderClick = (product) => {
		setSelectedProduct(product);
		document.getElementById(`my_modal_${index}`).showModal(); // Используем уникальный ID
	};

	const closeModal = () => {
		document.getElementById(`my_modal_${index}`).close();
	};

	return (
		<div className={`mt-10 flex items-center ${center ? 'justify-center' : ''}`}>
			<button
				className={`${red ? 'bg-primary' : 'bg-secondary'} btn border-none hover:skeleton hover:rounded-full rounded-full uppercase text-white`}
				onClick={() => handleOrderClick(name ? name : title)}
			>
				{title}
			</button>

			<Modal
				selectedProduct={selectedProduct}
				closeModal={closeModal}
				isFormSubmitted={isFormSubmitted}
				setIsFormSubmitted={setIsFormSubmitted}
				index={index}
			/>
		</div>
	)
}


export default BtnComp;
