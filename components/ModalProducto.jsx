import Image from "next/image";
import { useState, useEffect } from "react";
import { formatearMoneda } from "../helpers";
import useKiosko from "../hooks/useKiosko";

const ModalProducto = () => {
	const [cantidad, setCantidad] = useState(1);
	const [edicion, setEdicion] = useState(false);

	const { producto, handleChangeModal, handleAgregarPedido, pedido } =
		useKiosko();
	const { prod_nombre, prod_precio, prod_imagen } = producto;

	useEffect(() => {
		if (pedido.some((prodState) => prodState.prod_id === producto.prod_id)) {
			const prodEdicion = pedido.find(
				(prodState) => prodState.prod_id === producto.prod_id
			);
			setEdicion(true);
			setCantidad(prodEdicion.cantidad);
		}
	}, [producto, pedido]);

	return (
		<div className="md:flex gap-10">
			<div className="md:w-1/3">
				<Image
					width={300}
					height={400}
					alt={`imagen producto ${prod_nombre}`}
					src={`/assets/img/${prod_imagen}.jpg`}
				/>
			</div>
			<div className="md:w-2/3">
				<div className="flex justify-end">
					<button onClick={handleChangeModal}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<h1 className="text-3xl font-bold mt-5">{prod_nombre}</h1>
				<p className="mt-5 font-bold text-5xl text-amber-500">
					S/ {formatearMoneda(prod_precio)}
				</p>
				<div className="flex gap-4 mt-5">
					<button
						type="button"
						onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
					<p className="text-3xl">{cantidad}</p>
					<button type="button" onClick={() => setCantidad(cantidad + 1)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
				<div>
					<button
						type="button"
						className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
						onClick={() => handleAgregarPedido({ ...producto, cantidad })}
					>
						{edicion ? "Guardar Cambios" : "Añadir al Pedido"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalProducto;
