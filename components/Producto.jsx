import React from "react";
import Image from "next/image";
import { formatearMoneda } from "../helpers";
import useKiosko from "../hooks/useKiosko";

const Producto = ({ producto }) => {
	const { handleProducto, handleChangeModal } = useKiosko();
	const { prod_nombre, prod_precio, prod_imagen } = producto;
	return (
		<div className="border p-3">
			<Image
				src={`/assets/img/${prod_imagen}.jpg`}
				alt={`Imagen platillo ${prod_nombre}`}
				width={400}
				height={500}
			/>
			<div className="p-5">
				<h3 className="text-2xl font-bold">{prod_nombre}</h3>
				<p className="mt-5 font-black text-4xl text-amber-500">
					S/ {formatearMoneda(prod_precio)}
				</p>
				<button
					type="button"
					className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
					onClick={() => {
						handleChangeModal();
						handleProducto(producto);
					}}
				>
					Agregar
				</button>
			</div>
		</div>
	);
};

export default Producto;
