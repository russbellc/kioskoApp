import React from "react";
import Image from "next/image";
import useKiosko from "../hooks/useKiosko";

const Categoria = ({ categoria }) => {
	const { handleClickCategoria, categoriaActual } = useKiosko();
	const { cat_nombre, cat_icono, cat_id } = categoria;
	// console.log(categoria);
	return (
		<div className={`${
            categoriaActual?.cat_id===cat_id? "bg-amber-500":""
        }
        flex items-center gap-4 w-full border p-5 hover:bg-amber-500`}>
			<Image
				width={70}
				height={70}
				src={`/assets/img/icono_${cat_icono}.svg`}
				alt={`imagen icono ${cat_nombre} `}
			/>
			<button
				type="button"
				className="text-2xl font-bold hover:cursor-pointer"
				onClick={() => handleClickCategoria(cat_id)}
			>
				{cat_nombre}
			</button>
		</div>
	);
};

export default Categoria;
