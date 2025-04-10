import FormOrder from "../Form/Form";

const Modal = ({ selectedProduct, closeModal, isFormSubmitted, setIsFormSubmitted, index }) => {

	return (
		<dialog id={`my_modal_${index}`} className="modal">
			{!isFormSubmitted ? (
				<div className="modal-box text-black ">
					<p className="font-semibold text-lg">{selectedProduct ? selectedProduct : 'Сделать заказ'}</p>
					<p className="py-1 mt-3 text-sm text-gray-600">
						Пожалуйста, заполните форму, и наш администратор свяжеться с вами.
					</p>
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<FormOrder
						selectedProduct={selectedProduct}
						closeModal={closeModal}
						setIsFormSubmitted={setIsFormSubmitted}
						btn='Отправить'
					/>
				</div>
			)
				:
				(
					<div className="modal-box">
						<p className="text">Ваш заказ успешно отправлен!</p>
					</div>
				)
			}
		</dialog>
	)
}

export default Modal;