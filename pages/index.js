import Producto from "../components/Producto";
import useKiosko from "../hooks/useKiosko";
import Layout from "../layout/Layout";

export default function Home() {
	const { categoriaActual } = useKiosko();
	return (
		<>
			<Layout pagina={`Menú ${categoriaActual?.cat_nombre}`}>
				<h1 className="text-4xl font-black">{categoriaActual?.cat_nombre}</h1>
				<p className="text-2xl my-10">
					Elige y personaliza tu pedido a continuacion
				</p>
				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
					{categoriaActual?.productos?.map((produc) => (
						<Producto key={produc.prod_id} producto={produc} />
					))}
				</div>
			</Layout>
		</>
	);
}
