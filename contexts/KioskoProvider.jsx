import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const KioskoContext = createContext();

const KioskoProvider = ({ children }) => {
	const [categoria, setCategoria] = useState([]);
	const [categoriaActual, setCategoriaActual] = useState({});
	const [producto, setProducto] = useState({});
	const [modal, setModal] = useState(false);
	const [pedido, setPedido] = useState([]);

	const cargarCategoria = async () => {
		const { data } = await axios.get("/api/categoria");
		setCategoria(data);
	};

	useEffect(() => {
		cargarCategoria();
	}, []);

	useEffect(() => {
		setCategoriaActual(categoria[0]);
	}, [categoria]);

	const handleClickCategoria = (id) => {
		const catActual = categoria.filter((cat) => cat.cat_id === id);
		setCategoriaActual(catActual[0]);
	};

	const handleProducto = (produc) => {
		setProducto(produc);
	};

	const handleChangeModal = () => {
		setModal(!modal);
	};

	const handleAgregarPedido = ({
		prod_imagen,
		prod_categoria,
		...producto
	}) => {
		if (
			pedido.some((productoState) => productoState.prod_id === producto.prod_id)
		) {
			const pedidoActualizado = pedido.map((productoState) =>
				productoState.prod_id === producto.prod_id ? producto : productoState
			);
			setPedido(pedidoActualizado);
			toast.success("Guardado correctamente")
		} else {
			setPedido([...pedido, producto]);
			toast.success("Agregado al Pedido")
		}
		setModal(!modal);
	};

	return (
		<KioskoContext.Provider
			value={{
				categoria,
				handleClickCategoria,
				categoriaActual,
				handleProducto,
				handleChangeModal,
				modal,
				producto,
				handleAgregarPedido,
				pedido,
			}}
		>
			{children}
		</KioskoContext.Provider>
	);
};

export { KioskoProvider };
export default KioskoContext;
