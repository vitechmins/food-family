"use client"
import UserCart from "@/components/userCart/UserCart";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cart() {
	const [data, setData] = useState(null);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		if (!loaded && typeof window !== "undefined") {
			fetchProducts();
		}
	}, [loaded]);

	const fetchProducts = async () => {
		try {
			const cartData = JSON.parse(localStorage.getItem("cart")) || [];
			setData(cartData)

		} catch (error) {
			console.error("Error:", error);
		}
	};
	return (
		<div className="">
			{
				data && data.length ?
					<div className='container mx-auto py-20'>
						<UserCart data={data} setData={setData} />
					</div>
					:
					<div className="hero min-h-screen" style={{ backgroundImage: `url("/images/korzina.webp")` }}>
						<div className="hero-content text-center text-neutral-content">
							<div className="max-w-md text-white bg-black/70 px-5 py-4 rounded-md">
								<h1 className="mb-5 text-5xl font-bold uppercase">Пусто</h1>
								<p className="mb-5">
									В вашей корзине нет товаров
								</p>

								<div className='mt-10'>
									<Link href='/' className="underline text-primary text-xl">
										На главную
									</Link>
								</div>
							</div>
						</div>
					</div>
			}
		</div>
	);
}

