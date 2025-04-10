"use client"
import { sendOrderTelegram } from '@/http/telegramAPI';
import { useContext, useState } from 'react';
import InputMask from 'react-input-mask'
import {
	MyContext
} from '@/contexts/MyContextProvider';

const FormOrder = ({ closeModalOrder, setIsFormSubmitted, data, setIsActive, setData, isPromoApplied }) => {
	const [isActive2, setIsActive2] = useState(false)
	const [tel, setTel] = useState('')
	const [isBool, setIsBool] = useState(false)
	const [deliveryMethod, setDeliveryMethod] = useState('pickup'); // Для выбора метода доставки
	const [address, setAddress] = useState(''); // Для хранения адреса
	const { setCount } = useContext(MyContext);
	const [formDataForm, setFormDataForm] = useState({
		name: '',
		surname: '',
		phone: '',
		message: '',
	});

	// Пример значений для расчета суммы и скидки
	const promoCode = 'family'; // Промокод
	const discountRate = 0.05; // 5% скидка

	// Рассчёт общей суммы
	const totalAmount = data.reduce((acc, product) => {
		return acc + (product.price * product.quantity);
	}, 0);

	// Если промокод активирован, применяем скидку
	const discount = promoCode ? totalAmount * discountRate : 0;
	const finalTotal = totalAmount - discount;

	const handleSubmit = (e) => {
		e.preventDefault();
		const telWithoutSpaces = tel.replace(/\s/g, '');

		let messageForm = `<b>Заказ с сайта food-family.by:</b>\n`;
		messageForm += `<b>Тип заказа:</b> ${deliveryMethod === 'pickup' ? 'Самовывоз' : 'Доставка'}\n`; // Тип заказа
		messageForm += `<b> </b>\n`;
		data.forEach((item, index) => {
			messageForm += `<b>Товар ${index + 1}:</b> ${item.title}\n`;
			messageForm += `<b>Количество:</b> ${item.quantity}\n`;
			messageForm += `<b>Цена:</b> ${item.price} руб.\n`;
			messageForm += `<b> </b>\n`;
		});
		messageForm += `<b>Общая сумма:</b> ${totalAmount.toFixed(2)} руб.\n`; // Общая сумма заказа
		if (isPromoApplied) {
			messageForm += `<b>Сумма скидки (по промокоду):</b> ${discount.toFixed(2)} руб.\n`;
		}
		messageForm += `<b>Итого к оплате:</b> ${isPromoApplied ? finalTotal.toFixed(2) : totalAmount.toFixed(2)} руб.\n`;
		messageForm += `<b>Телефон:</b> ${telWithoutSpaces}\n`;
		messageForm += `<b>Имя:</b> ${formDataForm.name}\n`;
		messageForm += `<b>Фамилия:</b> ${formDataForm.surname}\n`;
		messageForm += `<b>Сообщение:</b> ${formDataForm.message}\n`;

		if (deliveryMethod === 'pickup') {
			messageForm += `<b>Самовывоз:</b> Минск, ул. Киселёва, 12\n`; // Адрес для самовывоза
		} else {
			messageForm += `<b>Адрес доставки:</b> ${address}\n`; // Адрес для доставки
		}

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					localStorage.removeItem("cart")
					setFormDataForm({
						name: '',
						surname: '',
						phone: '',
						message: '',
					})
					setIsActive(false)
					setIsBool(i => !i)
					setCount(0)
					setData(null)
				}
			})
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormDataForm({ ...formDataForm, [name]: value });
	};

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}

	return (
		<>
			{
				isActive2 ?
					<div role="alert" className="alert alert-warning">
						<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
						<span>
							Введите пожалуйста корректный номер телефона!
						</span>
					</div>
					:
					null
			}
			<div className="w-full bg-base-100">
				<form className="" onSubmit={handleSubmit}>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Метод доставки</span>
						</label>
						<div className="flex space-x-4">
							<label className="flex items-center">
								<input
									type="radio"
									name="deliveryMethod"
									value="pickup"
									checked={deliveryMethod === 'pickup'}
									onChange={() => setDeliveryMethod('pickup')}
								/>
								<span className="ml-2">Самовывоз</span>
							</label>
							<label className="flex items-center">
								<input
									type="radio"
									name="deliveryMethod"
									value="delivery"
									checked={deliveryMethod === 'delivery'}
									onChange={() => setDeliveryMethod('delivery')}
								/>
								<span className="ml-2">Доставка</span>
							</label>
						</div>
					</div>

					{/* Телефон обязателен для обоих вариантов */}
					<div className="form-control mt-3">
						<label className="label">
							<span className="label-text">Телефон</span>
							<span className="label-text-alt">Обязательное поле</span>
						</label>
						<InputMask
							placeholder="Введите ваш номер телефона"
							mask="8\0\ 99 9999999"
							maskChar={'-'}
							className='border py-1.5 px-3 rounded-md w-full'
							beforeMaskedValueChange={beforeMaskedValueChange}
							value={tel}
							onChange={(e) => setTel(e.target.value)}
							required
						/>
					</div>

					{/* Имя необязательно для обоих вариантов */}
					<div className="form-control mt-3">
						<label className="label">
							<span className="label-text">Имя</span>
							<span className="label-text-alt">Необязательное поле</span>
						</label>
						<input
							type="text"
							name="name"
							value={formDataForm.name}
							onChange={handleChange}
							className="input input-bordered"
							placeholder="Введите ваше имя"
						/>
					</div>

					{/* Дополнительные поля для доставки */}
					{deliveryMethod === 'delivery' && (
						<>
							<div className="form-control mt-3">
								<label className="label">
									<span className="label-text">Адрес</span>
									<span className="label-text-alt">Обязательное поле</span>
								</label>
								<input
									type="text"
									name="address"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									className="input input-bordered"
									placeholder="Введите адрес доставки"
									required={deliveryMethod === 'delivery'}
								/>
							</div>

							<div className="form-control mt-3">
								<label className="label">
									<span className="label-text">Примечание</span>
									<span className="label-text-alt">Необязательное поле</span>
								</label>
								<textarea
									name="message"
									value={formDataForm.message}
									onChange={handleChange}
									className="textarea textarea-bordered xz:textarea-sm sd:textarea-lg"
									placeholder="Желаемое время доставки и т.д."
								></textarea>
							</div>
						</>
					)}

					{/* Адрес для самовывоза */}
					{deliveryMethod === 'pickup' && (
						<div className="form-control mt-3">
							<p>Адрес для самовывоза: Минск, ул. Киселёва, 12</p>
						</div>
					)}

					<div className="form-control mt-6">
						<button className="btn btn-primary bg-green-600 border-green-600 text-white uppercase tracking-widest" type="submit">
							Заказать
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default FormOrder;
